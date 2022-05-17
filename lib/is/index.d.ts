import { MethodsInterface } from './methods';
/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.True(value);
 * If you need check if true is not true just use this: Is.Not.True(value);
 */
export declare const Is: {
    Not: MethodsInterface;
    Compare: Function;
    EmptyObject: Function;
    EmptyString: Function;
    False: Function;
    Null: Function;
    NullOrUndefined: Function;
    NullOrUndefinedOrEmpty: Function;
    Number: Function;
    True: Function;
    Undefined: Function;
    UniversalEmptyChecker: Function;
};
