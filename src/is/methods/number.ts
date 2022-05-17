/**
 *
 * @param value is any type
 */
export function Number(value: any): boolean {
  return typeof value === 'number' && !isNaN(value);
}
