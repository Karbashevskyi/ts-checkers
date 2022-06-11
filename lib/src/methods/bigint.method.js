"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BigintMethod = void 0;
/**
 *
 * @param value is any type
 */
function BigintMethod(value) {
    return typeof value === 'bigint';
}
exports.BigintMethod = BigintMethod;
