"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Is = void 0;
const compare_1 = require("./compare");
const empty_object_1 = require("./empty-object");
const empty_string_1 = require("./empty-string");
const false_1 = require("./false");
const null_1 = require("./null");
const null_or_undefined_1 = require("./null-or-undefined");
const null_or_undefined_or_empty_1 = require("./null-or-undefined-or-empty");
const number_1 = require("./number");
const true_1 = require("./true");
const undefined_1 = require("./undefined");
const universal_empty_checker_1 = require("./universal-empty-checker");
// export enum MethodEnum {
//     Compare,
//     EmptyObject,
//     EmptyString,
//     False,
//     Null,
//     NullOrUndefined,
//     NullOrUndefinedOrEmpty,
//     Number,
//     True,
//     Undefined,
//     UniversalEmptyChecker,
// }
const Methods = {
    Compare: compare_1.Compare,
    EmptyObject: empty_object_1.EmptyObject,
    EmptyString: empty_string_1.EmptyString,
    False: false_1.False,
    Null: null_1.Null,
    NullOrUndefined: null_or_undefined_1.NullOrUndefined,
    NullOrUndefinedOrEmpty: null_or_undefined_or_empty_1.NullOrUndefinedOrEmpty,
    Number: number_1.Number,
    True: true_1.True,
    Undefined: undefined_1.Undefined,
    UniversalEmptyChecker: universal_empty_checker_1.UniversalEmptyChecker,
};
const NotHandler = {
    apply(target, thisArg, args) {
        console.log(`Property ${thisArg} has been read.`, target, args);
        return !target(...args);
    }
};
// const NotHandler = {
//     // apply(target: any, thisArg: any, args: any) {
//     //     console.log(`Property ${thisArg} has been read.`, target, args);
//     //     return target(...args);
//     // }
//     // get(target: any, prop: any, receiver: any) {
//     //     console.log(`Property ${prop} has been read.`, target, receiver);
//     //     if (prop === "message2") {
//     //         return "world";
//     //     }
//     //     return !Reflect.get(target, prop, receiver);
//     // },
//     get(target: any, property: any) {
//         return new Proxy(target[property], {
//             apply(target: any, thisArg: any, args: any) {
//                 console.log(`Property ${thisArg} has been read.`, target, args);
//                 return !target(...args);
//             }
//         });
//     }
// }
exports.Is = Object.assign(Object.assign({}, Methods), { Not: Object.fromEntries(Object.keys(Methods).map((key) => [key, new Proxy(Methods[key], NotHandler)])) });
// Object.keys(Is.Not).forEach((key) => {
//     Is.Not.Null = new Proxy(Is.Not.Null, NotHandler);
// });
//
// Is.Not.Null(null);
// export class Is {
//
//     static Compare: typeof Compare = Compare;
//     static EmptyObject: typeof EmptyObject = EmptyObject;
//     static EmptyString: typeof EmptyString = EmptyString;
//     static False: typeof False = False;
//     static Null: typeof Null = Null;
//     static NullOrUndefined: typeof NullOrUndefined = NullOrUndefined;
//     static NullOrUndefinedOrEmpty: typeof NullOrUndefinedOrEmpty = NullOrUndefinedOrEmpty;
//     static Number: typeof Number = Number;
//     static True: typeof True = True;
//     static Undefined: typeof Undefined = Undefined;
//     static UniversalEmptyChecker: typeof UniversalEmptyChecker = UniversalEmptyChecker;
//
//     static get Not(): unknown {
//         return ;
//     }
//
// }
