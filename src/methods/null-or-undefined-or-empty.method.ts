import { UniversalEmptyCheckerMethod } from './universal-empty-checker.method';

/**
 * TODO add test
 * @param value is any type
 */
export function NullOrUndefinedOrEmptyMethod(value: any): boolean {
  return UniversalEmptyCheckerMethod(value);
}
