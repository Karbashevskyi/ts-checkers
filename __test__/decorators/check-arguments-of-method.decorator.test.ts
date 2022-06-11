import {Model} from '../../mock/models/model';

describe('Testing of decorator check-arguments', () => {

    let testClass: Model;

    const arrWithDataToTest: any[] = [null, undefined, 'null', 'undefined', 'test'];

    beforeAll(() => {
        testClass = new Model();
    });

    it('testSay', () => {
        // @ts-ignore
        expect(testClass.testSay('null', 'null')).toBe(null);
    });

    it('Argument of method testSay is empty!', () => {
        expect(() => {
            // @ts-ignore
            testClass.testSay('world')
        }).toThrow('Count and length of args is not correct!');
    });

});
