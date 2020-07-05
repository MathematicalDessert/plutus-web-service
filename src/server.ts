import fastify, { FastifyInstance } from 'fastify';
import register_routes from './routes';

const server: FastifyInstance = fastify({ logger: true });

register_routes(server).listen(3000, (err, address) => {
    if (err) {
        server.log.error(err);
        return;
    }
    server.log.info(`server listening on ${address}`);
});
