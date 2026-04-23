import z from 'zod';

export const DocsSchema = z.object({
	projectId: z.string(),
	docs: z.array(
		z.object({
			id: z.string(),
			title: z.string().nonempty(),
			description: z.string().optional().default(''),
			content: z.string().optional().default(''),
			slug: z.string(),
			keywords: z
				.array(z.string())
				.or(z.string().transform(() => []))
				.optional()
				.default([])
		})
	)
});

export type DocsSchemaI = z.infer<typeof DocsSchema>;
export const DocsCreateSchema = DocsSchema.extend({
	docs: z.array(DocsSchema.shape.docs.element.omit({ id: true }))
});
export type DocsCreateSchemaI = z.infer<typeof DocsCreateSchema>;
