"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOrUndefinedMethod = void 0;
/**
 *
 * @param value is any type
 */
const null_method_1 = require("./null.method");
const undefined_method_1 = require("./undefined.method");
function NullOrUndefinedMethod(value) {
    return (0, null_method_1.NullMethod)(value) || (0, undefined_method_1.UndefinedMethod)(value);
}
exports.NullOrUndefinedMethod = NullOrUndefinedMethod;
