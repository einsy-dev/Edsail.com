export interface ProjectFormI {
	title: string;
	description: string;
	content: string;
	slug: string;
	keywords: string[];
	category: string[];
	images: File[];
	icon?: File;
	files: File[];
	docs: string[];
	policies: string[];
	projectGroup: string;
}
