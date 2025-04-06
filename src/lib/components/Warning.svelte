<script>
	import { slide } from 'svelte/transition';
	const { message } = $props();
</script>

<div transition:slide>
	{message}
</div>

<style>
	div {
		background-color: #ffe5e5;
		color: #d9534f;
		border: 1px solid #d9534f;
		padding: 10px 15px;
		border-radius: 4px;
		font-size: 14px;
		margin-bottom: 15px;
		text-align: center;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>