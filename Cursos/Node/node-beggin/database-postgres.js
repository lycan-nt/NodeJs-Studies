import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres {
    #videos = new Map();

    async list(search = '') {
        let videos;
        if (search) {
            videos = await sql`SELECT * FROM videos WHERE title ILIKE "%${search}%"`;
       } else {
            videos = sql`SELECT * FROM videos`;
       }
       return videos;
    }

    async create(video) {
        const videoId = randomUUID();
        const { title, description, duration } = videos;
        await sql`INSERT INTO videos (id, title, description, duration) VALUES (${videoId}, ${title}, ${description}, ${duration})`;
    }

    update(id, video) {

    }

    delete(id) {

    }
}