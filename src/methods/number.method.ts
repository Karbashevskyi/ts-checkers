/**
 *
 * @param value is any type
 */
export function NumberMethod(value: any): boolean {
  return typeof value === 'number' && !isNaN(value);
}
