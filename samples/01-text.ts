// This example demonstrates how to use the OpenAI API to generate text.

import { OpenAI } from "openai";
import config from "./config.js";

const openai = new OpenAI({ ...config });

const completion = await openai.completions.create({
  model: config.model,
  prompt: "Say hello in French: ",
});

console.log(completion.choices[0].text);
