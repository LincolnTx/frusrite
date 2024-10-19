import { defineCollection, z } from "astro:content";

const productCollection = defineCollection({
    type: 'data',
    schema:z.object({
        id: z.number(),
        title: z.string(),
        image: z.string(),
        summary: z.string(),
        mainImage: z.string(),
        gallery: z.array(z.string()),
        reviews: z.array(z.string()),
        extra: z.object({
            title: z.string(),
            content: z.string()
        }),
        description: z.array(z.string()),
        paymentsMethods:z.array(z.object({
            name: z.string(),
            price: z.string(),
            disclaimer: z.string().optional()
        })),
        tecInfo: z.object({
            font: z.string(),
            consumption: z.string(),
            switches: z.string().optional(),
            knobs: z.string(),
            indicators: z.string(),
            conections: z.string(),
            length: z.string(),
            width: z.string(),
            maxHeight: z.string(),
            minHeight: z.string(),
            weight: z.string(),
            image: z.string(),
        }),
    }),
});

export const collections  = {
    'products': productCollection,
}