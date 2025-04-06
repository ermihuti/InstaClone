<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1 class="text-2xl mb-5 text-center text-gray-800">Insta Clone</h1>

{#each data.articles as article (article.id)}
<div class="bg-gray-100 p-4">
  <div class="bg-white border rounded-sm max-w-md">
    <div class="flex items-center px-4 py-3">
      <img src="https://aqlv60qlzxoqdolw.public.blob.vercel-storage.com/InstaClone/default-rxANWLRx2XL8cL3gBADi2CIc33LhCB.jpg" class="h-8 w-8 rounded-full" alt="Profile"/>
      <div class="ml-3 ">
        <span class="text-sm font-semibold antialiased block leading-tight">{article.author}</span>
      </div>
    </div>
    <a href="{"articles/" + article.id}"><img src="{article.image}" alt="uploaded"></a>
    <div class="flex items-center justify-between mx-4 mt-3 mb-2">
      <div class="flex gap-5">
        <h3>Comments</h3>
{#each comments as comment}
    <div class="comment">
        <p><strong>{comment.name}:</strong> {comment.text}</p>
    </div>
{/each}
        <form action="?/upvoteArticle" method="POST" use:enhance>
            <input type="hidden" name="id" value={article.id} />
            <button type="submit" aria-label="Like article"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 23 23" width="29" height="29">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </button>
          </form>
    </div>
    </div>
    <div class="font-semibold text-sm mx-4 mt-2 mb-4">{article.votes} likes</div>
  </div>
</div>
{/each}