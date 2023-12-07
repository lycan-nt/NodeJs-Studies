import { createServer } from 'node:http';

const server = createServer((request, response) => {
    console.log('Hello.');
    response.write('Hello');
    return response.end();
});

server.listen(3000);

