"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Is = void 0;
const methods_1 = require("./methods");
const not_proxy_1 = require("./proxyes/not.proxy");
const all_proxy_1 = require("./proxyes/all.proxy");
/**
 * Export all methods in Is object with Not object inside.
 * If you need check if true is true, just use this: Is.True(value);
 * If you need check if true is not true just use this: Is.Not.True(value);
 */
exports.Is = Object.assign(Object.assign({}, methods_1.Methods), { Not: not_proxy_1.Not,
    All: all_proxy_1.All });
