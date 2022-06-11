"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertTool = void 0;
class ToProxy {
    // TODO check all arguments
    static getResult(handler, methods) {
        return Object.keys(methods)
            .map((key) => {
            const proxy = new Proxy(methods[key], handler);
            return {
                [key]: proxy
            };
        })
            .reduce((object, item) => {
            return Object.assign(object, item);
        }, {});
    }
}
exports.ConvertTool = {
    ToProxy
};
