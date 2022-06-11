"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.All = void 0;
const methods_1 = require("../methods");
const not_proxy_1 = require("./not.proxy");
const convert_tool_1 = require("../tools/convert.tool");
/**
 * Handler for reverse boolean result.
 * Is.All.BooleanMethod([true, true, 0], [true, [false]]); // Is false
 */
const AllHandler = {
    apply(target, thisArg, argumentList) {
        const execute = (...args) => {
            return args.every((argument) => {
                if (Array.isArray(argument) && (argument === null || argument === void 0 ? void 0 : argument.length)) {
                    return execute(...argument);
                }
                return target(argument);
            });
        };
        return execute(...argumentList);
    },
};
const allMethods = convert_tool_1.ConvertTool.ToProxy.getResult(AllHandler, methods_1.Methods);
/**
 * Init const for reverse result of boolean.
 */
exports.All = Object.assign(Object.assign({}, allMethods), { Not: (0, not_proxy_1.BuildNot)(allMethods) });
