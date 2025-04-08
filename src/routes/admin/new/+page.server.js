import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';

export const actions = {
	createArticle: async ({ request }) => {
		const formData = await request.formData();
		const uploadedImage = formData.get('uploadedImage');
		const { url } = await put('InstaClone/' + uploadedImage.name, uploadedImage, {
			access: 'public',
			token: BLOB_READ_WRITE_TOKEN
		});
		console.log(formData);
		console.log(url);

		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO articles (image, description, author) VALUES (?, ?, ?)',
			[url, formData.get('description'), formData.get('author')]
		);
		if (result.affectedRows) {
			redirect(303, '/admin');
		}
	}
};