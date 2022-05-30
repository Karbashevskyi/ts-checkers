export const dataForGoodTesting: {value: any[]}[] = [
    {
        value: [Symbol()]
    },
];

export const dataForBadTesting: {value: any[]}[] = [
    {
        value: ['undefined']
    },
    {
        value: [undefined]
    },
    {
        value: [true]
    },
    {
        value: [BigInt(1)]
    },
    {
        value: [false]
    },
    {
        value: [true, false]
    },
    {
        value: [false, true]
    },
    {
        value: ['null']
    },
    {
        value: [""]
    },
    {
        value: ['']
    },
    {
        value: [``]
    },
    {
        value: [{}]
    },
    {
        value: [0]
    },
    {
        value: [null]
    },
    {
        value: [[]]
    },
    {
        value: [Function]
    },
    {
        value: [() => {}]
    }
];

export const advancedDataForBadTesting: {value: any[]}[] = dataForBadTesting.map((object: {value: any[]}) => {
    return {
        value: [
            ...(dataForGoodTesting[dataForGoodTesting.length - 1].value),
            ...object.value,
        ]
    };
});
