<script lang="ts">
	import { Button, Input } from '$shared/ui';

	let { input = $bindable(), value = $bindable() } = $props();

	function wrap(tag: any) {
		removeWrap();
		const selection = window.getSelection();
		if (!selection || selection.rangeCount === 0) return;

		const range = selection.getRangeAt(0);
		if (!input.contains(range.commonAncestorContainer)) return;

		const wrapper = document.createElement(tag);

		try {
			const content = range.extractContents();
			wrapper.appendChild(content);
			range.insertNode(wrapper);
			selection.removeAllRanges();
			value = input.innerHTML;
		} catch (e) {
			console.error('Selection error:', e);
		}
	}

	function removeWrap() {
		const selection = window.getSelection();
		if (!selection || selection.rangeCount === 0) return;

		const range = selection.getRangeAt(0);
		let container = range.commonAncestorContainer;

		if (container.nodeType === Node.TEXT_NODE) {
			container = container.parentElement!;
		}

		if (!input.contains(container) || container === input) return;

		const parent = container.parentNode;
		if (parent) {
			while (container.firstChild) {
				parent.insertBefore(container.firstChild, container);
			}
			parent.removeChild(container);
		}

		value = input.innerHTML;
	}
</script>

<div class="flex gap-2 border-b">
	<Input
		value="Heading"
		type="select"
		data={[
			{ title: 'Heading 1', callback: () => wrap('h1') },
			{ title: 'Heading 2', callback: () => wrap('h2') },
			{ title: 'Heading 3', callback: () => wrap('h3') },
			{ title: 'Paragraph', callback: () => removeWrap() }
		]}
	/>
	<Button
		class="bg-white px-2"
		onclick={(e) => {
			e.preventDefault();
			removeWrap();
			wrap('code');
		}}>Code</Button
	>
</div>
