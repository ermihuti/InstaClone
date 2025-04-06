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

<a href="/" class="text-white text-lg hover:text-yellow-400 transition">🏠 Home</a>

<form action="/logout?/logout" method="POST">
    <button type="submit" class="bg-blue-500 text-white px-5 py-2 text-lg rounded hover:bg-blue-700">Logout</button>
</form>

{#each data.articles as article (article.id)}
<div class="bg-gray-100 p-4">
  <div class="bg-white border rounded-sm max-w-md">
    <img src="{article.image}" alt="uploaded">
    <p class="text-gray-700 text-base">
        <strong class="text-gray-900">ID:</strong> {article.id} |
        <strong class="text-gray-900">Description:</strong> {article.description} |
        <strong class="text-gray-900">Author:</strong> {article.author} |
        <strong class="text-gray-900">Likes:</strong> {article.votes}
    </p>
    <div class="flex items-center justify-between mx-4 mt-3 mb-2">
      <div class="flex gap-5">
    </div>
    </div>
  </div>
</div>
{/each}