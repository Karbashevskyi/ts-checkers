import { UniversalEmptyChecker } from './universal-empty-checker';

/**
 * TODO add test
 * @param value is any type
 */
export function NullOrUndefinedOrEmpty(value: any): boolean {
  return UniversalEmptyChecker(value);
}
