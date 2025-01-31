import { OpenAI } from "llamaindex";
import config from "./config.js";

const response = await new OpenAI({ additionalSessionOptions: config }).chat({
  messages: [{ content: "Tell me a joke.", role: "user" }],
});
console.log(response.message.content);
