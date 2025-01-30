<div align="center">

<img src="./docs/images/playground.png" alt="" align="center" height="128" />

# DeepSeek on Azure - JavaScript demos

[![Open project in GitHub Codespaces](https://img.shields.io/badge/Codespaces-Open-blue?style=flat-square&logo=github)](https://codespaces.new/Azure-Samples/deepseek-azure-javascript?hide_repo_select=true&ref=main&quickstart=true)
![Node version](https://img.shields.io/badge/Node.js-20+-grass?style=flat-square)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-orange?style=flat-square)](LICENSE)

⭐ If you like this repo, star it on GitHub — it helps a lot!

[Overview](#overview) • [Usage](#usage) • [Run the samples](#run-the-samples) • [Next steps](#next-steps) • [Resources](#resources)

</div>

## Overview

DeepSeek-R1 model has been announced on [GitHub Models](https://github.blog/changelog/2025-01-29-deepseek-r1-is-now-available-in-github-models-public-preview/)
as well as on [Azure AI Foundry](https://azure.microsoft.com/en-us/blog/deepseek-r1-is-now-available-on-azure-ai-foundry-and-github/), and
the goal of this collection of samples is to demonstrate how to use it with JavaScript/TypeScript, using either the [OpenAI Node.js SDK](https://github.com/openai/openai-node) or [LangChain.js](https://js.langchain.com/)

> [!IMPORTANT]
> You can run any of these demos right in your browser for free using [GitHub Codespaces](https://github.com/features/codespaces) and [GitHub Models](https://github.com/marketplace/models)! ✨

## Usage

This project is designed to be opened in GitHub Codespaces, which provides you a pre-configured environment to run the code and AI models. Follow these steps to get started:

1. Click on the "Codespaces: Open" button:<br>[![Open project in GitHub Codespaces](https://img.shields.io/badge/Codespaces-Open-blue?style=flat-square&logo=github)](https://codespaces.new/Azure-Samples/deepseek-azure-javascript?hide_repo_select=true&ref=main&quickstart=true)
2. Once the Codespace is loaded, it should have everything pre-installed, including the [OpenAI Node SDK](https://github.com/openai/openai-node).
3. Open the file `notebook.ipynb` in the editor and follow the instructions.

> [!TIP]
> While you're following the instructions of the interactive notebook, you can run the code cells by clicking on the "Execute cell" (▶️) button in the top left corner of the cell. You can also edit the code and run it again to see how the model responds to different inputs.
> ![Screenshot of a code cell highlighting the "executing cell" button](./docs/images/execute-cell.png)

## Run the samples

In the [samples](./samples) folder of this repository, you'll find examples of how to use generative AI models using the OpenAI Node.js SDK. You can run them by executing the following command in the terminal:

```bash
tsx samples/<filename>
```

Alternatively, you can open a sample file in the editor and run it directly by clicking the "Run" (▶️) button in the top right corner of the editor.

## Next steps

TODO

Once you're comfortable with this playground, you can explore more advanced topics and tutorials:
- [Generative AI for beginners](https://github.com/microsoft/generative-ai-for-beginners) [course]: a complete guide to learn about generative AI concepts and usage.
- [Phi-3 Cookbook](https://github.com/microsoft/Phi-3CookBook) [tutorials, samples]: hands-on examples for working with the Phi-3 model.

- [Build a serverless AI chat with RAG using LangChain.js](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/build-a-serverless-ai-chat-with-rag-using-langchain-js/ba-p/4111041) (GitHub): a next step code example to build an AI chatbot using Retrieval-Augmented Generation and LangChain.js.

## Resources

Here are some additional resources to help you learn more about generative AI:
- [Generative AI with JavaScript](https://github.com/microsoft/generative-ai-with-javascript) (GitHub): code samples and resources to learn Generative AI with JavaScript.
- [Fundamentals of Responsible Generative AI](https://learn.microsoft.com/training/modules/responsible-generative-ai/) (Microsoft Learn): a training module to learn about the responsible use of generative AI.
- [Azure AI Foundry](https://ai.azure.com/) (Azure): a web portal to create, train, deploy and experiment with AI models.
