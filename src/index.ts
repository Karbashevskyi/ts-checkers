import { Methods, MethodsInterface } from './methods';
import {Not} from './proxyes/not.proxy';
import {All, AllType} from './proxyes/all.proxy';

export type IsType = MethodsInterface & {
  Not: MethodsInterface,
  All: AllType
};

/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.True(value);
 * If you need check if true is not true just use this: Is.Not.True(value);
 */
export const Is: IsType = {
  ...Methods,
  Not,
  All
};
