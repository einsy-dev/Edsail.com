import * as z from 'zod';

export const UserLoginSchema = z.object({
	name: z.string().optional(),
	email: z.email(),
	password: z.string()
});

export const UserRegSchema = z.object({
	name: z.string().optional(),
	email: z.email(),
	password: z.string()
});
