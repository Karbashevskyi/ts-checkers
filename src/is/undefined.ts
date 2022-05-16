/**
 *
 * @param value is any type
 */
export function Undefined(value: any): boolean {
    return [undefined, 'undefined'].includes(value);
}
