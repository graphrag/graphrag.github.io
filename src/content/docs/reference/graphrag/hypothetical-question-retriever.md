---
title: Hypothetical Question Retriever
description: A retriever that executes vector similarity search on hypothetical Questions and retrieves the corresponding Chunks.
tags: ["Basic"]
---

## Required Graph Shape

[Lexical Graph with Hypothetical Questions](/reference/knowledge-graph/lexical-graph-hypothetical-questions)
![Lexical Graph with Hypothetical Questions](../../../../assets/images/knowledge-graph-lexical-graph-hypothetical-questions.svg)

## Context: 

The vector similarity between a question’s embedding and the text embedding of an appropriate answer or text source might be quite low. 
If we have question-chunk pairs available, we can execute a vector similarity search on the question embeddings, which will probably deliver much better results than a vector similarity search on the original text chunk.

## Description

The user question is embedded using the same embedder that has been used before to create the question embeddings. 
A vector similarity search is executed on the previously generated questions. `k` (number previously configured by developer / user) most similar questions are found and their related Chunks are retrieved.

## Usage

This pattern can yield better results in the vector similarity search than a question-to-chunk similarity search as used in e.g. [Basic Retrievers](/reference/graphrag/basic-retriever) or [Parent-Child Retrievers](/reference/graphrag/parent-child-retriever). 
However, it also requires more pre-processing effort and cost in LLM calls for the question generation.

## Required pre-processing

Use an LLM to generate hypothetical questions answered within the chunks. 
Embed the question using an embedding model. 
Record the relationship between questions and the chunk that contains their answer.

## Retrieval Query

```cypher
MATCH (node)<-[:HAS_QUESTION]-(chunk)
WITH chunk, max(score) AS score // deduplicate chunks
RETURN chunk.text AS text, score, {} AS metadata
```

## Resources

- [Implementing advanced RAG strategies with Neo4j](https://blog.langchain.dev/implementing-advanced-retrieval-rag-strategies-with-neo4j/) (November 2023)

## Existing Implementations

- [MultiVector Retriever: Hypothetical Queries](https://python.langchain.com/v0.1/docs/modules/data_connection/retrievers/multi_vector/#hypothetical-queries)

## Example Implementations

- [Langchain Templates: Neo4j Advanced RAG](https://github.com/langchain-ai/langchain/blob/master/templates/neo4j-advanced-rag/neo4j_advanced_rag/retrievers.py)


## Notes

The *Hypothetical Question Retriever* is in a way quite similar to the Hypothetical Document Embeddings (HyDE) Retriever (see [RAG using LangChain: Part 5 — Hypothetical Document Embeddings](https://jayant017.medium.com/rag-using-langchain-part-5-hypothetical-document-embeddings-hyde-050f57dfc252)). 
The main idea behind them is to increase the similarity between the user question and the available text by moving them into a similar region of the vector space. 
In the Hypothetical Question Retriever, we generate hypothetical questions that the user question is matched against
Whereas in the HyDE retriever, the LLM generates a hypothetical answer to the user question (without using the grounding database) and, subsequently, the hypothetical answer is matched against the actual chunks in the database to find the best fit. 
We aren’t looking at the HyDE retriever in more detail since it lives in the pre-processing RAG phase, rather than in the retrieval phase, and also does not require a specific kind of underlying graph pattern.