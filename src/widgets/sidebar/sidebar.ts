import type { Route } from '$shared/types/route';
import type { Snippet } from 'svelte';
import { writable } from 'svelte/store';

export type SidebarStateT = { active: boolean; items: Route[]; children?: Snippet[] };
export const sidebarState = writable<SidebarStateT>({ active: false, items: [] });
