import { UniversalEmptyCheckerMethod } from './universal-empty-checker.method';

/**
 * TODO add test
 * @param value is object type
 */
export function EmptyObjectMethod(value: object): boolean {
  return UniversalEmptyCheckerMethod(value);
}
