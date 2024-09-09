---
title: Metadata Filtering
description: A retriever that extracts entities from a user question that are used to narrow down the vector similarity search space.
tags: ["Basic"]
---

## Alternative Names

- Self Query Retriever

## Required Graph Shape

No specific Graph Shape required. Requires a graph that contains properties or relationships that can be filtered on.

## Description

Metadata information that is present in the underlying database is retrieved from the user question. The user question is embedded using the same embedder that has been used before. A vector similarity search is executed only on the embeddings of nodes that meet the filtering requirements.

## Usage

It is always useful to have structured data that can help filtering the dataset. If applied correctly, metadata filtering will lead to less hallucinations within the answers. However, if we only have unstructured data without metadata, the metadata extraction first needs to be executed, e.g. by an LLM. This can lead to inconsistencies and relevant documents being excluded from the search.

## Further reading

- [Implementing advanced RAG strategies with Neo4j](https://blog.langchain.dev/implementing-advanced-retrieval-rag-strategies-with-neo4j/) (November 2023)
- [Graph-based Metadata Filtering to Improve Vector Search in RAG Applications](https://neo4j.com/developer-blog/graph-metadata-filtering-vector-search-rag/) (Tomaz Bratanic, April 2024)

## Existing Implementations

- [Langchain: Neo4jVector: Metadata Filtering](https://python.langchain.com/v0.2/docs/integrations/vectorstores/neo4jvector/#metadata-filtering)
- [Langchain Retrievers: Self-querying](https://python.langchain.com/v0.1/docs/modules/data_connection/retrievers/self_query/)
