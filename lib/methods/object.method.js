"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMethod = void 0;
const index_1 = require("../index");
/**
 * ObjectMethod is an Object
 * @param value is any type
 */
function ObjectMethod(value) {
    return typeof value === 'object' && index_1.Is.Not.Array(value);
}
exports.ObjectMethod = ObjectMethod;
