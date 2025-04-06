import { createConnection } from '$lib/db/mysql';

export async function load({ params, locals }) {
    let connection = await createConnection();
    let [rows] = await connection.execute('SELECT * FROM articles where id = ?', [params.uuid]);

    return {
        articles: rows,
        user: locals.user
    };
}