import "dotenv/config"
import readline from "readline"
import { ChatMistralAI } from "@langchain/mistralai"
import { HumanMessage, tool } from "langchain";
import { sendEmail } from "./mail.service.js";
import * as z from "zod"

import { createAgent } from "langchain";

/**
 * Creates and configures a readline interface for reading user input from stdin
 * and outputting prompts to stdout.
 * @returns {readline.Interface} The configured readline interface instance
 */
function createInterface() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

/**
 * Prompts the user with a question and returns their response as a Promise.
 * This wraps the callback-based readline.question() into a promise-based API
 * for use with async/await.
 * @param {readline.Interface} rl - The readline interface instance
 * @param {string} question - The prompt text to display to the user
 * @returns {Promise<string>} A promise that resolves with the user's input string
 */
function askQuestion(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}


/**
 * Creates an instance of the ChatMistralAI class with the specified model and API key.
 * @returns {ChatMistralAI} The configured ChatMistralAI instance
 */
const model = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_AI_KEY
});


/**
 * creating a tool that will be used to send an email using Gmail
 * this tool will use the Gmail SMTP server to send the email
*/

const emailTool = tool(
  sendEmail,
  {
    name: "emailTool",
    description: "Use this tool to send an email",
    schema: z.object({
      to: z.string().describe("The recipient's email address."),
      subject: z.string().describe("The subject line of the email."),
      text: z.string().describe("The body of the email in plain text."),
      html: z.string().describe("The body of the email in HTML format.")
    })
  }
)

/**
 * creating an agent that will use the model to generate responses
 */
const agent = createAgent({
  model,
  tools: [emailTool]
});

/**
 * array that will be used to store the messages in the conversation
*/

const messages = [];

/**
 * Main function that starts an interactive chat loop.
 * Continuously prompts the user for input until they type 'exit'.
 * Each message is echoed back — you can plug in your AI call here.
 */
async function main() {
  const rl = createInterface();

  console.log("🤖 Welcome to GEN_AI Day01 - Chat Interface");
  console.log('   Type your message below. Type "exit" to quit.\n');

  // Keep looping until the user types 'exit'
  while (true) {
    const userInput = await askQuestion(rl, "You: ");

    // Trim whitespace and check for exit command
    const trimmedInput = userInput.trim();

    if (trimmedInput.toLowerCase() === "exit") {
      console.log("\n👋 Goodbye!");
      rl.close();
      break;
    }

    // Skip empty input
    if (!trimmedInput) {
      console.log("⚠️  Please enter a message.\n");
      continue;
    }

    messages.push(new HumanMessage(trimmedInput));

    // invoking the model with the user input
    //const response = await model.invoke(messages);

    const response = await agent.invoke({ messages })

    messages.push(response?.messages?.at(-1)?.content);

    console.log("AI:" + response?.messages?.at(-1)?.content);
  }

}

// Entry point
main();



