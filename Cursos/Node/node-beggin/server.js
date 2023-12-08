import {fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();
const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {
    const { title, description, duration } = request.body;
    database.create({
        title: title,
        description: description,
        duration: duration
    });
    console.log(database.list());
    return reply.status(201).send();
});

server.get('/videos', () => {

});

server.put('/videos/:id', () => {

});

server.delete('/delete/:id', () => {

});

server.listen({
    port:3000
});