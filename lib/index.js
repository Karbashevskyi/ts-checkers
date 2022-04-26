"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCompare = exports.isNotCompare = exports.isNotFalse = exports.isNotNullOrUndefinedOrEmpty = exports.isNullOrUndefinedOrEmpty = exports.isNotEmptyString = exports.isEmptyString = exports.isNotEmptyObject = exports.isEmptyObject = exports.universalEmptyChecker = exports.isNotNumber = exports.isNumber = exports.isNotNullOrUndefined = exports.isNullOrUndefined = exports.isUndefined = exports.isNull = void 0;
/**
 *
 * @param value is any type
 */
function isNull(value) {
    return [null, 'null'].includes(value);
}
exports.isNull = isNull;
/**
 *
 * @param value is any type
 */
function isUndefined(value) {
    return [undefined, 'undefined'].includes(value);
}
exports.isUndefined = isUndefined;
/**
 *
 * @param value is any type
 */
function isNullOrUndefined(value) {
    return isNull(value) || isUndefined(value);
}
exports.isNullOrUndefined = isNullOrUndefined;
/**
 *
 * @param value is any type
 */
function isNotNullOrUndefined(value) {
    return !isNullOrUndefined(value);
}
exports.isNotNullOrUndefined = isNotNullOrUndefined;
/**
 *
 * @param value is any type
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
exports.isNumber = isNumber;
/**
 *
 * @param value is any type
 */
function isNotNumber(value) {
    return !isNumber(value);
}
exports.isNotNumber = isNotNumber;
/**
 * TODO add test
 * @param value is any type
 */
function universalEmptyChecker(value) {
    var _a;
    if (isNullOrUndefined(value)) {
        return true;
    }
    if (isNumber(value)) {
        value = true;
    }
    else {
        value = (_a = Object.keys(value)) === null || _a === void 0 ? void 0 : _a.length;
    }
    return value === 0;
    // TODO Add JSON.parse?
}
exports.universalEmptyChecker = universalEmptyChecker;
/**
 * TODO add test
 * @param value is object type
 */
function isEmptyObject(value) {
    return universalEmptyChecker(value);
}
exports.isEmptyObject = isEmptyObject;
/**
 * TODO add test
 * @param value is object type
 */
function isNotEmptyObject(value) {
    return !isEmptyObject(value);
}
exports.isNotEmptyObject = isNotEmptyObject;
/**
 * TODO add test
 * @param value is string type
 */
function isEmptyString(value) {
    return universalEmptyChecker(value);
}
exports.isEmptyString = isEmptyString;
/**
 * TODO add test
 * @param value is string type
 */
function isNotEmptyString(value) {
    return !isEmptyString(value);
}
exports.isNotEmptyString = isNotEmptyString;
/**
 * TODO add test
 * @param value is any type
 */
function isNullOrUndefinedOrEmpty(value) {
    return universalEmptyChecker(value);
}
exports.isNullOrUndefinedOrEmpty = isNullOrUndefinedOrEmpty;
/**
 * TODO add test
 * @param value is any type
 */
function isNotNullOrUndefinedOrEmpty(value) {
    return !isNullOrUndefinedOrEmpty(value);
}
exports.isNotNullOrUndefinedOrEmpty = isNotNullOrUndefinedOrEmpty;
/**
 * TODO add test
 * @param enabled is boolean type
 */
function isNotFalse(enabled) {
    return enabled !== false;
}
exports.isNotFalse = isNotFalse;
/**
 * TODO add test
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
function isNotCompare(objectOne, objectTwo) {
    return !isCompare(objectOne, objectTwo);
}
exports.isNotCompare = isNotCompare;
/**
 * TODO add test
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
function isCompare(objectOne, objectTwo) {
    var _a, _b;
    if (isNullOrUndefined(objectOne) || isNullOrUndefined(objectTwo)) {
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
                if (isNotCompare(objectOne[keyOfObjectOne], objectTwo[keyOfObjectOne])) {
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
exports.isCompare = isCompare;
