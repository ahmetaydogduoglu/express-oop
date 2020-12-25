import { Application, RequestHandler } from 'express';
import { Controller } from './controller';
/**
 * @class Server
 */
export class Server {
    constructor(app: Application) {
        this.app = app;
    }
    private app: Application;
    private port: number = 8080;

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
        this.app.listen(this.port, () => {
            console.log('listen to 8080');
        });
    }
}