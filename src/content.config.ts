import { defineCollection, z } from 'astro:content';
const blogCollection = defineCollection({
    schema: z.object({
      isDraft: z.boolean(),
      title: z.string(),
      sortOrder: z.number(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      author: z.string().default('Anonymous'),
      language: z.enum(['en', 'es']),
      tags: z.array(z.string()),
      footnote: z.string().optional(),
  
      publishDate: z.date(),
  
      updatedDate: z.string().transform((str) => new Date(str)),
  
      authorContact: z.string().email(),
      canonicalURL: z.string().url(),
    }),
  });
  
  export const collections = {
    blog: blogCollection,
  };