/**
 *
 * @param value is any type
 */
export function SymbolMethod(value: any): boolean {
  return typeof value === 'symbol';
}
