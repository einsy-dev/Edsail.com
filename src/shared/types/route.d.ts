export type Route = {
	title: string;
	icon?: Component<LucideProps>;
	path: string;
	items?: Omit<Route, 'items'>[];
};
