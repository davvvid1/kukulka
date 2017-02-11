'use strict';

const Path = require('path');
const Hapi = require('hapi');
const inert = require('inert');
const good = require('good');

const inhertPlugin = inert;
const goodPlugin = {
    register: good,
    options: {
        ops: {
            interval: 1000
        },
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    log: '*',
                    response: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
};

const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '/../../frontend/app')
            }
        }
    }
});

server.connection({port: 3000, host: '0.0.0.0'});

server.register([inhertPlugin, goodPlugin], (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: Path.join(__dirname, '/../../frontend/app')
            }
        }
    });

    server.start((err) => {

        if (err) {
            throw err;
        }

        console.info('Server running at:', server.info.uri);
    });
});
