import type { Snippet } from 'svelte';
import { writable } from 'svelte/store';

interface PortalI {
	[key: string]: Snippet;
}

export const portalState = writable<PortalI>({});
