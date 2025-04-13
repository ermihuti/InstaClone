import { createConnection } from '$lib/db/mysql';
import { BASIC_AUTH_USER, BASIC_AUTH_PASSWORD } from '$env/static/private';

// GET: Return all articles as JSON
export async function GET() {
	const connection = await createConnection();
	const [rows] = await connection.execute('SELECT * FROM articles');
	await connection.end();

	return new Response(JSON.stringify(rows), {
		status: 200,
		headers: { 'content-type': 'application/json' }
	});
}

// Basic auth check
async function authenticate(request) {
	const auth = request.headers.get('authorization');
	if (!auth) {
		// Ask for login
		return new Response(null, {
			status: 401,
			headers: { 'www-authenticate': 'Basic realm="Articles API"' }
		});
	}

	const base64Credentials = auth.split(' ')[1];
	const credentials = atob(base64Credentials);
	const [username, password] = credentials.split(':');

	if (username !== BASIC_AUTH_USER || password !== BASIC_AUTH_PASSWORD) {
		// Wrong credentials
		return new Response(JSON.stringify({ message: 'Access denied' }), {
			status: 401,
			headers: { 'www-authenticate': 'Basic realm="Articles API"' }
		});
	}

	return null; // Auth success
}

// POST: Create a new article
export async function POST({ request }) {
	const authResponse = await authenticate(request); // Check auth
	if (authResponse) return authResponse;

	const connection = await createConnection();
	const data = await request.json();

	// Insert new article into DB
	await connection.execute(
		'INSERT INTO articles (image, description, author, votes) VALUES (?, ?, ?, ?)',
		[data.image, data.description, data.author, data.votes]
	);

	await connection.end();

	return new Response(JSON.stringify(data), {
		status: 201,
		headers: { 'content-type': 'application/json' }
	});
}