"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Is = void 0;
class Is {
    /**
     * TODO add test
     * @param value is boolean type
     */
    static false(value) {
        return value === false;
    }
    /**
     * TODO add test
     * @param value is boolean type
     */
    static notFalse(value) {
        return !this.false(value);
    }
    /**
     * TODO add test
     * @param value is boolean type
     */
    static true(value) {
        return value === true;
    }
    /**
     * TODO add test
     * @param value is boolean type
     */
    static notTrue(value) {
        return !this.true(value);
    }
    /**
     *
     * @param value is any type
     */
    static null(value) {
        return [null, 'null'].includes(value);
    }
    /**
     *
     * @param value is any type
     */
    static notNull(value) {
        return !this.null(value);
    }
    /**
     *
     * @param value is any type
     */
    static undefined(value) {
        return [undefined, 'undefined'].includes(value);
    }
    /**
     *
     * @param value is any type
     */
    static notUndefined(value) {
        return !this.undefined(value);
    }
    /**
     *
     * @param value is any type
     */
    static nullOrUndefined(value) {
        return this.null(value) || this.undefined(value);
    }
    /**
     *
     * @param value is any type
     */
    static notNullOrUndefined(value) {
        return !this.nullOrUndefined(value);
    }
    /**
     *
     * @param value is any type
     */
    static number(value) {
        return typeof value === 'number' && !isNaN(value);
    }
    /**
     *
     * @param value is any type
     */
    static notNumber(value) {
        return !this.number(value);
    }
    /**
     * TODO add test
     * @param value is any type
     */
    static universalEmptyChecker(value) {
        var _a;
        if (this.nullOrUndefined(value)) {
            return true;
        }
        if (this.number(value)) {
            value = true;
        }
        else {
            value = (_a = Object.keys(value)) === null || _a === void 0 ? void 0 : _a.length;
        }
        return value === 0;
        // TODO Add JSON.parse?
    }
    /**
     * TODO add test
     * @param value is object type
     */
    static emptyObject(value) {
        return this.universalEmptyChecker(value);
    }
    /**
     * TODO add test
     * @param value is object type
     */
    static notEmptyObject(value) {
        return !this.emptyObject(value);
    }
    /**
     * TODO add test
     * @param value is string type
     */
    static emptyString(value) {
        return this.universalEmptyChecker(value);
    }
    /**
     * TODO add test
     * @param value is string type
     */
    static notEmptyString(value) {
        return !this.emptyString(value);
    }
    /**
     * TODO add test
     * @param value is any type
     */
    static nullOrUndefinedOrEmpty(value) {
        return this.universalEmptyChecker(value);
    }
    /**
     * TODO add test
     * @param value is any type
     */
    static notNullOrUndefinedOrEmpty(value) {
        return !this.nullOrUndefinedOrEmpty(value);
    }
    /**
     * TODO add test
     * @param objectOne is generic type
     * @param objectTwo is generic type
     */
    static notCompare(objectOne, objectTwo) {
        return !this.compare(objectOne, objectTwo);
    }
    /**
     * TODO add test
     * @param objectOne is generic type
     * @param objectTwo is generic type
     */
    static compare(objectOne, objectTwo) {
        var _a, _b;
        if (this.nullOrUndefined(objectOne) || this.nullOrUndefined(objectTwo)) {
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
                    if (this.notCompare(objectOne[keyOfObjectOne], objectTwo[keyOfObjectOne])) {
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
}
exports.Is = Is;
