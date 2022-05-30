"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyObjectMethod = void 0;
const universal_empty_checker_method_1 = require("./universal-empty-checker.method");
/**
 *
 * @param value is object type
 */
function EmptyObjectMethod(value) {
    return (0, universal_empty_checker_method_1.UniversalEmptyCheckerMethod)(value);
}
exports.EmptyObjectMethod = EmptyObjectMethod;
