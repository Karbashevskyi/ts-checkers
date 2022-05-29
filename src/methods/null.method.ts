/**
 *
 * @param value is any type
 */
export function NullMethod(value: any): boolean {
  return [null, 'null'].includes(value);
}
