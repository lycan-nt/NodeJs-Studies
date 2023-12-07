import {fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();

server.post('/videos', () => {

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