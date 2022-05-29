import { CompareMethod } from './compare.method';
import { EmptyObjectMethod } from './empty-object.method';
import { EmptyStringMethod } from './empty-string.method';
import { FalseMethod } from './false.method';
import { NullMethod } from './null.method';
import { NullOrUndefinedMethod } from './null-or-undefined.method';
import { NullOrUndefinedOrEmptyMethod } from './null-or-undefined-or-empty.method';
import { NumberMethod } from './number.method';
import { TrueMethod } from './true.method';
import { UndefinedMethod } from './undefined.method';
import { UniversalEmptyCheckerMethod } from './universal-empty-checker.method';
import { ArrayMethod } from './array.method';
import { ObjectMethod } from './object.method';
import { StringMethod } from './string.method';
import { BooleanMethod } from './boolean.method';
import { SymbolMethod } from './symbol.method';
import { BigintMethod } from './bigint.method';
/**
 * Declare names and types of methods
 */
export interface MethodsInterface {
    Array: typeof ArrayMethod;
    BigInt: typeof BigintMethod;
    Boolean: typeof BooleanMethod;
    Compare: typeof CompareMethod;
    EmptyObject: typeof EmptyObjectMethod;
    EmptyString: typeof EmptyStringMethod;
    False: typeof FalseMethod;
    Null: typeof NullMethod;
    NullOrUndefined: typeof NullOrUndefinedMethod;
    NullOrUndefinedOrEmpty: typeof NullOrUndefinedOrEmptyMethod;
    Number: typeof NumberMethod;
    Object: typeof ObjectMethod;
    String: typeof StringMethod;
    Symbol: typeof SymbolMethod;
    True: typeof TrueMethod;
    Undefined: typeof UndefinedMethod;
    UniversalEmptyChecker: typeof UniversalEmptyCheckerMethod;
}
/**
 * Export all accesses methods in library
 */
export declare const Methods: MethodsInterface;
