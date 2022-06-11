import {MethodsInterface} from './methods';
import {AllType} from './proxyes/all.proxy';
import {ArgumentsType} from './proxyes/arguments.proxy';

export declare type IsType = MethodsInterface & {
    Not: MethodsInterface;
    All: AllType;
    Arguments: ArgumentsType;
};
/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.TrueMethod(value);
 * If you need check if true is not true just use this: Is.Not.TrueMethod(value);
 */
export declare const Is: IsType;
