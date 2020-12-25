import { Application, RequestHandler } from 'express';
import { Controller } from './controller';
import { port } from '../config';
/**
 * @class Server
 */
export class Server {
    constructor(app: Application) {
        this.app = app;
    }
    private app: Application;

    public loadMiddlewares(middlewares: Array<RequestHandler>): void {
        middlewares.forEach(middleware => {
            this.app.use(middleware);
        })
    }

    public loadRouters(controllers: Array<Controller>): void {
        controllers.forEach(controller => {
            this.app.use(controller.path, controller.setRoutes());
        })
    }

    public runServer(): void {
        this.app.listen(port, () => {
            console.log('listen to 8080');
        });
    }
}