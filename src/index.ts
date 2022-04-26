
/**
 *
 * @param value
 */
export function isNull(value: any): boolean {
    return [null, 'null'].includes(value);
}

/**
 *
 * @param value
 */
export function isUndefined(value: any): boolean {
    return [undefined, 'undefined'].includes(value);
}

/**
 *
 * @param value
 */
export function isNullOrUndefined(value: any): boolean {
    return isNull(value) || isUndefined(value);
}

/**
 *
 * @param value
 */
export function isNotNullOrUndefined(value: any): boolean {
    return !isNullOrUndefined(value);
}

/**
 *
 * @param value
 */
export function isNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
}

/**
 *
 * @param value
 */
export function isNotNumber(value: any): boolean {
    return !isNumber(value);
}

/**
 * TODO add test
 * @param value
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
 * @param value
 */
export function isEmptyObject(value: object): boolean {
    return universalEmptyChecker(value);
}

/**
 * TODO add test
 * @param value
 */
export function isNotEmptyObject(value: object): boolean {
    return !isEmptyObject(value);
}

/**
 * TODO add test
 * @param value
 */
export function isEmptyString(value: string): boolean {
    return universalEmptyChecker(value);
}

/**
 * TODO add test
 * @param value
 */
export function isNotEmptyString(value: string): boolean {
    return !isEmptyString(value);
}

/**
 * TODO add test
 * @param value
 */
export function isNullOrUndefinedOrEmpty(value: any): boolean {
    return universalEmptyChecker(value);
}

/**
 * TODO add test
 * @param value
 */
export function isNotNullOrUndefinedOrEmpty(value: any): boolean {
    return !isNullOrUndefinedOrEmpty(value);
}

/**
 * TODO add test
 * @param enabled
 */
export function isNotFalse(enabled: boolean): boolean {
    return enabled !== false;
}

/**
 * TODO add test
 * @param objectOne
 * @param objectTwo
 */
export function isNotCompare<T>(objectOne: T, objectTwo: T): boolean {

    return !isCompare(objectOne, objectTwo);

}

/**
 * TODO add test
 * @param objectOne
 * @param objectTwo
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
