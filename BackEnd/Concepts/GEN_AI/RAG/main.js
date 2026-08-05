import "dotenv/config";
import pdfParse from "pdf-parse";
import fs from "fs";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const buffer = fs.readFileSync("./story.pdf");

const data = await pdfParse(buffer);


const embeddings = new MistralAIEmbeddings({
      apiKey: process.env.MISTRAL_API_KEY,
      model: "mistral-embed", // Default Mistral embedding model
});


const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 100, //count the words
      chunkOverlap: 0,
})

const chunks = await splitter.splitText(data.text);
//to avoid too many inputs
const sliced = chunks.slice(0, 90);
console.log(sliced);

const docs = await embeddings.embedDocuments(sliced);
console.log(docs);
