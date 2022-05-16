import { Compare } from './compare';
import { EmptyObject } from './empty-object';
import { EmptyString } from './empty-string';
import { False } from './false';
import { Null } from './null';
import { NullOrUndefined } from './null-or-undefined';
import { NullOrUndefinedOrEmpty } from './null-or-undefined-or-empty';
import { Number } from './number';
import { True } from './true';
import { Undefined } from './undefined';
import { UniversalEmptyChecker } from './universal-empty-checker';
export declare const Is: {
    Not: {
        [k: string]: any;
    };
    Compare: typeof Compare;
    EmptyObject: typeof EmptyObject;
    EmptyString: typeof EmptyString;
    False: typeof False;
    Null: typeof Null;
    NullOrUndefined: typeof NullOrUndefined;
    NullOrUndefinedOrEmpty: typeof NullOrUndefinedOrEmpty;
    Number: typeof Number;
    True: typeof True;
    Undefined: typeof Undefined;
    UniversalEmptyChecker: typeof UniversalEmptyChecker;
};
