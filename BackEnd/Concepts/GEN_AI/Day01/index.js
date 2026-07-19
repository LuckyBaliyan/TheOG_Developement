import "dotenv/config"
import readline from "readline"
import { ChatMistralAI } from "@langchain/mistralai"
import { HumanMessage } from "@langchain/core/messages"

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
 * Stores the full conversation history as an array of LangChain message objects.
 * Each turn appends a HumanMessage (user) and an AIMessage (model response),
 * so the model always receives the complete context on every invoke() call.
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

    // Push the user's message into history
    messages.push(new HumanMessage(trimmedInput));

    // Invoke the model with the FULL message history (this is what gives it memory)
    const response = await model.invoke(messages);

    // Push the AI's response into history so next turn it remembers it too
    messages.push(response);

    console.log(`\nAI: ${response.content}\n`);
  }

}

// Entry point
main();



