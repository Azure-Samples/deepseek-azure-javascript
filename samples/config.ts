// This file sets up the configuration for using DeepSeek models with different
// providers.

import process from "node:process";
import 'dotenv/config';

// Configuration for using GitHub models
const githubModelsConfig = {
  baseURL: "https://models.inference.ai.azure.com",
  apiKey: process.env.GITHUB_TOKEN,
  model: "DeepSeek-R1"
};

// Configuration for using Azure AI Foundry models
export const azureConfig = {
  baseURL: process.env.AZURE_AI_BASE_URL,
  apiKey: process.env.AZURE_AI_API_KEY,
  model: process.env.AZURE_AI_DEPLOYMENT_NAME!
};

// Configuration for using Ollama models
export const ollamaConfig = {
  baseURL: "http://localhost:11434",
  apiKey: "__not_needed__",
  model: "deepseek-r1:7b"
};

// Set the configuration to use with all the examples
// export default githubModelsConfig;
export default azureConfig;
console.log(azureConfig);