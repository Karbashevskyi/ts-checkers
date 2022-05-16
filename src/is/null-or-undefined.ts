/**
 *
 * @param value is any type
 */
import {Null} from './null';
import {Undefined} from './undefined';


export function NullOrUndefined(value: any): boolean {
    return Null(value) || Undefined(value);
}
