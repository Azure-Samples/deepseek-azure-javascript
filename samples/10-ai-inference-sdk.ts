// This example demonstrates how to use Azure AI Inference SDK with DeepSeek models.

import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import config from "./config.js";

const client = ModelClient(config.baseURL, new AzureKeyCredential(config.apiKey));

const response = await client.path("/chat/completions").post({
  body: {
    messages: [{ role: "user", content: "Say hello in French" }],
    model: config.model,
  },
});

if (isUnexpected(response)) {
  throw response.body.error;
}

console.log(response.body.choices[0].message.content);
