import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://graphrag.com',
  integrations: [starlight({
    title: 'GraphRAG',
    favicon: '/favicon.ico',
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
    head: [
      {
        tag: 'script',
        attrs: {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-DL38Q8KGQC'
        }
      },
      {
        tag: 'link',
        attrs: { 
          rel:"apple-touch-icon",
          sizes:"180x180",
          href:"/apple-touch-icon.png"
        }
      },
      {
        tag: 'link',
        attrs: {
          rel:"icon",
          type:"image/png",
          sizes:"32x32",
          href:"/favicon-32x32.png"
        }
      },
      {
        tag: 'link',
        attrs: {
          rel:"icon",
          type:"image/png",
          sizes:"16x16",
          href:"/favicon-16x16.png"
        },
      },
      {
        tag: 'link',
        attrs: {
          rel:"manifest",
          href:"/site.webmanifest"
        }
      }, 
      {
        tag: 'script',
        content: "  window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DL38Q8KGQC');"
      }
    ],
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
      label: 'How-to Guides',
      items: [{
        label: 'Chunking',
        link: '/guides/chunking/'
      }]
    }, {
      label: 'Reference',
      items: [{
        label: 'Retrieval',
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
      }
    ]
    }],
    components: {
      Footer: './src/components/GrFooter.astro'
    }
  }), tailwind({applyBaseStyles: false})]
});
