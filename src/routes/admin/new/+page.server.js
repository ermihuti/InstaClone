import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';

// Load function: check admin access
export async function load({ locals }) {
	if (!locals.user || locals.user.role !== 'admin') {
		redirect(302, '/login'); // redirect if not admin
	}
}

// Actions for form submission
export const actions = {
	// Create article action
	createArticle: async ({ request }) => {
		// Get form data
		const formData = await request.formData();
		const uploadedImage = formData.get('uploadedImage');

		// Upload image to Vercel Blob
		const { url } = await put('InstaClone/' + uploadedImage.name, uploadedImage, {
			access: 'public',
			token: BLOB_READ_WRITE_TOKEN
		});

		// Insert article into DB
		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO articles (image, description, author) VALUES (?, ?, ?)',
			[url, formData.get('description'), formData.get('author')]
		);

		// Redirect if insert was successful
		if (result.affectedRows) {
			redirect(303, '/admin');
		}
	}
};