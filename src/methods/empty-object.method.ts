import {UniversalEmptyCheckerMethod} from './universal-empty-checker.method';

/**
 *
 * @param value is object type
 */
export function EmptyObjectMethod(value: object): boolean {
  return UniversalEmptyCheckerMethod(value);
}
