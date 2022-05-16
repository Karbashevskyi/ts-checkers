# ts-checkers


// import { IsNot } from './is.not';
//
// export namespace Is {
//
//   export const Not = IsNot;
//
// }




// import {Is} from './index';
//
// export namespace IsNot {
//
//     /**
//      * TODO add test
//      * @param value is boolean type
//      */
//     export function False(value: boolean): boolean {
//         return !Is.False(value);
//     }
//
//     /**
//      * TODO add test
//      * @param value is boolean type
//      */
//     export function True(value: boolean): boolean {
//         return !Is.True(value);
//     }
//
//     /**
//      *
//      * @param value is any type
//      */
//     export function Null(value: any): boolean {
//         return !Is.Null(value);
//     }
//
//     /**
//      *
//      * @param value is any type
//      */
//     export function Undefined(value: any): boolean {
//         return !Is.Undefined(value);
//     }
//
//     /**
//      *
//      * @param value is any type
//      */
//     export function NullOrUndefined(value: any): boolean {
//         return !Is.NullOrUndefined(value);
//     }
//
//     /**
//      *
//      * @param value is any type
//      */
//     export function Number(value: any): boolean {
//         return !Is.Number(value);
//     }
//
//     /**
//      * TODO add test
//      * @param value is object type
//      */
//     export function EmptyObject(value: object): boolean {
//         return !Is.EmptyObject(value);
//     }
//
//     /**
//      * TODO add test
//      * @param value is string type
//      */
//     export function EmptyString(value: string): boolean {
//         return !Is.EmptyString(value);
//     }
//
//     /**
//      * TODO add test
//      * @param objectOne is generic type
//      * @param objectTwo is generic type
//      */
//     export function Compare<T>(objectOne: T, objectTwo: T): boolean {
//         return !Is.Compare(objectOne, objectTwo);
//     }
//
//     /**
//      * TODO add test
//      * @param value is any type
//      */
//     export function NullOrUndefinedOrEmpty(value: any): boolean {
//         return !Is.NullOrUndefinedOrEmpty(value);
//     }
//
// }

```typescript
export declare class Is {
    /**
     *
     * @param value is any type
     */
    static null(value: any): boolean;
    /**
     *
     * @param value is any type
     */
    static notNull(value: any): boolean;
    /**
     *
     * @param value is any type
     */
    static undefined(value: any): boolean;
    /**
     *
     * @param value is any type
     */
    static notUndefined(value: any): boolean;
    /**
     *
     * @param value is any type
     */
    static nullOrUndefined(value: any): boolean;
    /**
     *
     * @param value is any type
     */
    static notNullOrUndefined(value: any): boolean;
    /**
     *
     * @param value is any type
     */
    static number(value: any): boolean;
    /**
     *
     * @param value is any type
     */
    static notNumber(value: any): boolean;
    /**
     * TODO add test
     * @param value is any type
     */
    static universalEmptyChecker(value: any): boolean;
    /**
     * TODO add test
     * @param value is object type
     */
    static emptyObject(value: object): boolean;
    /**
     * TODO add test
     * @param value is object type
     */
    static notEmptyObject(value: object): boolean;
    /**
     * TODO add test
     * @param value is string type
     */
    static emptyString(value: string): boolean;
    /**
     * TODO add test
     * @param value is string type
     */
    static notEmptyString(value: string): boolean;
    /**
     * TODO add test
     * @param value is any type
     */
    static nullOrUndefinedOrEmpty(value: any): boolean;
    /**
     * TODO add test
     * @param value is any type
     */
    static notNullOrUndefinedOrEmpty(value: any): boolean;
    /**
     * TODO add test
     * @param enabled is boolean type
     */
    static notFalse(enabled: boolean): boolean;
    /**
     * TODO add test
     * @param objectOne is generic type
     * @param objectTwo is generic type
     */
    static notCompare<T>(objectOne: T, objectTwo: T): boolean;
    /**
     * TODO add test
     * @param objectOne is generic type
     * @param objectTwo is generic type
     */
    static compare<T>(objectOne: T, objectTwo: T): boolean;
}


```
