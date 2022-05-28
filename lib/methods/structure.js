"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Structure = void 0;
const index_1 = require("../index");
/**
 * Structure is an Object
 * @param value is any type
 */
function Structure(value) {
    return typeof value === 'object' && index_1.Is.Not.Collection(value);
}
exports.Structure = Structure;
