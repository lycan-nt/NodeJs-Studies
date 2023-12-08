import { sql } from './db.js';

sql`
    create TABLE videos (
        title TEXT,
        description TEXT,
        duration INTEGET
    );
`.then(() => {
    console.log('Table Criade!');
})