"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Is = void 0;
const methods_1 = require("./methods");
/**
 * Handler for reverse boolean result.
 */
const NotHandler = {
    apply(target, thisArg, args) {
        return !target(...args);
    },
};
/**
 * Map list of methods to array with proxy.
 */
const arrayOfProxy = Object.keys(methods_1.Methods).map((key) => {
    const proxy = new Proxy(methods_1.Methods[key], NotHandler);
    return [key, proxy];
});
/**
 * Init const for reverse result of boolean.
 */
const Not = Object.fromEntries(arrayOfProxy);
/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.True(value);
 * If you need check if true is not true just use this: Is.Not.True(value);
 */
exports.Is = Object.assign(Object.assign({}, methods_1.Methods), { Not });
