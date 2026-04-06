<script lang="ts">
	import { Button } from '$shared/ui';

	// function makeH() {
	// 	const selection = window.getSelection();
	// 	if (!selection || selection.rangeCount === 0) return;

	// 	const range = selection.getRangeAt(0);
	// 	if (!input.contains(range.commonAncestorContainer)) return;

	// 	const wrapper = document.createElement('h1');
	// 	wrapper.className = 'text-3xl font-bold my-4';
	// 	try {
	// 		const content = range.extractContents();
	// 		wrapper.appendChild(content);
	// 		range.insertNode(wrapper);
	// 		selection.removeAllRanges();
	// 		handleText();
	// 	} catch (e) {
	// 		console.error('Selection error:', e);
	// 	}
	// }
</script>

<div class="flex gap-2 border-b">
	<Button>H1</Button>
</div>
