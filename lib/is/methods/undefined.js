"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Undefined = void 0;
/**
 *
 * @param value is any type
 */
function Undefined(value) {
    return [undefined, 'undefined'].includes(value);
}
exports.Undefined = Undefined;
