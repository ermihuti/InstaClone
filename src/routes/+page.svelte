<script>
	import { enhance } from '$app/forms';
	let { data } = $props();
</script>

<!-- Header -->
<header class="bg-white shadow-md sticky top-0 z-50">
	<div class="max-w-7xl mx-auto px-4 py-4 flex justify-center items-center">
		<a href="/">
			<h1 class="text-2xl font-bold text-gray-800 text-center">📸 InstaClone</h1>
		</a>
	</div>
</header>

<!-- Main Content -->
<main class="bg-gray-100 min-h-screen py-10">
	<div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
		{#each data.articles as article (article.id)}
			<div class="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col overflow-hidden">
				<!-- Top: User -->
				<div class="flex items-center gap-3 px-4 py-3">
					<img src="https://aqlv60qlzxoqdolw.public.blob.vercel-storage.com/InstaClone/default-rxANWLRx2XL8cL3gBADi2CIc33LhCB.jpg" alt="Profile" class="w-10 h-10 rounded-full object-cover" />
					<span class="text-sm font-semibold text-gray-700">{article.author}</span>
				</div>

				<!-- Image -->
				<a href={`articles/${article.id}`}>
					<img src="{article.image}" alt="Uploaded" class="w-full h-72 object-cover transition hover:opacity-90" />
				</a>

				<!-- Like Button -->
				<div class="px-4 py-3 flex items-center justify-between">
					<form action="?/upvoteArticle" method="POST" use:enhance>
						<input type="hidden" name="id" value={article.id} />
						<button type="submit" class="hover:scale-110 transition" aria-label="Profile">
							<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 23 23" width="24" height="24">
								<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
							</svg>
						</button>
					</form>
					<span class="text-sm text-gray-600 font-medium">{article.votes} {article.votes === 1 ? 'like' : 'likes'}</span>
				</div>
			</div>
		{/each}
	</div>
</main>