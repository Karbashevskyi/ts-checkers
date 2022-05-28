import {Methods, MethodsInterface} from '../methods';

/**
 * Handler for reverse boolean result.
 */
const NotHandler: any = {
    apply(target: any, thisArg: any, args: any) {
        return !target(...args);
    },
};

/**
 *
 * @param object must by object with string key and any value
 * @param item must by object with string key and any value
 */
const reduce: any = (object: { [p: string]: any }, item: { [p: string]: any }) => {
    return Object.assign(object, item);
};

/**
 *
 * @param key mu by string
 */
const map: any = (key: string) => {
    return { [key]: new Proxy((Methods as any)[key], NotHandler) };
};

/**
 * Init const for reverse result of boolean.
 */
export const Not: MethodsInterface = Object.keys(Methods).map(map).reduce(reduce, {}) as MethodsInterface;