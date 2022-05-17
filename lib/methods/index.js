"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Methods = void 0;
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
/**
 * Export all accesses methods in library
 */
exports.Methods = {
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
