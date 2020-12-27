import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Controller, Methods, ICustomPostMethodsRequest } from '../../types';

/**
 * @interface ILoginBody
 */
interface ILoginRequestBody {
    username: string;
    password: string;
}

/**
 * @class AuthController
 */
export class AuthController extends Controller {
    path = '/auth';
    routes = [
        {
            path: '/login',
            method: Methods.POST,
            handler: this.handleLogin,
            localMiddleware: []
        },
        {
            path: '/token-verify',
            method: Methods.GET,
            handler: this.handleTokenVerify,
            localMiddleware: []
        }
    ]

    constructor() {
        super();
    }

    public handleLogin(req: ICustomPostMethodsRequest<ILoginRequestBody>, res: Response): void {
        try {
            const { username, password } = req.body;

            if (username === 'ahmet' && password === 'ahmet') {
                const token: string = jwt.sign({ username, expiresIn: '24h' }, 'login-key', { expiresIn: '1 days' });
                super.responseAction(res, { token: token });
            } else {
                super.responseAction(res, null, 'User Not Found', false, 404);
            }

        } catch (error) {
            super.responseAction(res, null, error as string, false, 500);
        }
    }

    public handleTokenVerify(req: Request, res: Response): void {
        const { token } = req.headers;
        
        if (typeof token === 'string') {
            const validate = jwt.verify(token, 'login-key');
            super.responseAction(res, { validate: validate });
        } else {
            super.responseAction(res, null, 'UnAuth', false, 401);
        }
    }
}