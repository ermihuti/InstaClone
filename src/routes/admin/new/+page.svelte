<script>
	let { data } = $props();
</script>

<!-- Page Header -->
<section class="max-w-xl mx-auto text-center mb-8">
	<h1 class="text-4xl font-bold text-gray-800 mb-3">🖼️ Create a New Article</h1>
	<p class="text-gray-500">Fill in the details below to add a new article.</p>
</section>

<!-- Navigation Buttons -->
<div class="flex justify-center gap-4 mb-6">
	<a href="/admin" class="bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-200 transition">← Admin Dashboard</a>
	<a href="/" class="bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-200 transition">🏠 Home</a>
</div>

<!-- Form Container -->
<form method="POST" action="?/createArticle" enctype="multipart/form-data"
	  class="bg-white rounded-2xl shadow-xl max-w-xl mx-auto p-8 space-y-6 border border-gray-100">

	<!-- Image Upload -->
	<div>
		<label for="image" class="block text-sm font-semibold text-gray-700 mb-1">Image</label>
		<input type="file" name="uploadedImage" 
		       class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
	</div>

	<!-- Description -->
	<div>
		<label for="description" class="block text-sm font-semibold text-gray-700 mb-1">Description</label>
		<textarea id="description" name="description"
		          class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-28"
		          placeholder="Enter article description..."></textarea>
	</div>

	<!-- Author -->
	<div>
		<label for="author" class="block text-sm font-semibold text-gray-700 mb-1">Author</label>
		<input type="text" id="author" name="author"
		       class="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
		       placeholder="Enter author name">
	</div>

	<!-- Submit Button -->
	<button type="submit"
	        class="w-full bg-blue-600 text-white py-3 text-lg font-semibold rounded-lg hover:bg-blue-700 transition">
		📤 Add Article
	</button>
</form>