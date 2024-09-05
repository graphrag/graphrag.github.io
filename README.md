# GraphRAG Documentation

GraphRAG is a collection of RAG access patterns which target different
layers of a knowledge graph.




## Contributing

![Documentation Architecture](https://raw.githubusercontent.com/graphrag/graphrag.github.io/main/src/assets/images/documentation-architecture.svg)

The documentation is structured in accordance with [Diátaxis principles](https://diataxis.fr/).

- "Concepts" [explain high-level ideas](https://diataxis.fr/explanation/) 
- "Guides" are [how-to guides](https://diataxis.fr/how-to-guides/) that provide problem solving directions
- "Reference" are [technical descriptions](https://diataxis.fr/reference/) of what things are
- "Tutorials" are [complete examples](https://diataxis.fr/tutorials/) that bring everything together
- "Glossary" defines relevant terminology

Consider this priority order of contribution:

1. Glossary - everything gets a glossary entry 
  - terse definitions of terminology and names
  - reference citations and attribution where appropriate
  - for example, define "vector embedding"
  - add the entry to `/src/content/docs/appendices/glossary.mdx`
2. Reference - some glossary entries are expanded on with reference material 
  - describe *what* something is
  - provide an illustration
  - reference related reference material :) 
  - for example, describe what a vector embedding is
  - add a page under `/src/content/docs/reference`
  - use the template `/src/content/docs/reference/template.md`
3. Guide - some reference material gets a how-to guide
  - process-oriented, *how* to achieve a specific goal
  - try to be implementation independent
  - reference relevant reference material
  - for example, how to perform vector similarity search
  - add a page under `/src/content/docs/guides`
  - use the template `/src/content/docs/guides/template.md`
4. Tutorial - some how-to guides can be combined into tutorials
  - walk through a complete example, including data
  - still try to be implementation independent
  - for example, chat with a PDF
  - add a page under `/src/content/docs/tutorials`
  - use the template `/src/content/docs/tutorials/template.md`


### Media assets

All diagrams are created using [Excalidraw](https://excalidraw.com). Original source files
are saved under `/media` and exported SVG images in `/src/assets/images`.

---

## Sponsors

![Neo4j](https://avatars.githubusercontent.com/u/201120?s=200&v=4) 

Thanks to [Neo4j](https://neo4j.com) for sponsoring this work.
