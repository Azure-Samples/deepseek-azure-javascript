import { OllamaEmbedding } from "llamaindex";
import { Ollama } from "llamaindex/llm/ollama";
import config from "./config.js";


(async () => {
  const llm = new Ollama(config);
  const embedModel = new OllamaEmbedding({ model: "nomic-embed-text" });
  {
    const response = await llm.chat({
      messages: [{ content: "Tell me a joke.", role: "user" }],
    });
    console.log("Response 1:", response.message.content);
  }
  {
    const response = await llm.complete({ prompt: "How are you?" });
    console.log("Response 2:", response.text);
  }
  {
    const response = await llm.chat({
      messages: [{ content: "Tell me a joke.", role: "user" }],
      stream: true,
    });
    console.log("Response 3:");
    for await (const message of response) {
      process.stdout.write(message.delta); // no newline
    }
    console.log(); // newline
  }
  {
    const response = await llm.complete({
      prompt: "How are you?",
      stream: true,
    });
    console.log("Response 4:");
    for await (const message of response) {
      process.stdout.write(message.text); // no newline
    }
    console.log(); // newline
  }
  {
    const embedding = await embedModel.getTextEmbedding("Hello world!");
    console.log("Embedding:", embedding);
  }
})();
