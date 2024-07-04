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
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Intro to GraphRAG', link: '/guides/intro/' },
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
							label: 'Graph Patterns', 
							autogenerate: { directory: 'reference/knowledge-graph' },
						}
					]
				},
			],
		}),
	],
});
