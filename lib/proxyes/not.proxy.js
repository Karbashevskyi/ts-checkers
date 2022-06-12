"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildNot = void 0;
const convert_tool_1 = require("../tools/convert.tool");
/**
 * Handler for reverse boolean result.
 */
const NotHandler = {
    apply(target, thisArg, args) {
        return !target(...args);
    },
};
/**
 * Init const for reverse result of boolean.
 */
const BuildNot = (methods) => {
    return convert_tool_1.ConvertTool.ToProxy.getResult(NotHandler, methods);
};
exports.BuildNot = BuildNot;
