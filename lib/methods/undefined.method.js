"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndefinedMethod = void 0;
/**
 *
 * @param value is any type
 */
function UndefinedMethod(value) {
    return [undefined, 'undefined'].includes(value);
}
exports.UndefinedMethod = UndefinedMethod;
