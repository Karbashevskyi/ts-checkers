import {Methods, MethodsInterface} from './methods';
import {BuildNot} from './proxyes/not.proxy';
import {All, AllType} from './proxyes/all.proxy';
import {Arguments, ArgumentsType} from './proxyes/arguments.proxy';

export type IsType = MethodsInterface & {
    Not: MethodsInterface;
    All: AllType;
    Arguments: ArgumentsType;
};

/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.TrueMethod(value);
 * If you need check if true is not true just use this: Is.Not.TrueMethod(value);
 */
export const Is: IsType = {
    ...Methods,
    Not: BuildNot(Methods),
    All,
    Arguments,
};
