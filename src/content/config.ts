import { z, defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';
import { docsLoader } from '@astrojs/starlight/loaders';

const researchCollection = defineCollection({
	type: 'data',
	schema: z.object({
		title: z.string(),
		canonicalURL: z.string().url()
	})
})

export const collections = {
	docs: defineCollection({ loader: docsLoader(),schema: docsSchema() }),
	research: researchCollection
};
