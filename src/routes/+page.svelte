<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1 class="text-2xl mb-5 text-center text-gray-800">Insta Clone</h1>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
		{#each data.articles as article (article.id)}
			<div class="bg-white rounded-lg p-4 shadow-lg transition-transform transform hover:-translate-y-1">
				<a href="{"articles/" + article.id}"><img src="{article.image}" alt="uploaded" class="w-64 h-64 object-contain rounded-lg border border-gray-300"></a>
			</div>
		{/each}
</div>