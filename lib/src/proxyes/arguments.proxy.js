"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arguments = exports.TypeOfErrorEnum = void 0;
const methods_1 = require("../methods");
const not_proxy_1 = require("./not.proxy");
const convert_tool_1 = require("../tools/convert.tool");
var TypeOfErrorEnum;
(function (TypeOfErrorEnum) {
    TypeOfErrorEnum[TypeOfErrorEnum["IGNORE"] = 0] = "IGNORE";
    TypeOfErrorEnum[TypeOfErrorEnum["THROW"] = 1] = "THROW";
    TypeOfErrorEnum[TypeOfErrorEnum["CONSOLE"] = 2] = "CONSOLE";
})(TypeOfErrorEnum = exports.TypeOfErrorEnum || (exports.TypeOfErrorEnum = {}));
const ArgumentHandler = {
    apply(fun, thisArg, argumentList) {
        // Not use thisArg
        // Not use argumentList
        console.log('fun', fun, 'thisArg', thisArg, 'argumentList', argumentList);
        return (target, propertyKey, descriptor) => {
            // Not use target
            // Not use propertyKey
            // Not use propertyKey
            console.log('target', target, 'propertyKey', propertyKey, 'descriptor', descriptor);
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
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
function createErrorMessage(message = 'Error', typeOfError) {
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
const allMethods = convert_tool_1.ConvertTool.ToProxy.getResult(ArgumentHandler, methods_1.Methods);
/**
 * Init const for reverse result of boolean.
 */
exports.Arguments = Object.assign(Object.assign({}, allMethods), { Not: convert_tool_1.ConvertTool.ToProxy.getResult(ArgumentHandler, (0, not_proxy_1.BuildNot)(methods_1.Methods)) });
