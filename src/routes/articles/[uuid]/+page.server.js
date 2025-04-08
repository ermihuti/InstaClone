import { createConnection } from '$lib/db/mysql';

export const actions = {
	addComment: async ({ request }) => {
		const formData = await request.formData();

		const articleId = formData.get('article_id');
		const name = formData.get('name');
		const text = formData.get('text');

		// Create the database connection
		const connection = await createConnection();

		// Insert the comment into the comments table
		const [result] = await connection.execute(
			'INSERT INTO comments (article_id, name, text) VALUES (?, ?, ?)',
			[articleId, name, text]
		);

		// Redirect or return a response (optional)
		return {
			status: 303,
			location: `/articles/${articleId}`
		};
	},

	upvoteArticle: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const connection = await createConnection();
		const [result] = await connection.execute(
			'UPDATE articles SET votes = votes + 1 WHERE id = ?',
			[id]
		);
		if (result.affectedRows) {
			return { success: true };
		} else {
			return { error: 'Failed to upvote' };
		}
	}
};

export async function load({ params, locals }) {
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM articles where id = ?', [params.uuid]);
	let [comments] = await connection.execute('SELECT * FROM comments WHERE article_id = ?', [
		params.uuid
	]);

	return {
		articles: rows,
		comments: comments,
		user: locals.user
	};
}