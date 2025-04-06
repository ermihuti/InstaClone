import { createConnection } from '$lib/db/mysql';

export async function load({ locals }) {
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM articles ORDER BY votes DESC');

	return {
		articles: rows,
		user: locals.user
	};
}

export const actions = {
	upvoteArticle: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const connection = await createConnection();
		const [result] = await connection.execute('UPDATE articles SET votes = votes + 1 WHERE id = ?', [id]);
		if (result.affectedRows) {
			return { success: true };
		} else {
			return { error: 'Failed to upvote' };
		}
	}
};