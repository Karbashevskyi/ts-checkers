/**
 *
 * @param value is any type
 */
export function UndefinedMethod(value: any): boolean {
  return [undefined, 'undefined'].includes(value);
}
