export type Route = {
	title: string;
	icon?: Component<LucideProps>;
	path: string;
	items?: Omit<Route, 'items'>[];
};

export type One<T> = {
	[K in keyof T]-?: Required<Pick<T, K>> & Partial<Omit<T, K>>;
}[keyof T];
