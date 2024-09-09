---
title: Parent-Child Retriever
description: A retriever that executes vector similarity search on Child Chunks but retrieves Parent Chunks.
---

## Alternative Names

- Parent-Document-Retriever

## Required Graph Shape

[Parent-Child Lexical Graph](/reference/knowledge-graph/lexical-graph-parent-child)

## Description

The user question is embedded using the same embedder that has been used before to create the Chunk embeddings. A vector similarity search is executed on the Child Chunk embeddings to find k (number previously configured by developer / user) most similar Chunks. The Parent Chunks of the found Child Chunks are retrieved.

## Usage

This pattern is a useful evolution of the Basic Retriever. It is especially useful when several topics are covered in a chunk which subsequently influence the embedding negatively while smaller chunks will have more meaningful vector representations which can then lead to better similarity search results. With limited additional effort, better results can be obtained.

## Further reading

- [Advanced Retriever Techniques to Improve Your RAGs](https://towardsdatascience.com/advanced-retriever-techniques-to-improve-your-rags-1fac2b86dd61) (Damian Gil, April 2024)
- [Implementing advanced RAG strategies with Neo4j](https://blog.langchain.dev/implementing-advanced-retrieval-rag-strategies-with-neo4j/) (November 2023)

## Existing Implementations

- [Langchain Retrievers: Parent Document Retriever](https://python.langchain.com/v0.1/docs/modules/data_connection/retrievers/parent_document_retriever/)

## Example Implementations

- [Langchain Templates: Neo4j Advanced RAG](https://github.com/langchain-ai/langchain/blob/master/templates/neo4j-advanced-rag/neo4j_advanced_rag/retrievers.py)
