import { Is } from '../index';

/**
 * Structure is an Object
 * @param value is any type
 */
export function Structure(value: any): boolean {
  return typeof value === 'object' && Is.Not.Collection(value);
}
