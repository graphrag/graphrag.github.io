# GraphRAG Documentation

GraphRAG is a collection of RAG access patterns which target different
layers of a knowledge graph.


## Contributing

The documentation is structured in accordance with [Diátaxis principles](https://diataxis.fr/).

- "Concepts" [explain high-level ideas](https://diataxis.fr/explanation/) 
- "Guides" are [how-to guides](https://diataxis.fr/how-to-guides/) that provide problem solving directions
- "Reference" are [technical descriptions](https://diataxis.fr/reference/) of what things are
- "Tutorials" are [complete examples](https://diataxis.fr/tutorials/) that bring everything together
- "Glossary" defines relevant terminology

Consider this priority order of contribution:

1. Everything gets a glossary entry in `/src/content/docs/appendices/glossary.mdx`
  - terse definitions of terminology and names
  - reference citations and attribution where appropriate
  - for example, define "vector embedding"
2. Some glossary entries are expanded on with reference material under `/src/content/docs/reference`
  - describe *what* something is
  - provide an illustration
  - reference related reference material :) 
  - for example, show what a vector embedding is
3. Some reference material gets a how-to guide
  - process-oriented, *how* to achieve a specific goal
  - try to be implementation independent
  - reference relevant reference material
  - for example, how to perform vector similarity search
4. Some how-to guides can be combined into tutorials
  - walk through a complete example, including data
  - still try to be implementation independent
  - for example, chat with a PDF

