import { defineCollection, z } from "astro:content";

const productCollection = defineCollection({
    type: 'data',
    schema: z.array(
        z.object({
            title: z.string(),
            image: z.string(),
            summary: z.string(),
            'main-image': z.string(),
            gallery: z.array(z.string()),
            reviews: z.array(z.string()),
            extra: z.object({
                title: z.string(),
                content: z.string()
            }),
            // TODO: verificar a possibilide de transformar o em array
            // cada item seria um paragrafo
            description: z.string()
        })
    ),
});

export const collections  = {
    'products': productCollection,
}