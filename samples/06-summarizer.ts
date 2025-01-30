// This example demonstrates how to summarize a large text.
//
// NOTE: This example requires more time to run, as the context size is very
// large.

import fs from "node:fs";
import { OpenAI } from "openai";
import config from "./config.js";

const systemPrompt = `Rewrite this text into a very brief summary.`;

// Load a large text
const text = fs.readFileSync("./data/gh_wikipedia.txt", "utf8");

const openai = new OpenAI({ ...config });

const result = await openai.chat.completions.create({
  model: config.model,
  messages: [
    { role: "system", content: systemPrompt },
    { role: "user", content: text },
  ],
});
const summary = result.choices[0].message.content ?? "";

console.log(`Original text: ${text.length} chars`);
console.log(`Summarized text (${summary.length} chars):`);
console.log(summary);
