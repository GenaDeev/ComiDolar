import { defineCollection, z } from 'astro:content';
const blogCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      draft: z.boolean(),
      author: z.string().default('Anonimo'),
      rssauthor: z.string().default('Anonimo'),
      copyright: z.string().default('2024 ©️ComiDolar'),
      theme: z.string(),
      tags: z.array(z.string()).optional(),
      hideImage: z.boolean().optional(),
    }),
  });
  
  export const collections = {
    blog: blogCollection,
  };