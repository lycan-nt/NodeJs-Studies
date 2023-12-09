import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres {
    #videos = new Map();

    list(search = '') {
        let videos;
        if (search) {
            videos = sql`SELECT * FROM videos WHERE title ILIKE "%${search}%"`;
       } else {
            videos = sql`SELECT * FROM videos`;
       }
       return videos;
    }

    create(video) {

    }

    update(id, video) {

    }

    delete(id) {

    }
}