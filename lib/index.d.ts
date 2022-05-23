import { MethodsInterface } from './methods';
export declare type IsType = MethodsInterface & {
    Not: MethodsInterface;
};
/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.True(value);
 * If you need check if true is not true just use this: Is.Not.True(value);
 */
export declare const Is: IsType;
