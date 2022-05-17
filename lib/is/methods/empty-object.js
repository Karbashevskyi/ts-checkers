"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyObject = void 0;
const universal_empty_checker_1 = require("./universal-empty-checker");
/**
 * TODO add test
 * @param value is object type
 */
function EmptyObject(value) {
    return (0, universal_empty_checker_1.UniversalEmptyChecker)(value);
}
exports.EmptyObject = EmptyObject;
