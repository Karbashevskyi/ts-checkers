import {Is} from '../index';

/**
 * ObjectMethod is an Object
 * @param value is any type
 */
export function ObjectMethod(value: any): boolean {
  return typeof value === 'object' && Is.Not.Array(value) && Is.Not.Null(value);
}
