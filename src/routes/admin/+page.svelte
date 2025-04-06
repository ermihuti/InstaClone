<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<!-- Header -->
<header class="bg-white shadow-md sticky top-0 z-50 mb-8">
	<div class="max-w-7xl mx-auto px-4 py-4 flex justify-center">
		<h1 class="text-3xl font-bold text-gray-800">🛠️ Admin Dashboard</h1>
	</div>
</header>

<!-- Actions -->
<div class="flex flex-wrap justify-center gap-4 mb-8 px-4">
	<a href="/admin/new"
	   class="bg-blue-500 text-white font-semibold text-lg px-5 py-2 rounded-md hover:bg-blue-700 transition">
	   ➕ Add New Article
	</a>
	<a href="/"
	   class="bg-gray-800 text-white font-semibold text-lg px-5 py-2 rounded-md hover:bg-yellow-400 hover:text-gray-900 transition">
	   🏠 Homepage
	</a>
	<form action="/logout?/logout" method="POST">
		<button type="submit"
		        class="bg-red-500 text-white font-semibold text-lg px-5 py-2 rounded-md hover:bg-red-700 transition">
			🚪 Logout
		</button>
	</form>
</div>

<!-- Articles -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
	{#each data.articles as article (article.id)}
		<div class="bg-white border rounded-xl shadow-md p-4">
			<img src="{article.image}" alt="uploaded" class="w-full h-64 object-cover rounded-lg mb-4">
			
			<p class="text-sm text-gray-700 mb-4">
				<strong class="text-gray-900">ID:</strong> {article.id}<br>
				<strong class="text-gray-900">Description:</strong> {article.description}<br>
				<strong class="text-gray-900">Author:</strong> {article.author}<br>
				<strong class="text-gray-900">Likes:</strong> {article.votes}
			</p>

			<form action="?/deleteArticle" method="POST" use:enhance class="text-right">
				<input type="hidden" name="id" value={article.id} />
				<button type="submit"
				        class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 text-sm transition">
					🗑️ Delete
				</button>
			</form>
		</div>
	{/each}
</div>