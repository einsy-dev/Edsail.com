import type { Action } from 'svelte/action';

export const rootScroll: Action<
	HTMLElement,
	undefined,
	{
		onroot_scroll: (e: CustomEvent<MouseEvent>) => void;
	}
> = (node) => {
	const handleScroll = (event: Event) => {
		node.dispatchEvent(new CustomEvent('root_scroll'));
	};

	document.getElementById('root')?.addEventListener('scroll', handleScroll, true);

	return {
		destroy() {
			document.getElementById('root')?.removeEventListener('scroll', handleScroll, true);
		}
	};
};
