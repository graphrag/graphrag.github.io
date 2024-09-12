---
title: Local Retriever
description: A retriever that retrieves information on related entities (and summaries).
tags: ["Advanced"]
---

## Alternative Names

- Microsoft GraphRAG

## Required Graph Shape

[Lexical Graph with Extracted Entities and Community Summaries](/reference/knowledge-graph/lexical-graph-extracted-entities-community-summaries)

## Description

The user question is embedded using the same embedder that has been used before to create the entity embeddings. A vector similarity search is executed on the entity embeddings to find k (number previously configured by developer / user) most similar entities. A graph traversal starting from the found entities is executed.

## Usage

This pattern is useful for knowledge exploration around specific entities. The retriever will find all connected entities and hence all relationships to other entities within the complete dataset. The effort of setting up the required Graph Pattern is quite high since there are a lot of steps to be taken: entity & relationship extraction, Community detection and Community summarizations. It needs to be considered which of these tasks shall be executed by LLMs and which tasks can be handled differently to keep the pre-processing cost acceptable.

## Further reading

- [From Local to Global:A Graph RAG Approach to Query-Focused Summarization](https://arxiv.org/pdf/2404.16130) (April 2024)
- [Implementing 'From Local to Global' GraphRAG with Neo4j and LangChain: Constructing the Graph](https://neo4j.com/developer-blog/global-graphrag-neo4j-langchain/) (July 2024)
- [Integrating Microsoft GraphRAG into Neo4j](https://towardsdatascience.com/integrating-microsoft-graphrag-into-neo4j-e0d4fa00714c) (July 2024)

## Existing Implementations

## Example Implementations

- [Microsoft GraphRAG](https://github.com/microsoft/graphrag)
