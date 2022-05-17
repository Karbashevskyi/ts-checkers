import { MethodsInterface } from './methods';
/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.True(value);
 * If you need check if true is not true just use this: Is.Not.True(value);
 */
export declare const Is: {
    Not: MethodsInterface;
    Compare: typeof import("./methods/compare").Compare;
    EmptyObject: typeof import("./methods/empty-object").EmptyObject;
    EmptyString: typeof import("./methods/empty-string").EmptyString;
    False: typeof import("./methods/false").False;
    Null: typeof import("./methods/null").Null;
    NullOrUndefined: typeof import("./methods/null-or-undefined").NullOrUndefined;
    NullOrUndefinedOrEmpty: typeof import("./methods/null-or-undefined-or-empty").NullOrUndefinedOrEmpty;
    Number: typeof import("./methods/number").Number;
    True: typeof import("./methods/true").True;
    Undefined: typeof import("./methods/undefined").Undefined;
    UniversalEmptyChecker: typeof import("./methods/universal-empty-checker").UniversalEmptyChecker;
};
