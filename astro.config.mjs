import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://graphrag.com',
  integrations: [starlight({
    title: 'GraphRAG',
    logo: {
      src: './src/assets/images/graphrag-logo.svg'
    },
    social: {
      github: 'https://github.com/graphrag/',
      discord: 'https://discord.gg/graphrag'
    },
    editLink: {
      baseUrl: 'https://github.com/graphrag/graphrag.github.io/edit/main/'
    },
    lastUpdated: true,
    head: [{
      tag: 'script',
      attrs: {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-DL38Q8KGQC'
      }
    }, {
      tag: 'script',
      content: "  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DL38Q8KGQC');"
    }],
    customCss: [
      // Path to your Tailwind base styles:
      './src/tailwind.css',
    ],

    sidebar: [{
      label: 'Concepts',
      items: [{
        label: 'Intro to GraphRAG',
        link: '/concepts/intro-to-graphrag/'
      }, {
        label: 'Intro to Knowledge Graphs',
        link: '/concepts/intro-to-knowledge-graphs/'
      }]
    }, {
      label: 'Tutorials',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Chat with a PDF',
        link: '/tutorials/chat-with-pdf/'
      }]
    }, {
      label: 'How-to Guides',
      items: [{
        label: 'Chunking',
        link: '/guides/chunking/'
      }]
    }, {
      label: 'Reference',
      items: [{
        label: 'Retrieval Patterns',
        autogenerate: {
          directory: 'reference/graphrag'
        }
      }, {
        label: 'Data Preparation',
        autogenerate: {
          directory: 'reference/preparation'
        }
      }, {
        label: 'Graph Shapes',
        autogenerate: {
          directory: 'reference/knowledge-graph'
        }
      }]
    }, {
      label: 'Appendices',
      items: [{
        label: 'Research',
        link: '/appendices/research'
      }, {
        label: 'Glossary',
        link: '/appendices/glossary'
      }, {
        label: 'Graph Notation',
        link: '/appendices/notation'
      }]
    }],
    components: {
      Footer: './src/components/GrFooter.astro'
    }
  }), tailwind({applyBaseStyles: false})]
});
