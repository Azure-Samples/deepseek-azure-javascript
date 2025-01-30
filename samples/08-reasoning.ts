// This example demonstrates how to use the reasoning capabilities of the
// DeepSeek-R1 model to explain the magic behind a piece of code.

import { OpenAI } from "openai";
import config from "./config.js";

const openai = new OpenAI({ ...config });

const prompt = `
float fast_inv_sqrt(float number) {
  long i;
  float x2, y;
  const float threehalfs = 1.5F;

  x2 = number * 0.5F;
  y  = number;
  i  = *(long*)&y;                            // evil floating point bit level hacking
  i  = 0x5f3759df - ( i >> 1 );               // what the fuck?
  y  = *(float*)&i;
  y  = y * ( threehalfs - ( x2 * y * y ) );   // 1st iteration
  // y  = y * ( threehalfs - ( x2 * y * y ) );   // 2nd iteration, this can be removed

  return y;
}

What is this code doing? Explain me the magic behind it.
`;

const chunks = await openai.chat.completions.create({
  model: config.model,
  messages: [{ role: "user", content: prompt }],
  stream: true,
});

for await (const chunk of chunks) {
  process.stdout.write(chunk.choices[0]?.delta.content ?? "");
}
