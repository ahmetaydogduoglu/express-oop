import { Request } from 'express';

/**
 * @interface ICustomPostMethodsRequest
 */
export interface ICustomPostMethodsRequest<T> extends Request{
    body: T
}