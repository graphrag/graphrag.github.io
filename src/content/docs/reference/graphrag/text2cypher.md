---
title: Text2Cypher
description: A retriever that translates the natural language user question into a cypher query which is then executed.
tags: ["Intermediate"]
---

## Required Graph Shape

[Domain Graph](/reference/knowledge-graph/domain-graph)

## Description

The user question is translated to a cypher query by the LLM which is then executed against the database. The data returned by the execution is provided to the LLM.

## Usage

The two related GraphRAG patterns [Cypher Templates](/reference/graphrag/cypher-templates) and [Dynamic Cypher Generation](/reference/graphrag/dynamic-cypher-generation) are both limited by the queries / query snippets that are defined during implementation.
This pattern is highly flexible. There are no predefined queries and (in theory) the LLM can generate any query. However, this pattern is not 100% reliable. LLMs are not perfect when translating text to cypher. If the LLM is not able to translate the given user query correctly, it will not be able to provide any answer.

## Further reading

- [Integrating Neo4j into the LangChain ecosystem](https://towardsdatascience.com/integrating-neo4j-into-the-langchain-ecosystem-df0e988344d2) (Tomaz Bratanic, April 2024)
- [LangChain Cypher Search: Tips & Tricks](https://neo4j.com/developer-blog/langchain-cypher-search-tips-tricks/) (Tomaz Bratanic, June 2024)

## Existing Implementations

- [Langchain: GraphCypherQAChain](https://python.langchain.com/v0.2/docs/integrations/providers/neo4j/#graphcypherqachain)

## Example Implementations
