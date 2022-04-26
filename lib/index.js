"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCompare = exports.isNotCompare = exports.isNotFalse = exports.isNotNullOrUndefinedOrEmpty = exports.isNullOrUndefinedOrEmpty = exports.isNotEmptyString = exports.isEmptyString = exports.isNotEmptyObject = exports.isEmptyObject = exports.universalEmptyChecker = exports.isMotNumber = exports.isNumber = exports.isNotNullOrUndefined = exports.isNullOrUndefined = exports.isUndefined = exports.isNull = void 0;
/**
 *
 * @param value
 */
function isNull(value) {
    return [null, 'null'].includes(value);
}
exports.isNull = isNull;
/**
 *
 * @param value
 */
function isUndefined(value) {
    return [undefined, 'undefined'].includes(value);
}
exports.isUndefined = isUndefined;
/**
 *
 * @param value
 */
function isNullOrUndefined(value) {
    return isNull(value) || isUndefined(value);
}
exports.isNullOrUndefined = isNullOrUndefined;
/**
 *
 * @param value
 */
function isNotNullOrUndefined(value) {
    return !isNullOrUndefined(value);
}
exports.isNotNullOrUndefined = isNotNullOrUndefined;
/**
 *
 * @param value
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
exports.isNumber = isNumber;
/**
 *
 * @param value
 */
function isMotNumber(value) {
    return !isNumber(value);
}
exports.isMotNumber = isMotNumber;
/**
 *
 * @param value
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
 *
 * @param value
 */
function isEmptyObject(value) {
    return universalEmptyChecker(value);
}
exports.isEmptyObject = isEmptyObject;
/**
 *
 * @param value
 */
function isNotEmptyObject(value) {
    return !isEmptyObject(value);
}
exports.isNotEmptyObject = isNotEmptyObject;
/**
 *
 * @param value
 */
function isEmptyString(value) {
    return universalEmptyChecker(value);
}
exports.isEmptyString = isEmptyString;
/**
 *
 * @param value
 */
function isNotEmptyString(value) {
    return !isEmptyString(value);
}
exports.isNotEmptyString = isNotEmptyString;
/**
 *
 * @param value
 */
function isNullOrUndefinedOrEmpty(value) {
    return universalEmptyChecker(value);
}
exports.isNullOrUndefinedOrEmpty = isNullOrUndefinedOrEmpty;
/**
 *
 * @param value
 */
function isNotNullOrUndefinedOrEmpty(value) {
    return !isNullOrUndefinedOrEmpty(value);
}
exports.isNotNullOrUndefinedOrEmpty = isNotNullOrUndefinedOrEmpty;
/**
 *
 * @param enabled
 */
function isNotFalse(enabled) {
    return enabled !== false;
}
exports.isNotFalse = isNotFalse;
/**
 *
 * @param objectOne
 * @param objectTwo
 */
function isNotCompare(objectOne, objectTwo) {
    return !isCompare(objectOne, objectTwo);
}
exports.isNotCompare = isNotCompare;
/**
 *
 * @param objectOne
 * @param objectTwo
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
