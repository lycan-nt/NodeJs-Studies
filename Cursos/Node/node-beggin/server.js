import { createServer } from 'node:http';

const server = createServer(() => {
    console.log('Hello')
});

server.listen(3000);

