<script>
	let { data } = $props();
</script>

<h1 class="text-2xl mb-5 font-bold text-center text-gray-800">Create a New Event</h1>

<form method="POST" action="?/createArticle" enctype="multipart/form-data" class="bg-white rounded-lg p-6 shadow-md max-w-md mx-auto">

	<div class="mb-4">
		<label for="image" class="block text-sm font-medium text-gray-700">Image</label>
		<input type="file" name="uploadedImage"  
        class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Upload image"/>
	</div>

	<div class="mb-4">
		<label for="description" class="block text-sm font-medium text-gray-700">Description</label>
		<textarea id="description" name="description"  
		    class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20" 
		    placeholder="Enter description"></textarea>
	</div>

	<div class="mb-4">
		<label for="author" class="block text-sm font-medium text-gray-700">Author</label>
		<input type="text" id="author" name="author"  
		       class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
		       placeholder="Enter author"/>
	</div>

	<button type="submit" 
	        class="w-full bg-blue-500 text-white py-2 rounded text-lg hover:bg-blue-700 transition">
		Add Article
	</button>
</form>