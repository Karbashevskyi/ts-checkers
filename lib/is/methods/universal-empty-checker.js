"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversalEmptyChecker = void 0;
const null_or_undefined_1 = require("./null-or-undefined");
const index_1 = require("./index");
/**
 * TODO add test
 * @param value is any type
 */
function UniversalEmptyChecker(value) {
    var _a;
    if ((0, null_or_undefined_1.NullOrUndefined)(value)) {
        return true;
    }
    if (index_1.Methods.Number(value)) {
        value = true;
    }
    else {
        value = (_a = Object.keys(value)) === null || _a === void 0 ? void 0 : _a.length;
    }
    return value === 0;
    // TODO Add JSON.parse?
}
exports.UniversalEmptyChecker = UniversalEmptyChecker;
