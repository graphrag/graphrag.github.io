import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

const researchCollection = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		canonicalURL: z.string().url()
	})
})

export const collections = {
	docs: defineCollection({ schema: docsSchema() }),
	research: researchCollection
};
