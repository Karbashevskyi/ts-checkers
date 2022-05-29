"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberMethod = void 0;
/**
 *
 * @param value is any type
 */
function NumberMethod(value) {
    return typeof value === 'number' && !isNaN(value);
}
exports.NumberMethod = NumberMethod;
