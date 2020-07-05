import fastify from 'fastify';

export const user_login_schema: fastify.RouteShorthandOptions = {
    schema: {
        body: {
            type: 'object',
            properties: {
                username: { type: 'string' },
                password: { type: 'string' },
            },
            required: ['username', 'password'],
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' },
                },
            },
        },
    },
};
