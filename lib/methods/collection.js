"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
/**
 * Collection is an Array
 * @param value is any type
 */
function Collection(value) {
    return Array.isArray(value);
}
exports.Collection = Collection;
