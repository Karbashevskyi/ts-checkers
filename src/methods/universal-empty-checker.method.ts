import {NullOrUndefinedMethod} from './null-or-undefined.method';
import {Methods} from './index';

/**
 *
 * @param value is any type
 */
export function UniversalEmptyCheckerMethod(value: any): boolean {
  if (NullOrUndefinedMethod(value)) {
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
