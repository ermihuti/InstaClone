<script>
	let { data } = $props();
</script>

<!-- Page Header -->
<section class="mx-auto mb-8 max-w-xl text-center">
	<h1 class="mb-3 text-4xl font-bold text-gray-800">🖼️ Create a New Article</h1>
	<p class="text-gray-500">Fill in the details below to add a new article.</p>
</section>

<!-- Navigation Buttons -->
<div class="mb-6 flex justify-center gap-4">
	<a
		href="/admin"
		class="rounded-md bg-gray-100 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-200"
		>← Admin Dashboard</a
	>
	<a
		href="/"
		class="rounded-md bg-gray-100 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-200"
		>🏠 Home</a
	>
</div>

<!-- Form Container -->
<form
	method="POST"
	action="?/createArticle"
	enctype="multipart/form-data"
	class="mx-auto max-w-xl space-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl"
>
	<!-- Image Upload -->
	<div>
		<label for="image" class="mb-1 block text-sm font-semibold text-gray-700">Image</label>
		<input
			type="file"
			name="uploadedImage"
			class="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>
	</div>

	<!-- Description -->
	<div>
		<label for="description" class="mb-1 block text-sm font-semibold text-gray-700"
			>Description</label
		>
		<textarea
			id="description"
			name="description"
			class="h-28 w-full resize-none rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			placeholder="Enter article description..."
		></textarea>
	</div>

	<!-- Author -->
	<div>
		<label for="author" class="mb-1 block text-sm font-semibold text-gray-700">Author</label>
		<input
			type="text"
			id="author"
			name="author"
			class="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			placeholder="Enter author name"
		/>
	</div>

	<!-- Submit Button -->
	<button
		type="submit"
		class="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
	>
		📤 Add Article
	</button>
</form>