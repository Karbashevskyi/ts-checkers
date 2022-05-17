"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Number = void 0;
/**
 *
 * @param value is any type
 */
function Number(value) {
    return typeof value === 'number' && !isNaN(value);
}
exports.Number = Number;
