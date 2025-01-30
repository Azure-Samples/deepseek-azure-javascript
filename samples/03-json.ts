// This example demonstrates how to use the OpenAI API to generate structured
// JSON output to chat prompts.

import { OpenAI } from "openai";
import config from "./config.js";

const openai = new OpenAI({ ...config });

const chatCompletion = await openai.chat.completions.create({
  model: config.model,
  messages: [
    {
      role: "user",
      content: 'Say hello 5 different languages. Answer in JSON using { "<language>": "<result>" } format.',
    },
  ],
  response_format: {
    type: "json_object",
  },
});

console.log(chatCompletion.choices[0].message.content);
