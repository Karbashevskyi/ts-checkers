import {Methods, MethodsInterface} from './methods';

/**
 * Handler for reverse boolean result.
 */
const NotHandler: any = {
    apply(target: any, thisArg: any, args: any) {
        return !target(...args);
    }
};

/**
 * Map list of methods to array with proxy.
 */
const arrayOfProxy: any[][] = Object.keys(Methods).map((key: string) => {
    const proxy: any = new Proxy((Methods as any)[key], NotHandler);
    return [key, proxy];
});

/**
 * Init const for reverse result of boolean.
 */
const Not: MethodsInterface = Object.fromEntries(arrayOfProxy) as MethodsInterface;

/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.True(value);
 * If you need check if true is not true just use this: Is.Not.True(value);
 */
export const Is = {
    ...Methods,
    Not
};
