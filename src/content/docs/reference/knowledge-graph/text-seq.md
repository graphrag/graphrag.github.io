---
title: Text Sequence
description: Unstructured documents split into a linked list of text
graph: Lexical
---

A text sequence is a lexical graph pattern derived from an unstructured source document
that has been split into multiple texts.

## Graph Pattern

![Text Sequence](../../../../assets/images/text-seq.svg)

## Elements

### Nodes

![Text Node](../../../../assets/images/text-node.svg)

```
(:Text { text::string, textEmbedding::float[], source::string? } )
```

Text nodes contain original source text along with an embedding. They may also have additional
metadata like a source reference.

### Relationships

![Next Relationship](../../../../assets/images/next-relationship.svg)

```
()=[:NEXT]=>()
```

Reference pages are ideal for outlining how things work in terse and clear terms.
Less concerned with telling a story or addressing a specific use case, they should give a comprehensive outline of what you're documenting.


## See also

- [Lexical Graph](/reference/knowledge-graph/lexical-graph)
