import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://graphrag.github.io',
	integrations: [
		starlight({
			title: 'GraphRAG',
			logo: {
				src: './src/assets/images/graphrag-logo.svg'
			},
			social: {
				github: 'https://github.com/graphrag/',
				discord: 'https://discord.gg/graphrag'
			},
			editLink: {
        baseUrl: 'https://github.com/graphrag/graphrag.github.io/edit/main/',
      },
			sidebar: [
				{
					label: 'Concepts',
					items: [
						{ label: 'Intro to GraphRAG', link: '/explanation/intro-to-graphrag/' },
					],
				},
				{
					label: 'Tutorials',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Chat with a PDF', link: '/tutorials/chat-with-pdf/' },
					],
				},
				{
					label: 'How-to Guides',
					items: [
						{ label: 'Chunking', link: '/guides/chunking/' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ 
							label: 'Retrieval Patterns', 
							autogenerate: { directory: 'reference/graphrag' },
						},
						{ 
							label: 'Data Preparation', 
							autogenerate: { directory: 'reference/preparation' },
						},
						{ 
							label: 'Graph Shapes', 
							autogenerate: { directory: 'reference/knowledge-graph' },
						}
					]
				},
			],
		}),
	],
});
