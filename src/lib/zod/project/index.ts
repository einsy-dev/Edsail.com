import z from 'zod';

export const ProjectSchema = z.object({
	id: z.string(),
	title: z.string().nonempty(),
	description: z.string().optional().default(''),
	content: z.string().optional().default(''),
	slug: z.string(),
	keywords: z
		.array(z.string())
		.or(z.string().transform(() => []))
		.optional()
		.default([]),
	category: z
		.array(z.string())
		.or(z.string().transform(() => []))
		.optional()
		.default([]),
	images: z.array(z.string()).optional().default([]),
	icon: z.string().optional()
});

export type ProjectSchemaI = z.infer<typeof ProjectSchema>;
export const ProjectCreateSchema = ProjectSchema.omit({ id: true });
export type ProjectCreateSchemaI = z.infer<typeof ProjectCreateSchema>;
