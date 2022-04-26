
/**
 *
 * @param value is any type
 */
export function isNull(value: any): boolean {
    return [null, 'null'].includes(value);
}

/**
 *
 * @param value is any type
 */
export function isUndefined(value: any): boolean {
    return [undefined, 'undefined'].includes(value);
}

/**
 *
 * @param value is any type
 */
export function isNullOrUndefined(value: any): boolean {
    return isNull(value) || isUndefined(value);
}

/**
 *
 * @param value is any type
 */
export function isNotNullOrUndefined(value: any): boolean {
    return !isNullOrUndefined(value);
}

/**
 *
 * @param value is any type
 */
export function isNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
}

/**
 *
 * @param value is any type
 */
export function isNotNumber(value: any): boolean {
    return !isNumber(value);
}

/**
 * TODO add test
 * @param value is any type
 */
export function universalEmptyChecker(value: any): boolean {

    if (isNullOrUndefined(value)) {
        return true;
    }

    if (isNumber(value)) {
        value = true;
    } else {
        value = Object.keys(value)?.length;
    }

    return value === 0;

    // TODO Add JSON.parse?

}

/**
 * TODO add test
 * @param value is object type
 */
export function isEmptyObject(value: object): boolean {
    return universalEmptyChecker(value);
}

/**
 * TODO add test
 * @param value is object type
 */
export function isNotEmptyObject(value: object): boolean {
    return !isEmptyObject(value);
}

/**
 * TODO add test
 * @param value is string type
 */
export function isEmptyString(value: string): boolean {
    return universalEmptyChecker(value);
}

/**
 * TODO add test
 * @param value is string type
 */
export function isNotEmptyString(value: string): boolean {
    return !isEmptyString(value);
}

/**
 * TODO add test
 * @param value is any type
 */
export function isNullOrUndefinedOrEmpty(value: any): boolean {
    return universalEmptyChecker(value);
}

/**
 * TODO add test
 * @param value is any type
 */
export function isNotNullOrUndefinedOrEmpty(value: any): boolean {
    return !isNullOrUndefinedOrEmpty(value);
}

/**
 * TODO add test
 * @param enabled is boolean type
 */
export function isNotFalse(enabled: boolean): boolean {
    return enabled !== false;
}

/**
 * TODO add test
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
export function isNotCompare<T>(objectOne: T, objectTwo: T): boolean {

    return !isCompare(objectOne, objectTwo);

}

/**
 * TODO add test
 * @param objectOne is generic type
 * @param objectTwo is generic type
 */
export function isCompare<T>(objectOne: T, objectTwo: T): boolean {

    if (isNullOrUndefined(objectOne) || isNullOrUndefined(objectTwo)) {
        return false;
    }

    const keysOfObjectOne: string[] = Object.keys(objectOne) ?? [];
    const keysOfObjectTwo: string[] = Object.keys(objectTwo) ?? [];

    if (!keysOfObjectOne?.length || !keysOfObjectTwo?.length) {
        return false;
    }

    if (keysOfObjectOne.length !== keysOfObjectOne.length) {

        return false;

    }

    for (const keyOfObjectOne of keysOfObjectTwo) {

        switch (typeof (objectOne as any)[keyOfObjectOne]) {
            case 'object':
                if (isNotCompare((objectOne as any)[keyOfObjectOne], (objectTwo as any)[keyOfObjectOne])) {
                    return false;
                }
                break;
            default:
                if ((objectOne as any)[keyOfObjectOne] !== (objectTwo as any)[keyOfObjectOne]) {

                    return false;

                }
                break;
        }

    }

    return true;

}
