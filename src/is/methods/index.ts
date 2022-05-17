import {Compare} from './compare';
import {EmptyObject} from './empty-object';
import {EmptyString} from './empty-string';
import {False} from './false';
import {Null} from './null';
import {NullOrUndefined} from './null-or-undefined';
import {NullOrUndefinedOrEmpty} from './null-or-undefined-or-empty';
import {Number} from './number';
import {True} from './true';
import {Undefined} from './undefined';
import {UniversalEmptyChecker} from './universal-empty-checker';

/**
 * Declare names and types of methods
 */
export interface MethodsInterface {
    Compare: Function;
    EmptyObject: Function;
    EmptyString: Function;
    False: Function;
    Null: Function;
    NullOrUndefined: Function;
    NullOrUndefinedOrEmpty: Function;
    Number: Function;
    True: Function;
    Undefined: Function;
    UniversalEmptyChecker: Function;
}

/**
 * Export all accesses methods in library
 */
export const Methods: MethodsInterface = {
    Compare,
    EmptyObject,
    EmptyString,
    False,
    Null,
    NullOrUndefined,
    NullOrUndefinedOrEmpty,
    Number,
    True,
    Undefined,
    UniversalEmptyChecker,
};
