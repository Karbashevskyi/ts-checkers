import {MethodsInterface} from '../methods';

export declare enum TypeOfErrorEnum {
    IGNORE = 0,
    THROW = 1,
    CONSOLE = 2
}
export declare type ArgumentsType = MethodsInterface & {
    Not: MethodsInterface;
};
/**
 * Init const for reverse result of boolean.
 */
export declare const Arguments: ArgumentsType;
