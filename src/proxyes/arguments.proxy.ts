import {Methods, MethodsGenericInterface} from '../methods';
import {BuildNot} from './not.proxy';
import {ConvertTool} from '../tools/convert.tool';

export enum TypeOfErrorEnum {
    IGNORE,
    THROW,
    CONSOLE,
}

const ArgumentHandler: any = {

    apply(fun: any, thisArg: any, argumentList: any[]) {

        // Not use thisArg
        // Not use argumentList
        console.log('fun', fun, 'thisArg', thisArg, 'argumentList', argumentList);

        return (target: object, propertyKey: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor => {

            // Not use target
            // Not use propertyKey
            // Not use propertyKey
            console.log('target', target, 'propertyKey', propertyKey, 'descriptor', descriptor);

            const originalMethod: any = descriptor.value;

            descriptor.value = function (...args: any[]) {

                // TODO
                console.log('fun(...args)', fun(...args), args);
                if (fun(...args)) {
                    return originalMethod.apply(this, args);
                }
                createErrorMessage(`Count and length of args is not correct!`, TypeOfErrorEnum.THROW);

            };

            return descriptor;

        };

    },

};


/**
 *
 * @param message is string, write you custom message
 * @param typeOfError choice your method showing of error
 */
function createErrorMessage(message: string = 'Error', typeOfError: TypeOfErrorEnum) {
    if (typeOfError) {
        switch (typeOfError) {
            case TypeOfErrorEnum.THROW:
                throw new Error(message);
            case TypeOfErrorEnum.CONSOLE:
                console.assert(false, message);
                break;
        }
    }
}

export type ArgumentsType = MethodsGenericInterface<any> & {
    Not: MethodsGenericInterface<any>;
};

const allMethods: MethodsGenericInterface<(configuration?: any) => any> = ConvertTool.ToProxy.getResult<MethodsGenericInterface<any>>(ArgumentHandler, Methods as MethodsGenericInterface<any>);

/**
 * Init const for reverse result of boolean.
 */
export const Arguments: ArgumentsType = {
    ...allMethods,
    Not: ConvertTool.ToProxy.getResult<MethodsGenericInterface<any>>(ArgumentHandler, BuildNot(Methods as MethodsGenericInterface<any>)),
};
