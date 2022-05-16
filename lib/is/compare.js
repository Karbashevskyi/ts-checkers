"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compare = void 0;
const null_or_undefined_1 = require("./null-or-undefined");
const index_1 = require("./index");
/**
 * TODO add test
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
function Compare(objectOne, objectTwo) {
    var _a, _b;
    if ((0, null_or_undefined_1.NullOrUndefined)(objectOne) || (0, null_or_undefined_1.NullOrUndefined)(objectTwo)) {
        return false;
    }
    const keysOfObjectOne = (_a = Object.keys(objectOne)) !== null && _a !== void 0 ? _a : [];
    const keysOfObjectTwo = (_b = Object.keys(objectTwo)) !== null && _b !== void 0 ? _b : [];
    if (!(keysOfObjectOne === null || keysOfObjectOne === void 0 ? void 0 : keysOfObjectOne.length) || !(keysOfObjectTwo === null || keysOfObjectTwo === void 0 ? void 0 : keysOfObjectTwo.length)) {
        return false;
    }
    if (keysOfObjectOne.length !== keysOfObjectOne.length) {
        return false;
    }
    for (const keyOfObjectOne of keysOfObjectTwo) {
        switch (typeof objectOne[keyOfObjectOne]) {
            case 'object':
                if (index_1.Is.Not.Compare(objectOne[keyOfObjectOne], objectTwo[keyOfObjectOne])) {
                    return false;
                }
                break;
            default:
                if (objectOne[keyOfObjectOne] !== objectTwo[keyOfObjectOne]) {
                    return false;
                }
                break;
        }
    }
    return true;
}
exports.Compare = Compare;