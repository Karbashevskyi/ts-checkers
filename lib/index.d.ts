export declare class Is {
    /**
     * TODO add test
     * @param value is boolean type
     */
    static false(value: boolean): boolean;
    /**
     * TODO add test
     * @param value is boolean type
     */
    static notFalse(value: boolean): boolean;
    /**
     * TODO add test
     * @param value is boolean type
     */
    static true(value: boolean): boolean;
    /**
     * TODO add test
     * @param value is boolean type
     */
    static notTrue(value: boolean): boolean;
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
