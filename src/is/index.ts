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

const Methods = {
    Compare: Compare,
    EmptyObject: EmptyObject,
    EmptyString: EmptyString,
    False: False,
    Null: Null,
    NullOrUndefined: NullOrUndefined,
    NullOrUndefinedOrEmpty: NullOrUndefinedOrEmpty,
    Number: Number,
    True: True,
    Undefined: Undefined,
    UniversalEmptyChecker: UniversalEmptyChecker,
};

const NotHandler: any = {
    apply(target: any, thisArg: any, args: any) {
        console.log(`Property ${thisArg} has been read.`, target, args);
        return !target(...args);
    }
};

const arrayOfProxy: any = Object.keys(Methods).map((key: string) => {
    const proxy: any = new Proxy((Methods as any)[key], NotHandler);
    return [key, proxy];
});

const Not: any = Object.fromEntries(arrayOfProxy);

export const Is = {
    ...Methods,
    Not
};
