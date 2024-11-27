---
title: Basic Retriever
description: A retriever that executes vector similarity search on Child Chunks but retrieves Parent Chunks.
tags: ["Basic"]
---

## Alternative Names

- Vector Retriever
- Naive Retriever
- Baseline RAG
- Basic RAG
- Typical RAG

## Required Graph Shape

[Lexical Graph](/reference/knowledge-graph/lexical-graph)

![](../../../../assets/images/knowledge-graph-lexical-graph.svg)

## Context 

It’s useful to chunk large documents into smaller pieces when creating embeddings. 
An embedding is a text’s semantic representation capturing the meaning of what the text is about. 
If the given text is long and contains too many diverse subjects, the informative value of its embedding deteriorates.

## Description

The user question is embedded using the same embedder that has been used before to create the chunk embeddings. 
A vector similarity search is executed on the chunk embeddings to retrieve k (number previously configured by developer / user) most similar chunks.

## Usage

This pattern is useful if the user asks for specific information about a topic that exists in one or more (but not too many) chunks. 
The question should not require complex aggregations or knowledge about the whole dataset. 
Since the pattern only contains a vector similarity search it is easy to understand, implement and get started with.

## Required pre-processing

Split documents into chunks and use an embedding model to embed the text content of the chunks.
See [chunking](/guides/chunking).

## Retrieval Query

No additional query is necessary since the Neo4j Vector retriever retrieves similar chunks by default.

## Further reading

- [Advanced Retriever Techniques to Improve Your RAGs](https://towardsdatascience.com/advanced-retriever-techniques-to-improve-your-rags-1fac2b86dd61) (Damian Gil, April 2024)
- [Implementing advanced RAG strategies with Neo4j](https://blog.langchain.dev/implementing-advanced-retrieval-rag-strategies-with-neo4j/) (November 2023)

## Existing Implementations

- [Neo4j GraphRAG - Vector Retriever](https://neo4j.com/docs/neo4j-graphrag-python/current/user_guide_rag.html#vector-retriever)
- [Langchain Retrievers: Vector store-backed retriever](https://python.langchain.com/v0.1/docs/modules/data_connection/retrievers/vectorstore/)
- [Langchain: Neo4jVector](https://python.langchain.com/v0.2/docs/integrations/vectorstores/neo4jvector/)

## Example Implementations

- [Langchain Templates: Neo4j Advanced RAG](https://github.com/langchain-ai/langchain/blob/master/templates/neo4j-advanced-rag/neo4j_advanced_rag/retrievers.py)
