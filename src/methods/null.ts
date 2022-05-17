/**
 *
 * @param value is any type
 */
export function Null(value: any): boolean {
  return [null, 'null'].includes(value);
}
