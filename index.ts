import express, { RequestHandler } from 'express';
import { AuthController } from './src/controller';
import { json, urlencoded } from 'body-parser';
import { Controller, Server } from './src/types';
const app = express();

const middlewares: Array<RequestHandler> = [
    json(),
    urlencoded({extended: false})
]

const controllers: Array<Controller> = [
    new AuthController
];

const server = new Server(app);

server.loadMiddlewares(middlewares);
server.loadRouters(controllers);
server.runServer();
