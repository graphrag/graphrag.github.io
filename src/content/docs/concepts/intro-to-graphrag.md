---
title: Intro to GraphRAG
description: RAG with a knowledge graph
---

## About GraphRAG

GraphRAG is Retrieval Augmented Generation (RAG) using a Knowledge Graph. 

Have you ever stumbled upon the term GraphRAG while diving into the world of Retrieval Augmented Generation (RAG) systems? If so, you’re not alone. This term is making waves, but its meaning can be elusive. Sometimes, it’s a specific retrieval method; other times, it’s an entire software suite, like Microsoft’s GraphRAG “data pipeline and transformation suite.” With such varied uses, it’s no wonder even the most dedicated followers of RAG discussions can feel a bit lost.

So, what exactly is GraphRAG? 

> For us, it’s a set of RAG patterns that leverage a graph structure for retrieval. Each pattern demands a unique data structure, or graph pattern, to function effectively. 

![GraphRAG Overview](../../../assets/images/graphrag-diagram.svg)


On this site, we’ll dive into the GraphRAG pattern details, breaking down each pattern’s attributes and strategies.

If you’re looking for an introduction to RAG, check out [What Is Retrieval-Augmented Generation (RAG)?](https://neo4j.com/blog/what-is-retrieval-augmented-generation-rag/).

Each of our presented patterns is also linked directly to its [GraphRAG Pattern Catalog](/reference/) entry. 
This catalog is an open source initiative to stay up to date on the latest pattern evolution. 

NOTE: We just started collecting patterns and are definitely still missing a lot of them. Please help us build a comprehensive catalog for GraphRAG patterns and join the discussion on the [GraphRAG Discord](https://discord.com/invite/graphrag) channel.

To give you a clearer picture, the patterns explained in this post include:

### Basic GraphRAG Patterns

* [Basic Retriever](/reference/graphrag/basic-retriever/)
* [Pattern Matching](/reference/graphrag/pattern-matching/)
* [Cypher Templates](/reference/graphrag/cypher-templates/)
* [Graph-Enhanced Vector Search](/reference/graphrag/graph-enhanced-vector-search/)
* [Metadata Filtering](/reference/graphrag/metadata-filtering/)
* [Parent-Child Retriever](/reference/graphrag/parent-child-retriever/)

### Advanced GraphRAG patterns

* [Dynamic Cypher Generation](/reference/graphrag/dynamic-cypher-generation/)
* [Global Community Summary Retriever](/reference/graphrag/global-community-summary-retriever/)
* [Local Retriever](/reference/graphrag/local-retriever/)
* [Hypothetical Question Retriever]>(/reference/graphrag/hypothetical-question-retriever/)


### Knowledge Graph Models

* [Domain Graph](/reference/knowledge-graph/domain-graph/)
* [Lexical Graph](/reference/knowledge-graph/lexical-graph/)
* [Parent-Child Lexical Graph](/reference/knowledge-graph/lexical-graph-parent-child/)
* [Lexical Graph with Sibling Structure](/reference/knowledge-graph/lexical-graph-sibling-structure/)
* [Lexical Graph with Extracted Entities](/reference/knowledge-graph/lexical-graph-extracted-entities/)
* [Lexical Graph with Extracted Entities and Community Summaries](/reference/knowledge-graph/lexical-graph-extracted-entities-community-summaries/)
* [Lexical Graph with Hierarchical Structure](/reference/knowledge-graph/lexical-graph-hierarchical-structure/)
* [Lexical Graph with Hypothetical Questions](/reference/knowledge-graph/lexical-graph-hypothetical-questions/)
* [Memory Graph](/reference/knowledge-graph/memory-graph/)
* [Text Sequence](/reference/knowledge-graph/text-seq/)

### Thematic Classification

According to Gao et al., there are three RAG paradigms: naive RAG, advanced RAG, and modular RAG:

![](https://cdn-images-1.medium.com/max/1024/0*okG4Sok4aweO7SIQ)


In an advanced RAG paradigm, pre-retrieval and post-retrieval phases are added to the naive RAG paradigm. 
A modular RAG system contains more complex patterns, which require orchestration and routing of the user query.

### The phases of an advanced RAG system:

* Pre-retrieval — Query rewriting, query entity extraction, query expansion, etc.
* Retrieval of relevant context
* Post-retrieval: Reranking, pruning, etc.
* Answer generation

Here, we want to focus on the *retrieval phase* and compile a catalog of the most-often referenced GraphRAG retrieval patterns and their required graph patterns. 
Please note that the patterns here are not an exhaustive list.

### How to GraphRAG

If you’re looking to implement the retrievers discussed here using the [neo4j-graphrag package](https://neo4j.com/blog/graphrag-python-package/), [LangChain](https://neo4j.com/labs/genai-ecosystem/langchain/), [LlamaIndex](https://neo4j.com/labs/genai-ecosystem/llamaindex/), check their GraphRAG retriever integrations.
<!-- Neo4j Vector 
We won’t cover setting up your Python project for Neo4j-based retrievers here, as that’s well-documented elsewhere (e.g. the GraphAcademy Courses mentioned below).
-->

Here we focus on the intriguing part: using the `retrieval_query` to implement the GraphRAG patterns we discuss. The details of each pattern will include the corresponding query.

Remember, when crafting your query, there’s an invisible “first part” that performs the search operation to find your entry points into the graph (which can be vector, fulltext, spatial, hybrid or filters). 
The search part returns the found nodes and their similarity scores, which you can then use in your retrieval query to execute further traversals. 
<!-- In the retrieval query can also use additional custom parameters and the `$embedding` parameter for the question embedding. 
-->

Here is an example of how this might look (example from LangChain Neo4j Vector documentation):

```python
retrieval_query = """
RETURN "Name: " + node.name AS text, score, {source:node.url} AS metadata
"""
retrieval_example = Neo4jVector.from_existing_index(
    OpenAIEmbeddings(),
    url=url,
    username=username,
    password=password,
    index_name="person_index",
    retrieval_query=retrieval_query,
)
retrieval_example.similarity_search("Jon Snow", k=1)
```

In the above example, a vector similarity search is executed on the existing index `person_index` using the user input `"Jon Snow"` and returning the `name`, the `score`, and some `metadata` are returned for the one node with the best fit `(k=1)`.

<!-- todo continue -->

## Further Reading

* [Neo4j GraphAcademy: Build a Neo4j-backed Chatbot using Python](https://graphacademy.neo4j.com/courses/llm-chatbot-python/) 
* [Integrating Neo4j into the LangChain ecosystem](https://towardsdatascience.com/integrating-neo4j-into-the-langchain-ecosystem-df0e988344d2)
* [Neo4j GraphAcademy: Mastering Retrieval-Augmented Generation (RAG)](https://graphacademy.neo4j.com/courses/genai-workshop-graphrag/)
