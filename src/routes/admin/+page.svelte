<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<!-- Header -->
<header class="sticky top-0 z-50 mb-8 bg-white shadow-md">
	<div class="mx-auto flex max-w-7xl justify-center px-4 py-4">
		<h1 class="text-3xl font-bold text-gray-800">🛠️ Admin Dashboard</h1>
	</div>
</header>

<!-- Actions -->
<div class="mb-8 flex flex-wrap justify-center gap-4 px-4">
	<a
		href="/admin/new"
		class="rounded-md bg-blue-500 px-5 py-2 text-lg font-semibold text-white transition hover:bg-blue-700"
	>
		➕ Add New Article
	</a>
	<a
		href="/"
		class="rounded-md bg-gray-800 px-5 py-2 text-lg font-semibold text-white transition hover:bg-yellow-400 hover:text-gray-900"
	>
		🏠 Homepage
	</a>
	<form action="/logout?/logout" method="POST">
		<button
			type="submit"
			class="rounded-md bg-red-500 px-5 py-2 text-lg font-semibold text-white transition hover:bg-red-700"
		>
			🚪 Logout
		</button>
	</form>
</div>

<!-- Articles -->
<div class="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each data.articles as article (article.id)}
		<div class="rounded-xl border bg-white p-4 shadow-md">
			<a href={`admin/articles/${article.id}`}>
				<img src={article.image} alt="uploaded" class="mb-4 h-64 w-full rounded-lg object-cover" />
			</a>

			<p class="mb-4 text-sm text-gray-700">
				<strong class="text-gray-900">ID:</strong>
				{article.id}<br />
				<strong class="text-gray-900">Description:</strong>
				{article.description}<br />
				<strong class="text-gray-900">Author:</strong>
				{article.author}<br />
				<strong class="text-gray-900">Likes:</strong>
				{article.votes}
			</p>

			<form action="?/deleteArticle" method="POST" use:enhance class="text-right">
				<input type="hidden" name="id" value={article.id} />
				<button
					type="submit"
					class="rounded bg-red-500 px-4 py-2 text-sm text-white transition hover:bg-red-700"
				>
					🗑️ Delete
				</button>
			</form>
		</div>
	{/each}
</div>