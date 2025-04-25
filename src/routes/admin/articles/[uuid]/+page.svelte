<script>
	import { enhance } from '$app/forms';
	let { data } = $props();
	let user = data.user;
  </script>
  
  <header class="sticky top-0 z-50 bg-white shadow-md">
	<div class="mx-auto flex max-w-7xl items-center justify-center px-4 py-4">
	  <a href="/">
		<h1 class="text-center text-2xl font-bold text-gray-800">📸 InstaClone</h1>
	  </a>
	</div>
  </header>
  
  <main class="min-h-screen bg-gray-100 px-4 py-10">
	
	<div class="flex justify-center mb-6">
	  <a href="/admin" class="inline-block text-sm text-blue-600 hover:underline">
		← Back to Admin Dashboard
	  </a>
	</div>
  
	{#each data.articles as article (article.id)}
	  <div class="mx-auto mb-10 max-w-5xl flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-lg lg:flex-row">
		
		<div class="flex flex-col gap-3 p-4 lg:w-2/3">
		  
		  <div class="flex items-center justify-between">
			<div class="flex items-center gap-3">
			  <img
				src="https://aqlv60qlzxoqdolw.public.blob.vercel-storage.com/InstaClone/default-rxANWLRx2XL8cL3gBADi2CIc33LhCB.jpg"
				alt="Profile"
				class="h-9 w-9 rounded-full object-cover"
			  />
			  <span class="text-sm font-semibold text-gray-700">{article.author}</span>
			</div>
		  </div>
  
		  <img
			src={article.image}
			alt="Uploaded"
			class="h-[400px] w-full rounded-md object-cover transition hover:opacity-90"
		  />
  
		  <div class="flex items-center justify-between">
			<button type="submit" aria-label="Like article" class="hover:scale-110 transition">
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				fill="red"
				viewBox="0 0 23 23"
				width="26"
				height="26"
			  >
				<path
				  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
				/>
			  </svg>
			</button>
			<span class="text-sm font-medium text-gray-600">
			  {article.votes} {article.votes === 1 ? 'like' : 'likes'}
			</span>
		  </div>
  
		  <p class="text-sm text-gray-700">
			<span class="mr-2 font-semibold">{article.author}</span>
			{article.description}
		  </p>
		</div>
  
		<div class="border-t border-gray-200 p-5 lg:w-1/3 lg:border-t-0 lg:border-l">
		  <h3 class="mb-4 text-lg font-bold text-gray-800">Comments</h3>
  
		  <div class="mb-6 max-h-60 space-y-3 overflow-y-auto">
			{#each data.comments as comment}
			  <div class="flex items-start justify-between rounded bg-gray-50 p-2 text-sm text-gray-700">
				<p><span class="mr-2 font-semibold">{comment.name}</span>{comment.text}</p>
  
				{#if user?.role === 'admin'}
				  <form method="POST" action="?/deleteComment" class="ml-3">
					<input type="hidden" name="commentId" value={comment.id} />
					<button class="text-xs text-red-500 hover:underline">Delete</button>
				  </form>
				{/if}
			  </div>
			{/each}
		  </div>
		</div>
	  </div>
	{/each}
  </main>