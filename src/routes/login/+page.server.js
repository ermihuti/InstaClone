import { login } from '$lib/db/auth';
import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		const token = await login(username, password);

		if (token) {
			cookies.set('session', token, {
				maxAge: 60 * 60 * 24 * 7, // 1 week
				path: '/',
				httpOnly: true,
				sameSite: 'strict'
			});

			// Properly return the redirect
			throw redirect(302, '/admin');
		} else {
			// Return data to show login failed
			return {
				success: false,
				message: 'Login failed'
			};
		}
	}
};