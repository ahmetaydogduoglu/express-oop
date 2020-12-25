import { Router, Response, Request, NextFunction } from 'express';

/**
 * @enum Methods
 */
export enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
};

/**
 * @interface IRoute
 */
export interface IRoute {
    path: string;
    method: Methods;
    localMiddleware: Array<((req: Request, res: Response, next: NextFunction) => void)>;
    handler(req: Request, res: Response, next: NextFunction): void | Promise<void>;
}

/**
 * @class Controller
 */
export abstract class Controller {
    public router: Router = Router();
    public abstract path: string;
    protected abstract routes: Array<IRoute>;

    public setRoutes(): Router {
        this.routes.forEach(item => {
            switch (item.method) {
                case Methods.GET:
                    this.router.get(item.path, item.handler);
                    break;
                case Methods.POST:
                    this.router.post(item.path, item.handler);
                    break;
                case Methods.PUT:
                    this.router.put(item.path, item.handler);
                    break;
                case Methods.DELETE:
                    this.router.delete(item.path, item.handler);
                    break;
                default:
                    throw 'your setted wrong method type.';
            }
        })

        return this.router;
    }

}