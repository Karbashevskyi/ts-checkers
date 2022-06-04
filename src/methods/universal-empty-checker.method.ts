import {NullOrUndefinedMethod} from './null-or-undefined.method';
import {BooleanMethod} from './boolean.method';
import {NumberMethod} from './number.method';
import {BigintMethod} from './bigint.method';
import {FunctionMethod} from './function.method';

/**
 * Empty is: '', null, undefined, {}, NaN, Symbol(), [].
 * @param value is any type
 */
export function UniversalEmptyCheckerMethod(value: any): boolean {
  // if is null or undefined is empty
  if (NullOrUndefinedMethod(value)) {
    return true;
  }

  // If value is boolean when is not empty
  if (BooleanMethod(value)) {
    return false;
  }

  // If value is number when is not empty
  if (NumberMethod(value)) {
    return false;
  }

  // If value is BigInt when is not empty
  if (BigintMethod(value)) {
    return false;
  }

  // If value is Function when is not empty
  if (FunctionMethod(value)) {
    return false;
  }

  return Object.keys(value)?.length === 0;
}
