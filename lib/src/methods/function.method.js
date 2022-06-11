"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionMethod = void 0;
/**
 * @param value is any type
 */
function FunctionMethod(value) {
    return typeof value === 'function';
}
exports.FunctionMethod = FunctionMethod;
