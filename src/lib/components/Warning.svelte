<script>
	import { slide } from 'svelte/transition';
	const { message } = $props();
</script>

<div
	transition:slide
	class="bg-red-100 text-red-600 border border-red-600 px-4 py-2 rounded text-sm mb-4 text-center shadow-md"
>
	{message}
</div>