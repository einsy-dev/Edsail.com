import z from 'zod';

export const ProjectSchema = z.object({
	id: z.string().nonempty(),
	title: z.string().nonempty(),
	description: z.string().optional(),
	content: z.string().optional(),
	slug: z.string(),
	keywords: z.array(z.string()).optional().default([]),
	category: z.array(z.string()).optional().default([]),
	images: z.array(z.string()).optional().default([]),
	icon: z.string().optional(),
	files: z.array(z.string()).optional().default([]),
	docs: z.array(z.string()).optional().default([]),
	policy: z.string().optional(),
	group: z.string().optional()
});

export const ProjectCreateSchema = ProjectSchema.omit({ id: true, files: true, docs: true });
