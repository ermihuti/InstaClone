import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

// Load function: checks admin and fetches all articles
export async function load({ locals }) {
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login'); // Redirect if not admin
	}

	let connection = await createConnection(); // Connect to DB
	let [rows] = await connection.execute('SELECT * from articles'); // Get all articles

	return {
		articles: rows // Return articles to the page
	};
}

// Actions for handling form submissions
export const actions = {
	// Delete article by ID
	deleteArticle: async ({ request }) => {
		const formData = await request.formData(); // Get form data
		const id = formData.get('id'); // Get article ID
		const connection = await createConnection(); // Connect to DB
		const [result] = await connection.execute('DELETE FROM articles WHERE id = ?', [id]); // Delete article
	}
};