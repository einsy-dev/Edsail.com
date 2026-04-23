import type { Action } from 'svelte/action';

export const clickOutside: Action<
	HTMLElement,
	undefined,
	{
		onclick_outside: (e: CustomEvent<MouseEvent>) => void;
		oncontext_outside: (e: CustomEvent<MouseEvent>) => void;
	}
> = (node) => {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside'));
		}
	};

	const handleContext = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('context_outside'));
		}
	};

	document.addEventListener('click', handleClick, true);
	document.addEventListener('contextmenu', handleContext, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
			document.removeEventListener('contextmenu', handleContext, true);
		}
	};
};
