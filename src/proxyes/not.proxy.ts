import { MethodsInterface } from '../methods';
import { ConvertTool } from '../tools/convert.tool';

/**
 * Handler for reverse boolean result.
 */
const NotHandler: any = {
  apply(target: any, thisArg: any, args: any) {
    return !target(...args);
  },
};

/**
 * Init const for reverse result of boolean.
 */
export const BuildNot = (methods: MethodsInterface) => {
  return ConvertTool.ToProxy.getResult<MethodsInterface>(NotHandler, methods);
};
