---
title: Dynamic Cypher Generation
description: A retriever that collects necessary pieces of a predefined Cypher query using parameters given in the user question and executes it.
tags: ["Intermediate"]
---

## Required Graph Shape

![Domain Graph](../../../../assets/images/domain-graph.svg)
[Domain Graph](/reference/knowledge-graph/domain-graph)

## Context

Many user questions for structured data will contain several filters, but not always the exact same ones. 
Let’s use the example of the Movie Graph to illustrate. 

There might be several related questions being asked:

- Which movies has Steven Spielberg directed?
- Which movies did Steven Spielberg direct between 2000 and 2010?
- Which movies did Steven Spielberg direct between 2000 and 2010 that [example]?

This list can infinitely continue. 
You would not want to create a Cypher Template for every one of these questions. 
The solution is to (partially) dynamically generate Cypher queries based on the parameters actually given in the user question.

## Description

Given a user question an LLM decides which of the Cypher templates to use. 
The LLM possibly extracts parameters from the user question and plugs them into the template. 
The query is executed on the database and the results are provided back to the LLM to generate an answer.
Multiple templates can also be used in a chain or loop, which then leads to an agentic query system.

## Usage

This pattern is an evolution of [Cypher Templates](/reference/graphrag/cypher-templates). 
It is much more flexible allowing for more diverse user questions to be answered. 
Still, the range of questions is limited by the provided snippets.

## Required pre-processing

Snippets of parameterized Cypher queries and a description of what they do are made available to the LLM.

## Graph Query

```cypher
// Which movies has ($director) directed?
MATCH (d:Director)-[:DIRECTED]->(m:Movie)
WHERE d.name = $director
RETURN m.title, m.year
```

```cypher
// Which movies were released between $startYear and $endYear
MATCH (m:Movie)
WHERE $startYear <= m.year <= $endYear
RETURN m.title, m.year
```

## Further reading

- [Build a Knowledge Graph-based Agent With Llama 3.1, NVIDIA NIM, and LangChain](https://medium.com/neo4j/build-a-knowledge-graph-based-agent-with-llama-3-1-nvidia-nim-and-langchain-feb65788e637) (Tomaz Bratanic, August 2024)
* [GraphRAG in Action: From Commercial Contracts to a Dynamic Q&A Agent](https://towardsdatascience.com/graphrag-in-action-from-commercial-contracts-to-a-dynamic-q-a-agent-7d4a6caa6eb5) (Ed Sandoval, Oct 2024)

## Existing Implementations

## Example Implementations
