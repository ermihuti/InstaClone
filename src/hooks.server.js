import { createConnection } from '$lib/db/mysql';

export const handle = async ({ event, resolve }) => {
	// Get cookies from browser
	const session = event.cookies.get('session');

	if (!session) {
		// If there is no session, load the page as normal
		return await resolve(event);
	}

	// Find the user based on the session
	const db = await createConnection();
	const [users] = await db.execute('SELECT * FROM users WHERE session_token = ?', [session]);

	if (users.length === 0) {
		// If no user is found, remove the session cookie
		event.cookies.set('session', '', {
			maxAge: -1, // Expire the cookie
			path: '/'
		});
		return await resolve(event);
	}

	// If `user` exists, set `event.locals.user`
	event.locals.user = users[0];

	// Load the page as normal
	return await resolve(event);
};