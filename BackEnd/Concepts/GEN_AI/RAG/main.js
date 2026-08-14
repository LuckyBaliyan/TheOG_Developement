import "dotenv/config";
import pdfParse from "pdf-parse";
import fs from "fs";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { Pinecone } from "@pinecone-database/pinecone";

const buffer = fs.readFileSync("./story.pdf");

const data = await pdfParse(buffer);


const embeddings = new MistralAIEmbeddings({
      apiKey: process.env.MISTRAL_API_KEY,
      model: "mistral-embed", // Default Mistral embedding model
});

//vector db setup
const pc = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY
});

const index = pc.Index("rag-part1");

const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 100, //count the words
      chunkOverlap: 0,
})

const chunks = await splitter.splitText(data.text);

//make a proper response of all chuncks and related embedding
const docs = await Promise.all(chunks.map(async (chunk) => {
      const embedding = await embeddings.embedQuery(chunk)
      return {
            text: chunk,
            embedding
      }
}));

//store in vector db where metaData is the plain text value
const result = await index.upsert({
      records: docs.map((doc, _id) => ({
            id: `doc-${_id}`,
            values: doc.embedding,
            metadata: {
                  text: doc.text
            }
      }))
});

console.log(result);

//query in  vector Db
const queryEmbedding = await embeddings.embedQuery("Conclude this story");

//fetch top k similar results based on similarity of embeddings
const queryResult = await index.query({
      vector: queryEmbedding,
      topK: 5,
      includeMetadata: true,
})

console.log(queryResult);

