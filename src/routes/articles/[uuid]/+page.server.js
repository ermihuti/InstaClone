import { createConnection } from '$lib/db/mysql';

// Define form actions
export const actions = {
	// Add a new comment to an article
	addComment: async ({ request }) => {
		const formData = await request.formData();
		const articleId = formData.get('article_id');
		const name = formData.get('name');
		const text = formData.get('text');

		const connection = await createConnection();

		// Insert comment into DB
		const [result] = await connection.execute(
			'INSERT INTO comments (article_id, name, text) VALUES (?, ?, ?)',
			[articleId, name, text]
		);

		// Redirect to article page
		return {
			status: 303,
			location: `/articles/${articleId}`
		};
	},

	// Increase vote count for an article
	upvoteArticle: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');

		const connection = await createConnection();

		// Increment vote count in DB
		const [result] = await connection.execute(
			'UPDATE articles SET votes = votes + 1 WHERE id = ?',
			[id]
		);

		// Return result
		if (result.affectedRows) {
			return { success: true };
		} else {
			return { error: 'Failed to upvote' };
		}
	}
};

// Load article and its comments
export async function load({ params, locals }) {
	const connection = await createConnection();

	const [rows] = await connection.execute('SELECT * FROM articles where id = ?', [params.uuid]);
	const [comments] = await connection.execute('SELECT * FROM comments WHERE article_id = ?', [
		params.uuid
	]);

	return {
		articles: rows,
		comments: comments,
		user: locals.user
	};
}