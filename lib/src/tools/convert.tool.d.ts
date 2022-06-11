declare class ToProxy {
    static getResult<T>(handler: any, methods: any): T;
}
export declare const ConvertTool: {
    ToProxy: typeof ToProxy;
};
export {};
