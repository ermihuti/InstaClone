<script>
	import { enhance } from '$app/forms';
	import { slide } from 'svelte/transition';

	let { data } = $props();
</script>

<h1 class="text-2xl mb-5 text-center text-gray-800">Insta Clone</h1>

{#each data.articles as article (article.id)}
<div class=" rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
    <div class="w-full flex justify-between p-3">
      <div class="flex">
        <div class="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
          <img src="https://aqlv60qlzxoqdolw.public.blob.vercel-storage.com/InstaClone/default-rxANWLRx2XL8cL3gBADi2CIc33LhCB.jpg" alt="uploaded">
        </div>
        <span class="pt-1 ml-2 font-bold text-sm">{article.author}</span>
      </div>
      <span class="px-2 hover:bg-gray-300 cursor-pointer rounded"><i class="fas fa-ellipsis-h pt-2 text-lg"></i></span>
    </div>
    <img class="w-full bg-cover" src="{article.image}" alt="uploaded">
    <div class="px-3 pb-2">
      <div class="pt-2">
        <i class="far fa-heart cursor-pointer"></i>
        <span class="text-sm text-gray-400 font-medium">{article.votes} likes</span>
      </div>
      <div class="pt-1">
        <div class="mb-2 text-sm">
          <span class="font-medium mr-2">{article.author}</span> {article.description}
        </div>
      </div>
      <h3>Comments</h3>
      
      <div class="mb-2">
        {#each data.comments as comment}
        <div class="mb-2 text-sm">
          <span class="font-medium mr-2">{comment.name}</span> {comment.text}
        </div>
        {/each}
      </div>
    
    </div>
    
    <form action="?/addComment" method="POST">
        <input type="hidden" name="article_id" value={article.id} />
        
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label for="text">Your Comment:</label>
        <textarea id="text" name="text" required></textarea>
        
        <button type="submit">Add Comment</button>
    </form>
  </div>
  {/each}