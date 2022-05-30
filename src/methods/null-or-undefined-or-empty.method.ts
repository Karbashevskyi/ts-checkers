import {UniversalEmptyCheckerMethod} from './universal-empty-checker.method';

/**
 *
 * @param value is any type
 */
export function NullOrUndefinedOrEmptyMethod(value: any): boolean {
  return UniversalEmptyCheckerMethod(value);
}
