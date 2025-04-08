<script>
	import { enhance } from '$app/forms';
	let { data } = $props();
</script>

<!-- Header -->
<header class="sticky top-0 z-50 bg-white shadow-md">
	<div class="mx-auto flex max-w-7xl items-center justify-center px-4 py-4">
		<a href="/">
			<h1 class="text-center text-2xl font-bold text-gray-800">📸 InstaClone</h1>
		</a>
	</div>
</header>

<!-- Main Content -->
<main class="min-h-screen bg-gray-100 py-10">
	<div
		class="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
	>
		{#each data.articles as article (article.id)}
			<div
				class="flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:shadow-lg"
			>
				<!-- Top: User -->
				<div class="flex items-center gap-3 px-4 py-3">
					<img
						src="https://aqlv60qlzxoqdolw.public.blob.vercel-storage.com/InstaClone/default-rxANWLRx2XL8cL3gBADi2CIc33LhCB.jpg"
						alt="Profile"
						class="h-10 w-10 rounded-full object-cover"
					/>
					<span class="text-sm font-semibold text-gray-700">{article.author}</span>
				</div>

				<!-- Image -->
				<a href={`articles/${article.id}`}>
					<img
						src={article.image}
						alt="Uploaded"
						class="h-72 w-full object-cover transition hover:opacity-90"
					/>
				</a>

				<!-- Like Button -->
				<div class="flex items-center justify-between px-4 py-3">
					<form action="?/upvoteArticle" method="POST" use:enhance>
						<input type="hidden" name="id" value={article.id} />
						<button type="submit" class="transition hover:scale-110" aria-label="Profile">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="red"
								viewBox="0 0 23 23"
								width="24"
								height="24"
							>
								<path
									d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
								/>
							</svg>
						</button>
					</form>
					<span class="text-sm font-medium text-gray-600"
						>{article.votes} {article.votes === 1 ? 'like' : 'likes'}</span
					>
				</div>
			</div>
		{/each}
	</div>
</main>