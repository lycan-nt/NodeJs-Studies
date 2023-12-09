import { sql } from './db.js';

sql`
    create TABLE videos (
        title TEXT,
        description TEXT,
        duration INTEGER
    );
`.then(() => {
    console.log('Table Created!');
})