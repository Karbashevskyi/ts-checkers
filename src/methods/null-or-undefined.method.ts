/**
 *
 * @param value is any type
 */
import { NullMethod } from './null.method';
import { UndefinedMethod } from './undefined.method';

export function NullOrUndefinedMethod(value: any): boolean {
  return NullMethod(value) || UndefinedMethod(value);
}
