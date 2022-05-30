import {MethodsInterface} from '../methods';

let allMethods: MethodsInterface;

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
  return { [key]: new Proxy((allMethods as any)[key], NotHandler) };
};

/**
 * Init const for reverse result of boolean.
 */
export const BuildNot = (methodsList: MethodsInterface) => {
  allMethods = methodsList;
  return Object.keys(methodsList).map(map).reduce(reduce, {}) as MethodsInterface;
};
