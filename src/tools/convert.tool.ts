class ToProxy {

    // TODO check all arguments
    public static getResult<T>(handler: any, methods: any): T {

        return Object.keys(methods)
            .map((key: string) => {

                const proxy: ProxyConstructor = new Proxy(methods[key], handler);
                return {
                    [key]: proxy
                };

            })
            .reduce((object: { [p: string]: any }, item: { [p: string]: any }) => {

                return Object.assign(object, item);

            }, {}) as T;

    }

}

export const ConvertTool = {
    ToProxy
}
