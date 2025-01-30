// This example demonstrates how to use the OpenAI API to stream the chat
// response to the console, to provide a more interactive experience.

import { OpenAI } from "openai";
import config from "./config.js";

const openai = new OpenAI({ ...config });

const chunks = await openai.chat.completions.create({
  model: config.model,
  messages: [{ role: "user", content: "Say hello in pirate style, then tell a pirate joke." }],
  stream: true,
});

for await (const chunk of chunks) {
  process.stdout.write(chunk.choices[0]?.delta.content ?? "");
}
