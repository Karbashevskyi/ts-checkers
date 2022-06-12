import { Methods, MethodsInterface } from '../methods';
import { BuildNot } from './not.proxy';
import { ConvertTool } from '../tools/convert.tool';

type executeType = (...args: any[]) => boolean;

/**
 * Handler for reverse boolean result.
 * Is.All.BooleanMethod([true, true, 0], [true, [false]]); // Is false
 */
const AllHandler: any = {
  apply(target: any, thisArg: any, argumentList: any[]) {
    const execute: executeType = (...args: any[]): boolean => {
      return args.every((argument: any): boolean => {
        if (Array.isArray(argument) && argument?.length) {
          return execute(...argument);
        }
        return target(argument);
      });
    };

    return execute(...argumentList);
  },
};

export type AllType = MethodsInterface & {
  Not: MethodsInterface;
};

const allMethods: MethodsInterface = ConvertTool.ToProxy.getResult<MethodsInterface>(AllHandler, Methods);

/**
 * Init const for reverse result of boolean.
 */
export const All: AllType = {
  ...allMethods,
  Not: BuildNot(allMethods),
};
