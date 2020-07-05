import fastify, { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { user_login_schema } from './schema';

async function login() {
    return 'hi';
}

export default (server: FastifyInstance, opts: any, done: any) => {
    server.post('/login', user_login_schema, login);
    done();
    return server;
};
