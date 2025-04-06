<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1 class="text-2xl mb-5 text-center text-gray-800">Admin Dashboard</h1>

<a href="/admin/new" 
   class="inline-block bg-blue-500 text-white font-bold text-lg px-4 py-2 rounded hover:bg-blue-700 transition mb-5">
   Add a New Article
</a>

<form action="/logout?/logout" method="POST">
    <button type="submit" class="bg-blue-500 text-white px-5 py-2 text-lg rounded hover:bg-blue-700">Logout</button>
</form>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
		{#each data.articles as article (article.id)}
			<div class="bg-white rounded-lg p-4 shadow-lg transition-transform transform hover:-translate-y-1">
				<img src="{article.image}" alt="uploaded" class="w-64 h-64 object-contain rounded-lg border border-gray-300">
				<p class="text-gray-700 text-base">
					<strong class="text-gray-900">ID:</strong> {article.id} |
					<strong class="text-gray-900">Description:</strong> {article.description} |
					<strong class="text-gray-900">Author:</strong> {article.author} |
                    <strong class="text-gray-900">Votes:</strong> {article.votes}
				</p>
			</div>
		{/each}
</div>