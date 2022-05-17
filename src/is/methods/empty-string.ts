import {UniversalEmptyChecker} from './universal-empty-checker';

/**
 * TODO add test
 * @param value is string type
 */
export function EmptyString(value: string): boolean {
    return UniversalEmptyChecker(value);
}
