import { createConnection } from '$lib/db/mysql';
import { redirect, fail } from '@sveltejs/kit';

// Load function: fetches article and its comments by ID
export async function load({ params, locals }) {
	// Check if user is admin, otherwise redirect to login
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login');
	}

	// Connect to database
	let connection = await createConnection();

	// Get the article by ID
	let [rows] = await connection.execute('SELECT * FROM articles where id = ?', [params.uuid]);

	// Get related comments
	let [comments] = await connection.execute('SELECT * FROM comments WHERE article_id = ?', [
		params.uuid
	]);

	// Return data to the page
	return {
		articles: rows,
		comments: comments,
		user: locals.user
	};
}

// Actions: handle form submissions
export const actions = {
	// Delete comment action
	deleteComment: async ({ request, locals }) => {
		// Only admins allowed
		if (!locals.user || locals.user.role !== 'admin') {
			return fail(403, { message: 'Not authorized' });
		}

		// Get comment ID from form
		const formData = await request.formData();
		const commentId = formData.get('commentId');

		// Fail if no ID provided
		if (!commentId) return fail(400, { message: 'Missing comment ID' });

		// Delete the comment from database
		const connection = await createConnection();
		await connection.execute('DELETE FROM comments WHERE id = ?', [commentId]);

		// Redirect back to the same page
		throw redirect(303, request.headers.get('referer') || '/');
	}
};