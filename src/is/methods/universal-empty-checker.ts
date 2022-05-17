import {NullOrUndefined} from './null-or-undefined';
import {Methods} from './index';

/**
 * TODO add test
 * @param value is any type
 */
export function UniversalEmptyChecker(value: any): boolean {
    if (NullOrUndefined(value)) {
        return true;
    }

    if (Methods.Number(value)) {
        value = true;
    } else {
        value = Object.keys(value)?.length;
    }

    return value === 0;

    // TODO Add JSON.parse?
}
