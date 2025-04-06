import { createConnection } from '$lib/db/mysql';

export const actions = {
    addComment: async ({ request }) => {
        const formData = await request.formData();
        
        const articleId = formData.get('article_id');
        const name = formData.get('name');
        const text = formData.get('text');
        
        // Create the database connection
        const connection = await createConnection();
        
        // Insert the comment into the comments table
        const [result] = await connection.execute(
            'INSERT INTO comments (article_id, name, text) VALUES (?, ?, ?)', 
            [articleId, name, text]
        );
        
        // Redirect or return a response (optional)
        return {
            status: 303,
            location: `/articles/${articleId}`
        };
    }
};

export async function load({ params, locals }) {
    let connection = await createConnection();
    let [rows] = await connection.execute('SELECT * FROM articles where id = ?', [params.uuid]);
    let [comments] = await connection.execute('SELECT * FROM comments WHERE article_id = ?', [params.uuid]);

    return {
        articles: rows,
        comments: comments,
        user: locals.user
    };
}