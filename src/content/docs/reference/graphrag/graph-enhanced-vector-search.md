---
title: Graph-Enhanced Vector Search
description: A retriever that executes vector similarity search on Chunks and continues to execute a graph traversal starting from the found nodes.
tags: ["Advanced"]
---

## Alternative Names

- Graph + Vector
- Augmented Vector Search

## Required Graph Shape

[Lexical Graph with Extracted Entities](/reference/knowledge-graph/lexical-graph-extracted-entities)

## Description

The user question is embedded using the same embedder that has been used before to create embeddings. A vector similarity search is executed on the Chunk embeddings to find k (number previously configured by developer / user) most similar Chunks. A traversal starting at the found chunks is executed to retrieve more context.

## Usage

This pattern is useful for retrieving more enriched context than the results of executing only a vector search as in e.g. [Basic Retrievers](/reference/graphrag/basic-retriever) or [Parent-Child Retrievers](/reference/graphrag/parent-child-retriever). The additional traversal retrieves the interaction of entities within the provided data which reveals much richer information than the retrieval of specific text chunks. Naturally, the preprocessing for this GraphRAG pattern is much more tedious and expensive. Furthermore, the amount of context that is returned by the Graph Traversal might be too much to handle for an LLM.

## Further reading

- [Going Meta - Ep 23: Advanced RAG patterns with Knowledge Graphs](https://www.youtube.com/watch?v=E_JO4-2D5Xs&list=PL9Hl4pk2FsvX-5QPvwChB-ni_mFF97rCE&index=6) (December 2023)

## Existing Implementations

## Example Implementations

- [Neo4j's Knowledge Graph Builder](https://github.com/neo4j-labs/llm-graph-builder)
