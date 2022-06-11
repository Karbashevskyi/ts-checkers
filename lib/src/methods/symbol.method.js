"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolMethod = void 0;
/**
 *
 * @param value is any type
 */
function SymbolMethod(value) {
    return typeof value === 'symbol';
}
exports.SymbolMethod = SymbolMethod;
