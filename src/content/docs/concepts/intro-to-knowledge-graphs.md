---
title: Intro to Knowledge Graphs
description: Self-descriptive, interconnected data structure for knowledge representation
---

![GraphRAG Overview](../../../assets/images/graphrag-diagram.svg)

## Intro to Knowledge Graphs

A [knowledge graph model](https://neo4j.com/blog/what-is-knowledge-graph/) is especially suitable for representing both structured and unstructured data with connected elements. 
Unlike traditional databases, they do not require a rigid schema but are more flexible in the data model. 
The graph model allows efficient storage, management, querying, and processing of the richness of real-world information. 
In a RAG system, the knowledge graph serves as the flexible memory companion to the language skills of LLMs, such as summarization, translation, and extraction.

In a knowledge graph, facts and entities are represented as *nodes* with attributes connected with typed *relationships*, which also carry attributes for qualification. 
This graph model can scale from a simple family tree to the complete digital twin of a company encompassing employees, customers, processes, products, partnerships, and resources, with millions or billions of connections.

Graph structures can originate from various sources, from a structured business domain, (hierarchical) document representations, and signals computed by graph algorithms.


When we dive into retrieval patterns, we notice how the most advanced techniques rely on the connections within the data. 
Whether it’s metadata filtering, like searching for articles by a specific author or on a particular topic, or parent-child retrievers, which navigate back to the parent of a text chunk to provide breadth to the LLM for context-enriched answers, these methods leverage the relationships between the data to be retrieved.

Typically, these implementations rely heavily on client-side data structures and extensive Python code connecting the different pieces of information. 
However, in a graph database, establishing real relationships and querying them with simple patterns is much more efficient.

In the graph pattern of almost every pattern, you will see the following types of entities

* entity or domain nodes that represent your application domain
* domain relationships
* document nodes that represent the unstructured documents ingested into the graph
* chunk nodes that 

![Chunk Node](../../../assets/images/element-chunk-node.svg)

They are the basis for most of the GraphRAG patterns and have at least the following two properties: text and embedding, where text contains the human-readable text string of the chunk, and embedding contains the calculated embedding of the text.

<!-- todo entity nodes -->

## Further reading

- How-to: [chunking](/guides/chunking/)
