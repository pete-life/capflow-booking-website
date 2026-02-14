import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const help = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/help' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    category: z.string(),
  }),
});

export const collections = { help };
