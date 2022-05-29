/**
 *
 * @param value is any type
 */
export function BigintMethod(value: any): boolean {
  return typeof value === 'bigint';
}
