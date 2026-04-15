export function onUpdate(fn: () => void) {
	let mounted = false;

	$effect(() => {
		if (mounted) {
			fn();
		}
		mounted = true;
	});
}
