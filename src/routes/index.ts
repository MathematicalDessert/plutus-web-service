import fastify, { FastifyInstance } from 'fastify';
import auth from './auth';

/**
 * Registers all routes
 */
export default (server: FastifyInstance) => {
    server.register(auth, { prefix: '/auth' });
    return server;
};
