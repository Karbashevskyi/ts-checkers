# ts-checkers

```typescript
/**
 *
 * @param value
 */
declare function isNull(value: any): boolean;
/**
 *
 * @param value
 */
declare function isUndefined(value: any): boolean;
/**
 *
 * @param value
 */
declare function isNullOrUndefined(value: any): boolean;
/**
 *
 * @param value
 */
declare function isNotNullOrUndefined(value: any): boolean;
/**
 *
 * @param value
 */
declare function isNumber(value: any): boolean;
/**
 *
 * @param value
 */
declare function isMotNumber(value: any): boolean;
/**
 *
 * @param value
 */
declare function universalEmptyChecker(value: any): boolean;
/**
 *
 * @param value
 */
declare function isEmptyObject(value: object): boolean;
/**
 *
 * @param value
 */
declare function isNotEmptyObject(value: object): boolean;
/**
 *
 * @param value
 */
declare function isEmptyString(value: string): boolean;
/**
 *
 * @param value
 */
declare function isNotEmptyString(value: string): boolean;
/**
 *
 * @param value
 */
declare function isNullOrUndefinedOrEmpty(value: any): boolean;
/**
 *
 * @param value
 */
declare function isNotNullOrUndefinedOrEmpty(value: any): boolean;
/**
 *
 * @param enabled
 */
declare function isNotFalse(enabled: boolean): boolean;
/**
 *
 * @param objectOne
 * @param objectTwo
 */
declare function isNotCompare<T>(objectOne: T, objectTwo: T): boolean;
/**
 *
 * @param objectOne
 * @param objectTwo
 */
declare function isCompare<T>(objectOne: T, objectTwo: T): boolean;

```
