import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string().optional(),
        cover: z.string().optional(),
        author: z.object({
          name: z.string(),
          avatar: z.string().optional(),
        }),
        tags: z.array(z.string()),
        category: z.string(),
        pinned: z.number().optional().default(0),
        created: z.date(),
        updated: z.date(),
      }),
    }),
  },
});
