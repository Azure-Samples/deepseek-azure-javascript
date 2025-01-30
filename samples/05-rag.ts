// This example demonstrates how to use the Retrieval Augmented Generation (RAG)
// to answer questions based on a hybrid car data set.
// The code below reads the CSV file, searches for matches to the user question,
// and then generates a response based on the information found.

import fs from "node:fs";
import { OpenAI } from "openai";
import config from "./config.js";

const systemPrompt = `Answers questions about cars based off a hybrid car data set.
Use the sources to answer the questions, if there's no enough data in provided sources say that you don't know.
Be brief and straight to the point.`;

const question = `what's the fastest prius`;

// Load CSV data as an array of objects
const rows = fs.readFileSync("./data/hybrid.csv", "utf8").split("\n");
const columns = rows[0].split(",");

// Search the data using a very naive search
const words = question
  .toLowerCase()
  .replaceAll(/[.?!()'":,]/g, "")
  .split(" ")
  .filter((word) => word.length > 2);
const matches = rows.slice(1).filter((row) => words.some((word) => row.toLowerCase().includes(word)));

// Format as a markdown table, since language models understand markdown
const table =
  `| ${columns.join(" | ")} |\n` +
  `|${columns.map(() => "---").join(" | ")}|\n` +
  matches.map((row) => `| ${row.replaceAll(",", " | ")} |\n`).join("");

console.log(`Found ${matches.length} matches:`);
console.log(table);

// Use the search results to generate a response
const openai = new OpenAI({ ...config });

const chunks = await openai.chat.completions.create({
  model: config.model,
  messages: [
    { role: "system", content: systemPrompt },
    { role: "user", content: `${question}\n\nSOURCES:\n${table}` },
  ],
  // Randomness of the completion (0: deterministic, 1: maximum randomness)
  temperature: 0.7,
  stream: true,
});

console.log(`Answer for "${question}":`);

for await (const chunk of chunks) {
  process.stdout.write(chunk.choices[0]?.delta.content ?? "");
}
