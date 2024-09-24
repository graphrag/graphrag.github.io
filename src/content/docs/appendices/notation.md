---
title: Graph Pattern Notation
description: Compact notation for describing knowledge graph structures
---


![Graph pattern railroad diagram](../../../assets/images/railroad/pattern.svg)
*Graph pattern railroad diagram, a comma-separated list of PatternElement*

## About Notation

The GraphRAG pattern catalog uses a graph notation to describe logical graph structures
called patterns that are composed of nodes, relationships and subjects.

![PatternElement is a Node, Relationship or Subject](../../../assets/images/railroad/pattern-element.svg)
*PatternElement is a Node, Relationship or Subject*

### Nodes

![Node is delimted by parentheses](../../../assets/images/railroad/node.svg)
*Node is delimted by parentheses*

Nodes are individual records in a graph.

`(a)` 

  - a single node identified as `a`

`(a:Thing)` 

  - a single node labeled as a `Thing`

`(a:Thing:Special)` 

  - single node with two labels

`(a:Thing {k:"v"})` 
  - labeled node with a record defining property `k` to be `"v"`

`(a:Thing {k::string})` 
  - record declaring `k` to be a `string`, but with an undefined value

`(a:Thing {x@"meta"})` 
  - record with metadata about property `x`
  - metadata is extra information

### Relationships

![Relationship starts with a node, then an arrow followed by a Path](../../../assets/images/railroad/relationship.svg)
*Relationship starts with a Node, then an Arrow followed by a Path*
![Arrow looks like an arrow](../../../assets/images/railroad/arrow.svg)
*Arrow looks like an arrow*
![Path is either a node or a Relationship (which starts with a Node)](../../../assets/images/railroad/path.svg)
*Path is either a node or a Relationship (which starts with a Node)*

Relationships pair two nodes, a 'from' and a 'to' node. 

`(a)-[:KNOWS]->(b)` 
  - a relationship from `a` to `b` labeled as `:KNOWS`

`(a)-[:KNOWS {confidence:0.8}]` 
  - a relationship with a record

### Subjects

![Subject is surrounded by square brackets](../../../assets/images/railroad/subject.svg)
*Subject is delimted by square brackets*

Subjects compose multiple graph elements.

`[a]` 
  - subject about itself
  - equivalent: `(a)`

`[a | i]`
  - subject about another element, an "annotation"
  - equivalent: `(a)-->(i)`

`[a | i,j,k]` 
  - a subject about 3 other elements, like set-builder notation
  - equivalent: `(a)-->(i), (a)-->(j), (a)-->(k)`

`[a |:R| i,j,k]` 
  - a subject about 3 other elements, like set-builder notation
  - equivalent: `(a)-[:R]->(i), (a)-[:R]->(j), (a)-[:R]->(k)`

`[a:R -> i,j]` 
  - a subject composing 2 elements into a sequence, a relationship
  - equivalent: `(i)-[:a:R]->(j)`

`[a:R {k:"v"} -> i,j,k]` 
  - a subject composing 3 elements into a sequence, a described path
  - equivalent: `(i)-[a:R {k:"v"}]->(j)-[a:R {k:"v"}]->(k)`

`[:R {seq:1...} --> i,j,i,k]` 
  - a described path with an applied range value
  - equivalent: `(i)-[:R {seq:1}]->(j)-[:R {seq:2}]->(i)-[:R {seq:3}]->(k)`
  
`[a:R {k:"v"} |-> i,j,k]` 
  - a subject about 3 elements, which are in a sequence
  - equivalent: `(:a:R {k:"v"}), (a)-->(i), (a)-->(j), (a)-->(k), (i)-[a:R]->(j)-[a:R]->(k)`

## Further reading

- See [gram-data/nearley-gram](https://github.com/gram-data/nearley-gram/) for full EBNF
- See [gram-data/tree-sitter-gram](https://github.com/gram-data/tree-sitter-gram/) for a parser
