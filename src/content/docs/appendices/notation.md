---
title: Graph Pattern Notation
description: Compact notation for describing knowledge graph structures
---

![Graph pattern railroad diagram](../../../assets/images/railroad/pattern.svg)
*Graph pattern railroad diagram, a comma-separated list of PatternElement*

## About Graph Pattern Notation

The GraphRAG pattern catalog uses a data notation called `gram` to describe 
logical graph structures called patterns that are composed of nodes, relationships 
and subjects.

The Gram notation is intended to be self-descriptive and explicit, able to 
represent data and structures that are often implicit in a physical graph models. 
For example, paths are present in any connected graph, however storing path-level 
information isn't normally supported. You can find paths, even store paths, but 
there is no way to "say something" about a path.

Gram starts with a notion of "subjects" as a self-describing data structure
in two parts:

1. intrinsic attributes - similar to an object, but with explicit identifier
  and descriptive labels 
2. associated elements - zero or more sequential elements that are related
  to the subject

That's enough to be explicit about any graph structure, from a single node
up to a complex component.

![PatternElement is a Node, Relationship or Subject](../../../assets/images/railroad/pattern-element.svg)
*PatternElement is a Node, Relationship or Subject*

### Nodes

![Node is delimted by parentheses](../../../assets/images/railroad/node.svg)
*Node: delimted by parentheses*

Nodes are individual records in a graph.

`(a)` 
  - a single node identified as `a`

`(c:Chunk)` 
  - a single node labeled as a `Chunk`

`(s:Summary:Synthesized)` 
  - single node with two labels

`(c:Chunk {text:"something something"})` 
  - labeled node with a record defining property `text` to be a string value

`(::Chunk {text::string})` 
  - node with record declaring `text` to be a `string` on Nodes labeled as `Chunk`

`(c:Chunk {seq@42})` 
  - record defining metadata property `seq` as an integer value
  - metadata property names are in a separate namespace
  - typically used for implementation detail rather than intrinsic qualities

### Relationships

![Relationship starts with a node, then an arrow followed by a Path](../../../assets/images/railroad/relationship.svg)
*Relationship: starts with a Node, then an Arrow followed by a Path*

![Arrow looks like an arrow](../../../assets/images/railroad/arrow.svg)
*Arrow: delimited by a head and tail, with square-bracketed content*

![Path is either a node or a Relationship (which starts with a Node)](../../../assets/images/railroad/path.svg)
*Path: either a Node or a Relationship (which starts with a Node)*

Relationships are ordered pairs of nodes. 

`(a)-[:SIMILAR]->(b)` 
  - a relationship from `a` to `b` labeled as `SIMILAR`

`(a)<-[:SIMILAR]-(c)` 
  - a relationship from `c` to `a` labeled as `SIMILAR`

`(a)-[:SIMILAR {score:0.8}]->(b)` 
  - a relationship with a record

`(a)=[::SIMILAR {score::0.0..1.0}]=>(b)`
  - a relationship declaration, stating that the `score` value of `SIMILAR` relationships should be a decimal in the range of 0.0 and 0.1

### Subjects

![Subject is surrounded by square brackets](../../../assets/images/railroad/subject.svg)
*Subject is delimted by square brackets*

Subjects associate multiple elements. They're a general purpose described pattern.

#### Subjects with no association

Subjects with no association are equivalent to Nodes and can have similar attributes.

`[a]` 
  - Subject `a` about no other elements

`[c:Chunk]` 
  - Subject labeled as a `Chunk`

`[s:Summary:Synthesized]` 
  - Subject with two labels

`[c:Chunk {text:"something something"}]` 
  - labeled Subject with a record defining property `text` with a string value

#### Subject with Set Membership

Subjects can be associated with a set of members by using a separator 
called an "associator" followed by a Pattern which
may use identifier references or inline element definitions.

The basic association is set membership, introduced with a `|` associator.

`|` pipe associator indicates set membership
  - the subject is "about" the associated members
  - no implied, direct relationship among members 

`[a | i]`
  - subject `a` about another element `i`
  - known as an "annotation"
  - example: ```[:Validation {approved:true} | (c:Chunk)]```

`[a | i,j,k]` 
  - subject about 3 other elements

`[a |:R| i,j,k]` 
  - subject with labeled association of members
  - provides explicit 
  - example: ```[d:Document |:SPLIT_INTO| c1, c2, c3]```


#### Subject with Sequence Composition

Composition takes pairs of elements, applying to each pair
within the association. 

`->` arrows for composition
  - Subject connects each of the member pairs
  - requires at least 2 members

`[a:R -> i,j]` 
  - Subject composing 2 elements into a pair
  - equivalent to a Relationship when `i` and `j` are both Nodes
  - equivalent to a Path when `i` and `j` are composable Relationships 
    (a Relationship where the right-side of `i` is the left side of `j`)
  - example: ```[:Similar {score:0.87} -> (a:Entity), (b:Entity)]```

`[:R -> i,j,k]` 
  - Subject composing 3 elements into a sequence
  - equivalent to a sequence of Relationships, when members are all Nodes
  - example: ```[:NEXT -> (c1:Chunk), (c2:Chunk), (c3:Chunk)]```

`[a:R {k:"v"} -> i,j,i,k]` 
  - Subject composing 3 elements (one of which is repeated) into a sequence
  - example: ```[:NEXT {cyclic:false} -> (c1:Chunk), (c2:Chunk), c1, (c3:Chunk)]```


## Further reading

- See [gram-data/nearley-gram](https://github.com/gram-data/nearley-gram/) for EBNF
- See [gram-data/tree-sitter-gram](https://github.com/gram-data/tree-sitter-gram/) for a parser
