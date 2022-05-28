/**
 * Collection is an Array
 * @param value is any type
 */
export function Collection(value: any): boolean {
  return Array.isArray(value);
}
