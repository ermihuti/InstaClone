import { login } from '$lib/db/auth';
import { redirect } from '@sveltejs/kit';

export const actions = {
	// Login form action
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get('username'); // Get username from form
		const password = formData.get('password'); // Get password from form

		const token = await login(username, password); // Try to log in

		if (token) {
			// Set session cookie if login successful
			cookies.set('session', token, {
				maxAge: 60 * 60 * 24 * 7, // 1 week
				path: '/',
				httpOnly: true,
				sameSite: 'strict'
			});

			throw redirect(302, '/admin'); // Redirect to admin page
		} else {
			// Return failure message
			return {
				success: false,
				message: 'Login failed'
			};
		}
	}
};