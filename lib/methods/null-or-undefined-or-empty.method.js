"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullOrUndefinedOrEmptyMethod = void 0;
const universal_empty_checker_method_1 = require("./universal-empty-checker.method");
/**
 * TODO add test
 * @param value is any type
 */
function NullOrUndefinedOrEmptyMethod(value) {
    return (0, universal_empty_checker_method_1.UniversalEmptyCheckerMethod)(value);
}
exports.NullOrUndefinedOrEmptyMethod = NullOrUndefinedOrEmptyMethod;
