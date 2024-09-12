---
title: Lexical Graph with Hierarchical Structure
description: A Lexical Graph that additionally contains a Hierarchical Structure
---

## Context

If the given documents have pre-defined structures, it is useful to persist them into the chunk structure.
This pattern is an evolution of the [Lexical Graph](/reference/knowledge-graph/lexical-graph)

## Graph Pattern

![Graph](../../../../assets/images/knowledge-graph-lexical-graph-hierarchical-structure.svg)

## Elements

### Nodes

![Document Node](../../../../assets/images/element-document-node.svg)
Document nodes contain the document name and its source. They may contain additional metadata.
![Chunk Node](../../../../assets/images/element-chunk-node.svg)
Chunk nodes contain the human readable text of a chunk and its vector embedding. They may contain additional metadata.
![Chapter Node](../../../../assets/images/element-chapter-node.svg)
![Section Node](../../../../assets/images/element-section-node.svg)
![Subsection Node](../../../../assets/images/element-subsection-node.svg)
Chapter, Section and Subsection nodes contain the name of the Chapter, Section and Subsection, respectively. They may contain additional metadata. These nodes are exemplary for possible hierarchies that can be present in documents.

### Relationships

![PART_OF Relationship](../../../../assets/images/element-part-of-relationship.svg)
The PART_OF relationships do not require additional properties. However, they may contain additional metadata.

![HAS_CHAPTER Relationship](../../../../assets/images/element-has-chapter-relationship.svg)
![HAS_SECTION Relationship](../../../../assets/images/element-has-section-relationship.svg)
![HAS_SUBSECTION Relationship](../../../../assets/images/element-has-subsection-relationship.svg)
The HAS_CHAPTER, HAS_SECTION and HAS_SUBSECTION relationships do not require additional properties. However, they may contain additional metadata. These relationships are exemplary for possible hierarchies that can be present in documents.

## Description

When chunking documents, record the hierarchies of the documents.

## GraphRAG Pattern
