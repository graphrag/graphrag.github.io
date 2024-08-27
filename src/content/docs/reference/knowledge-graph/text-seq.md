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

`Text` nodes contain original source text along with an embedding. They may also have additional
metadata like a source reference.

### Relationships

![Next Relationship](../../../../assets/images/next-relationship.svg)

```
(1)=[:NEXT]=>(1)
```

`NEXT` relationships form a linked list.


## See also

- [Lexical Graph](/reference/knowledge-graph/lexical-graph)
