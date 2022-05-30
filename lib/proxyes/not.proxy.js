"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildNot = void 0;
let allMethods;
/**
 * Handler for reverse boolean result.
 */
const NotHandler = {
    apply(target, thisArg, args) {
        return !target(...args);
    },
};
/**
 *
 * @param object must by object with string key and any value
 * @param item must by object with string key and any value
 */
const reduce = (object, item) => {
    return Object.assign(object, item);
};
/**
 *
 * @param key mu by string
 */
const map = (key) => {
    return { [key]: new Proxy(allMethods[key], NotHandler) };
};
/**
 * Init const for reverse result of boolean.
 */
const BuildNot = (methodsList) => {
    allMethods = methodsList;
    return Object.keys(methodsList).map(map).reduce(reduce, {});
};
exports.BuildNot = BuildNot;
