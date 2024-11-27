---
title: GraphRAG Patterns Catalog
description: List of GraphRAG retriever patterns and accompanying Knowledge Graph Models
---

## GraphRAG Patterns Catalog

In this GraphRAG Patterns catalog you can find an ever growing set of patterns for knowledge graph models, GraphRAG retrievers and Data Preparation tasks.

Each RAG pattern is tailored to answer specific types of questions, requiring unique graph patterns and pre-processing steps. 
Finding the perfect GraphRAG pattern for your application isn’t straightforward — it demands experimentation with different retrieval patterns and a proper evaluation of the results. 

### GraphRAG Patterns

* [Basic Retriever](/reference/graphrag/basic-retriever/)
* [Cypher Templates](/reference/graphrag/cypher-templates/)
* [Dynamic Cypher Generation](/reference/graphrag/dynamic-cypher-generation/)
* [Global Community Summary Retriever](/reference/graphrag/global-community-summary-retriever/)
* [Graph-Enhanced Vector Search](reference/graphrag/graph-enhanced-vector-search/)
* [Hypothetical Question Retriever](reference/graphrag/hypothetical-question-retriever/)
* [Local Retriever](reference/graphrag/local-retriever/)
* [Metadata Filtering](reference/graphrag/metadata-filtering/)
* [Parent-Child Retriever](reference/graphrag/parent-child-retriever/)
* [Pattern Matching](reference/graphrag/pattern-matching/)
* [Text2Cypher](reference/graphrag/text2cypher/)

### Knowledge Graph Models

* [Domain Graph](reference/knowledge-graph/domain-graph/)
* [Lexical Graph](reference/knowledge-graph/lexical-graph/)
* [Parent-Child Lexical Graph](reference/knowledge-graph/lexical-graph-parent-child/)
* [Lexical Graph with Sibling Structure](reference/knowledge-graph/lexical-graph-sibling-structure/)
* [Lexical Graph with Extracted Entities](reference/knowledge-graph/lexical-graph-extracted-entities/)
* [Lexical Graph with Extracted Entities and Community Summaries](reference/knowledge-graph/lexical-graph-extracted-entities-community-summaries/)
* [Lexical Graph with Hierarchical Structure](reference/knowledge-graph/lexical-graph-hierarchical-structure/)
* [Lexical Graph with Hypothetical Questions](reference/knowledge-graph/lexical-graph-hypothetical-questions/)
* [Memory Graph](reference/knowledge-graph/memory-graph/)
* [Text Sequence](reference/knowledge-graph/text-seq/)

### Data Preparation

* [Chunking](/guides/chunking)
* [Named Entity Recognition](/preparation/ner)

## Further reading

* [GraphRAG Patterns Field Guide](https://neo4j.com/developer-blog/graphrag-field-guide-rag-patterns/)
* [Writing Software Patterns](https://www.martinfowler.com/articles/writingPatterns.html)
* [Patterns of Software Architecture 5 - Pattern Languages](https://github.com/ppizarro/coursera/blob/master/POSA/Books/Pattern-Oriented%20Software%20Architecture/Pattern-Oriented%20Software%20Architecture%20Volume%205%20-%20%20On%20Patterns%20and%20Pattern%20Languages%20-%200471486485.pdf)


## Selecting Retrievers

It is very likely that one single pattern will not serve every purpose well, which is why an agentic approach that adapts to various queries will often be necessary. 
The patterns presented here, all target Once Retrieval strategies where the context for an answer to a user question is provided, querying the database only once. 

More complex questions might require an Iterative or a Multi-Stage Retrieval paradigm combining the use of different patterns (see [Graph Retrieval-Augmented Generation: A Survey](https://arxiv.org/pdf/2408.08921) for more details on Retrieval Paradigms).
