import { createConnection } from '$lib/db/mysql';
import { redirect, fail } from '@sveltejs/kit';

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

export const actions = {
	deleteComment: async ({ request, locals }) => {
		if (!locals.user || locals.user.role !== 'admin') {
			return fail(403, { message: 'Not authorized' });
		}

		const formData = await request.formData();
		const commentId = formData.get('commentId');

		if (!commentId) return fail(400, { message: 'Missing comment ID' });

		const connection = await createConnection();
		await connection.execute('DELETE FROM comments WHERE id = ?', [commentId]);

		throw redirect(303, request.headers.get('referer') || '/');
	}
};