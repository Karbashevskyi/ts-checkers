"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOrUndefinedOrEmpty = void 0;
const universal_empty_checker_1 = require("./universal-empty-checker");
/**
 * 
 * @param value is any type
 */
function NullOrUndefinedOrEmpty(value) {
    return (0, universal_empty_checker_1.UniversalEmptyChecker)(value);
}
exports.NullOrUndefinedOrEmpty = NullOrUndefinedOrEmpty;
