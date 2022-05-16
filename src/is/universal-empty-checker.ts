import {NullOrUndefined} from './null-or-undefined';

/**
 * TODO add test
 * @param value is any type
 */
export function UniversalEmptyChecker(value: any): boolean {
    if (NullOrUndefined(value)) {
        return true;
    }

    if (Number(value)) { // todo is.number
        value = true;
    } else {
        value = Object.keys(value)?.length;
    }

    return value === 0;

    // TODO Add JSON.parse?
}
