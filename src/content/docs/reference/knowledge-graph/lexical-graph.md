---
title: Lexical Graph
description: Structured, navigable Graph containing Chunks
---

## Context

It is useful to chunk large documents into smaller pieces for creating embeddings. An embedding is a text’s semantic representation capturing the meaning of what the text is about. If the given text is long and contains too many diverse subjects, the informative value of its embedding deteriorates.

## Graph Pattern

![Graph](../../../../assets/images/knowledge-graph-lexical-graph.svg)

## Elements

### Nodes

![Document Node](../../../../assets/images/element-document-node.svg)
Document nodes contain the document name and its source. They may contain additional metadata.
![Chunk Node](../../../../assets/images/element-chunk-node.svg)
Chunk nodes contain the human readable text of a chunk and its vector embedding. They may contain additional metadata.

### Relationships

![PART_OF Relationship](../../../../assets/images/element-part-of-relationship.svg)
The PART_OF relationships do not require additional properties. However, they may contain additional metadata.

## Description

Split documents into chunks and use an embedding model to embed the text content of the chunks. Record the Document that the chunks are part of.

## GraphRAG Pattern

A Lexical Graph is used in [Basic Retrievers](/reference/graphrag/basic-retriever).
