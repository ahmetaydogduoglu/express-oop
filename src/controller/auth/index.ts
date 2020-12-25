import { Request, Response, NextFunction } from 'express';
import { Controller, IRoute, Methods } from '../controller';

/**
 * @class AuthController
 */
export class AuthController extends Controller {
    path = '/auth';
    routes = [{
        path: '/login',
        method: Methods.GET,
        handler: this.handleLogin,
        localMiddleware: []
    }]

    constructor() {
        super();
    }

    public handleLogin(req: Request, res: Response, next: NextFunction): void {
        res.json({
            data: {
                firstName: 'ahmet',
                lastName: 'aydoğduoğlu'
            },
            errorMessage: '',
            message: '',
            success: true
        }).status(200);
    }
}