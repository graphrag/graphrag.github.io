---
title: Text Chunking
description: Guide on Document Chunking
---

# Text Chunking

Text documents can be short (a social sedia post or comment) or very long (a book).

As longer text documents cover many different topics in sequential order (sometimes with references), it is desireable to structure them into smaller pieces that are semantically coherent and focus on one topic.

This process of splitting up documents into smaller pieces is called *Chunking*.

There are a number of different chunking strategies, listed below.

* Splitting: Split a document into equal sized sections (by character or token-count), with an optional overlap (typical sizes are 250-500 tokens with 50-100 tokens overlap)
* Hierarchical Document Chunking: Split a document alongside lexical boundaries - chapters, sections, paragraphs
* Sentence Chunking: Split a document into individual sentences
* Semantic Chunking: Split documents into sentences, generate embeddings and split on boundaries where the embedding vector distance exceeds a certain threshold

## Further reading

- [StackOverflow: Breaking up is hard to do: Chunking in RAG applications](https://stackoverflow.blog/2024/06/06/breaking-up-is-hard-to-do-chunking-in-rag-applications/)
- [Unstructured: Chunking for RAG: best practices](https://unstructured.io/blog/chunking-for-rag-best-practices)
- [LangChain: Chunking Strategies](https://js.langchain.com/docs/concepts/text_splitters/)
- [LlamaIndex: Chunking Strategies](https://docs.llamaindex.ai/en/stable/optimizing/basic_strategies/basic_strategies/)
- [MachineLearning Code: Optimizing RAG with Document Chunking Techniques Using Python](https://github.com/xbeat/Machine-Learning/blob/main/Optimizing%20RAG%20with%20Document%20Chunking%20Techniques%20Using%20Python.md)
