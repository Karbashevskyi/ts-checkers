import {Methods, MethodsInterface} from '../methods';
import {Not} from './not.proxy';

type executeType = (...args: any[]) => boolean;

/**
 * Handler for reverse boolean result.
 * Is.All.Boolean([true, true, 0], [true, [false]]); // Is false
 */
const AllHandler: any = {
    apply(target: any, thisArg: any, argumentList: any[]) {

        const execute: executeType = (...args: any[]): boolean => {
            return args.every((argument: any): boolean => {
                if (Array.isArray(argument)) {
                    return execute(...argument);
                }
                return target(argument);
            })
        };

        return execute(...argumentList);
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
    return { [key]: new Proxy((Methods as any)[key], AllHandler) };
};

export type AllType = MethodsInterface & {
    Not: MethodsInterface
};

/**
 * Init const for reverse result of boolean.
 */
export const All: AllType = {
    ...Object.keys(Methods).map(map).reduce(reduce, {}) as MethodsInterface,
    Not
};
