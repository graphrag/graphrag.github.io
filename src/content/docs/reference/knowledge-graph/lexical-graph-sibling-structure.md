---
title: Lexical Graph with Sibling Structure
description: A Lexical Graph that additionally contains a relationships between adjacent Chunks
---

## Context

It is useful to keep track of adjacent chunks for a possible retrieval of them.
This pattern is an evolution of the [Lexical Graph](/reference/knowledge-graph/lexical-graph/)

## Graph Pattern

![Graph](../../../../assets/images/knowledge-graph-lexical-graph-sibling-structure.svg)

## Elements

### Nodes

![Document Node](../../../../assets/images/element-document-node.svg)
Document nodes contain the document name and its source. They may contain additional metadata.
![Chunk Node](../../../../assets/images/element-chunk-node.svg)
Chunk nodes contain the human readable text of a chunk and its vector embedding. They may contain additional metadata.

### Relationships

![PART_OF Relationship](../../../../assets/images/element-part-of-relationship.svg)
The PART_OF relationships do not require additional properties. However, they may contain additional metadata.

![FIRST_CHUNK Relationship](../../../../assets/images/element-first-chunk-relationship.svg)
The FIRST_CHUNK relationships do not require additional properties. However, they may contain additional metadata.

![NEXT_CHUNK Relationship](../../../../assets/images/element-next-chunk-relationship.svg)
The NEXT_CHUNK relationships do not require additional properties. However, they may contain additional metadata.

## Description

When chunking documents, record the adjacency relationships between the chunks.

## GraphRAG Pattern
