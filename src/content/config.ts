import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from '@astrojs/starlight/loaders';
// import { file } from "astro/loaders";

// const researchCollection = defineCollection({
// 	loader: file("src/data/papers.json"),
// 	schema: z.object({
// 		title: z.string(),
// 		canonicalURL: z.string().url()
// 	})
// })


export const collections = {
	docs: defineCollection({ 
		loader: docsLoader(),
		schema: docsSchema() 
	}),
	// research: defineCollection({
	// 	loader: file("src/data/papers.json"),
	// 	schema: z.object({
	// 		title: z.string(),
	// 		canonicalURL: z.string().url()
	// 	})
	// })
};
