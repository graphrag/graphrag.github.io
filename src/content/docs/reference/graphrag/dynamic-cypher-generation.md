---
title: Dynamic Cypher Generation
description: A retriever that collects necessary pieces of a predefined Cypher query using parameters given in the user question and executes it.
tags: ["Intermediate"]
---

## Required Graph Shape

[Domain Graph](/reference/knowledge-graph/domain-graph)

## Description

A lot of user questions for structured data will contain several filters but not always the exact same ones. Let’s use the example of the Movie Graph to illustrate it. There might be several related questions being asked:

- Which movies has Steven Spielberg directed?
- Which movies has Steven Spielberg directed between 2000 and 2010?
- Which movies has Steven Spielberg directed between 2000 and 2010 which …?

This list can infinitely continue. You would not want to create a Cypher Template for every one of these questions. The solution is to dynamically generate cypher queries based on the parameters actually given in the user question.

Given a user question an LLM decides which of the cypher templates to use. The LLM possibly extracts parameters from the user question and plugs them into the template. The query is executed on the database and the results are provided back to the LLM to generate an answer.

## Usage

This pattern is an evolution of [Cypher Templates](/reference/graphrag/cypher-templates). It is much more flexible allowing for more diverse user questions to be answered. Still, the range of questions is limited by the provided snippets.

## Further reading

- [Build a Knowledge Graph-based Agent With Llama 3.1, NVIDIA NIM, and LangChain](https://medium.com/neo4j/build-a-knowledge-graph-based-agent-with-llama-3-1-nvidia-nim-and-langchain-feb65788e637) (Tomaz Bratanic, August 2024)

## Existing Implementations

## Example Implementations
