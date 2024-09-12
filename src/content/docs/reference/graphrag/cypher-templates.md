---
title: Cypher Templates
description: A retriever that executes a predefined Cypher query using parameters given in the user question.
tags: ["Intermediate"]
---

## Required Graph Shape

[Domain Graph](/reference/knowledge-graph/domain-graph)

## Description

For the retrieval of structured data, we need to translate a user question into a query that can be executed on a database. A basic approach is to have predefined queries ready that a user question can be mapped to.

Given a user question an LLM decides which of the cypher templates to use. The LLM possibly extracts parameters from the user question and plugs them into the template. The query is executed on the database and the results are provided back to the LLM to generate an answer.

## Usage

When the type of questions that a user will pose to the Domain Graph is previously known, these templates can be created. A shortcoming of this approach is the restriction to given template queries. What happens if the user asks a question that would result in a query that isn’t existent in the templates?

## Further reading

- [Enhancing Interaction between Language Models and Graph Databases via a Semantic Layer](https://towardsdatascience.com/enhancing-interaction-between-language-models-and-graph-databases-via-a-semantic-layer-0a78ad3eba49) (January 2024)

## Existing Implementations

## Example Implementations
