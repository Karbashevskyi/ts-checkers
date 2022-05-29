"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullMethod = void 0;
/**
 *
 * @param value is any type
 */
function NullMethod(value) {
    return [null, 'null'].includes(value);
}
exports.NullMethod = NullMethod;
