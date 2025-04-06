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

<!-- Article Feed -->
<main class="bg-gray-100 min-h-screen py-10 px-4">
	{#each data.articles as article (article.id)}
		<div class="max-w-5xl mx-auto mb-10 bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col lg:flex-row">
			
			<!-- Left: Image + Info -->
			<div class="lg:w-2/3 p-4 flex flex-col gap-3">
				<!-- Author Info -->
				<div class="flex items-center justify-between">
					<div class="flex items-center gap-3">
						<img src="https://aqlv60qlzxoqdolw.public.blob.vercel-storage.com/InstaClone/default-rxANWLRx2XL8cL3gBADi2CIc33LhCB.jpg" alt="Profile" class="w-9 h-9 rounded-full object-cover" />
						<span class="font-semibold text-gray-700 text-sm">{article.author}</span>
					</div>
				</div>

				<!-- Image -->
				<img src="{article.image}" alt="Uploaded" class="w-full h-[400px] object-cover rounded-md transition hover:opacity-90" />

				<!-- Like and Description -->
				<div class="flex items-center justify-between">
					<form action="?/upvoteArticle" method="POST" use:enhance>
						<input type="hidden" name="id" value={article.id} />
						<button type="submit" aria-label="Like article" class="hover:scale-110 transition">
							<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 23 23" width="26" height="26">
								<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
							</svg>
						</button>
					</form>
					<span class="text-sm text-gray-600 font-medium">{article.votes} {article.votes === 1 ? 'like' : 'likes'}</span>
				</div>

				<!-- Description -->
				<p class="text-sm text-gray-700">
					<span class="font-semibold mr-2">{article.author}</span> {article.description}
				</p>
			</div>

			<!-- Right: Comments -->
			<div class="lg:w-1/3 p-5 border-t lg:border-t-0 lg:border-l border-gray-200">
				<h3 class="text-lg font-bold text-gray-800 mb-4">Comments</h3>

				<!-- Show Comments -->
				<div class="space-y-3 mb-6 max-h-60 overflow-y-auto">
					{#each data.comments as comment}
						<p class="text-sm text-gray-700"><span class="font-semibold mr-2">{comment.name}</span> {comment.text}</p>
					{/each}
				</div>

				<!-- Add Comment -->
				<form action="?/addComment" method="POST" class="space-y-3" use:enhance>
					<input type="hidden" name="article_id" value={article.id} />

					<div>
						<label for="name" class="block text-xs font-medium text-gray-600">Your Name</label>
						<input type="text" name="name" required class="w-full p-2 border border-gray-300 rounded-md text-sm" />
					</div>

					<div>
						<label for="text" class="block text-xs font-medium text-gray-600">Your Comment</label>
						<textarea name="text" required rows="2" class="w-full p-2 border border-gray-300 rounded-md text-sm"></textarea>
					</div>

					<button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Add Comment</button>
				</form>
			</div>
		</div>
	{/each}
</main>