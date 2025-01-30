// This example demonstrates how to use LangChain.js with DeepSeek models.

import { OpenAI } from "openai";
import config from "./config.js";

const openai = new OpenAI({ ...config });

const chatCompletion = await openai.chat.completions.create({
  model: config.model,
  messages: [{ role: "user", content: "Say hello!" }],
});

console.log(chatCompletion.choices[0].message.content);
