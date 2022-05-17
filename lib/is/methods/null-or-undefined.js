"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOrUndefined = void 0;
/**
 *
 * @param value is any type
 */
const null_1 = require("./null");
const undefined_1 = require("./undefined");
function NullOrUndefined(value) {
    return (0, null_1.Null)(value) || (0, undefined_1.Undefined)(value);
}
exports.NullOrUndefined = NullOrUndefined;
