---
title: Hypothetical Question Retriever
description: A retriever that executes vector similarity search on hypothetical Questions and retrieves the corresponding Chunks.
tags: ["Basic"]
---

## Required Graph Shape

[Lexical Graph with Hypothetical Questions](/reference/knowledge-graph/lexical-graph-hypothetical-questions)

## Description

The user question is embedded using the same embedder that has been used before to create the question embeddings. A vector similarity search is executed on the previously generated questions. k (number previously configured by developer / user) most similar questions are found and their related Chunks are retrieved.

## Usage

This pattern can yield better results in the vector similarity search than a question-to-chunk similarity search as used in e.g. [Basic Retrievers](/reference/graphrag/basic-retriever) or [Parent-Child Retrievers](/reference/graphrag/parent-child-retriever). However, it also requires more pre-processing effort and cost in LLM calls for the question generation.

## Further reading

- [Implementing advanced RAG strategies with Neo4j](https://blog.langchain.dev/implementing-advanced-retrieval-rag-strategies-with-neo4j/) (November 2023)

## Existing Implementations

- [MultiVector Retriever: Hypothetical Queries](https://python.langchain.com/v0.1/docs/modules/data_connection/retrievers/multi_vector/#hypothetical-queries)

## Example Implementations

- [Langchain Templates: Neo4j Advanced RAG](https://github.com/langchain-ai/langchain/blob/master/templates/neo4j-advanced-rag/neo4j_advanced_rag/retrievers.py)
