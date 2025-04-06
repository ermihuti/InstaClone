<script>
	import Warning from '$lib/components/Warning.svelte';
	export let form;
</script>

<div class="flex justify-center items-center h-screen bg-gray-100 px-4">
	<form action="?/login" method="POST"
	      class="bg-white shadow-xl rounded-xl p-8 max-w-sm w-full space-y-5">

		<h1 class="text-3xl font-bold text-center text-gray-800">🔐 Login</h1>

		<!-- Username -->
		<div>
			<label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
			<input type="text" id="username" name="username" placeholder="Enter your username" required
			       class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
		</div>

		<!-- Password -->
		<div>
			<label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
			<input type="password" id="password" name="password" placeholder="Enter your password" required
			       class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
		</div>

		<!-- Login Button -->
		<button type="submit"
		        class="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
			➡️ Login
		</button>

		<!-- Error Message -->
		{#if form}
			<Warning message={form.message} />
		{/if}

		<!-- Optional Links -->
		<div class="text-center text-sm text-gray-500 mt-2">
			<a href="/" class="hover:underline">← Back to Home</a>
		</div>
	</form>
</div>