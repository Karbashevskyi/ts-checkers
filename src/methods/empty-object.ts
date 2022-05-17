import { UniversalEmptyChecker } from './universal-empty-checker';

/**
 * TODO add test
 * @param value is object type
 */
export function EmptyObject(value: object): boolean {
  return UniversalEmptyChecker(value);
}
