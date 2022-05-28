"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Not = void 0;
const methods_1 = require("../methods");
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
    return { [key]: new Proxy(methods_1.Methods[key], NotHandler) };
};
/**
 * Init const for reverse result of boolean.
 */
exports.Not = Object.keys(methods_1.Methods).map(map).reduce(reduce, {});