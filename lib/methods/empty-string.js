"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyString = void 0;
const universal_empty_checker_1 = require("./universal-empty-checker");
/**
 * 
 * @param value is string type
 */
function EmptyString(value) {
    return (0, universal_empty_checker_1.UniversalEmptyChecker)(value);
}
exports.EmptyString = EmptyString;
