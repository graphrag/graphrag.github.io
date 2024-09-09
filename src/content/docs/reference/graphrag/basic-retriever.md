---
title: Basic Retriever
description: A retriever that executes vector similarity search on Child Chunks but retrieves Parent Chunks.
tags: ["Basic"]
---

## Alternative Names

- Naive Retriever
- Baseline RAG
- Typical RAG

## Required Graph Shape

[Lexical Graph](/reference/knowledge-graph/lexical-graph)

## Description

The user question is embedded using the same embedder that has been used before to create the chunk embeddings. A vector similarity search is executed on the chunk embeddings to retrieve k (number previously configured by developer / user) most similar chunks.

## Usage

This pattern is useful if the user asks for specific information about a topic that exists in one or more (but not too many) chunks. The question should not require complex aggregations or knowledge about the whole dataset. Since the pattern only contains a vector similarity search it is easy to understand, implement and get started with.

## Further reading

- [Advanced Retriever Techniques to Improve Your RAGs](https://towardsdatascience.com/advanced-retriever-techniques-to-improve-your-rags-1fac2b86dd61) (Damian Gil, April 2024)
- [Implementing advanced RAG strategies with Neo4j](https://blog.langchain.dev/implementing-advanced-retrieval-rag-strategies-with-neo4j/) (November 2023)

## Existing Implementations

- [Langchain Retrievers: Vector store-backed retriever](https://python.langchain.com/v0.1/docs/modules/data_connection/retrievers/vectorstore/)
- [Langchain: Neo4jVector](https://python.langchain.com/v0.2/docs/integrations/vectorstores/neo4jvector/)

## Example Implementations

- [Langchain Templates: Neo4j Advanced RAG](https://github.com/langchain-ai/langchain/blob/master/templates/neo4j-advanced-rag/neo4j_advanced_rag/retrievers.py)
