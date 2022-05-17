"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Null = void 0;
/**
 *
 * @param value is any type
 */
function Null(value) {
    return [null, 'null'].includes(value);
}
exports.Null = Null;
