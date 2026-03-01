import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(["es", "en"]),
    translationKey: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Mauro Sánchez'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog }; 