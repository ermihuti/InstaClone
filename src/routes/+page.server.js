import { createConnection } from '$lib/db/mysql'; // Import DB connection

// Load top 25 articles by votes
export async function load({ locals }) {
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM articles ORDER BY votes DESC LIMIT 25');

	return {
		articles: rows,
		user: locals.user // Include logged-in user info
	};
}

export const actions = {
	// Upvote an article
	upvoteArticle: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');

		const connection = await createConnection();
		const [result] = await connection.execute(
			'UPDATE articles SET votes = votes + 1 WHERE id = ?',
			[id]
		);

		// Return success or error
		if (result.affectedRows) {
			return { success: true };
		} else {
			return { error: 'Failed to upvote' };
		}
	}
};