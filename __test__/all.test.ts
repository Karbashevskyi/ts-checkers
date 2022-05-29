import {Is} from "../lib";


describe('Testing Is.All.', () => {

    const booleanArray: any[] = [true, false];
    const notBooleanArray: any[] = [...booleanArray, 0];
    const advancedBooleanArray: any[] = [true, false, booleanArray, [[booleanArray]]];
    const advancedNotBooleanArray: any[] = [...advancedBooleanArray, [[[0], '1', 'true', {}, []]]];

    // Is.BooleanMethod

    it('Is.BooleanMethod should be true for [true, false]', () => {
        expect(Is.All.Boolean(booleanArray)).toBe(true);
    });

    // Is.Not.BooleanMethod

    it('Is.All.Not.BooleanMethod should be false for [true, false, 0]', () => {
        expect(Is.All.Not.Boolean(notBooleanArray)).toBe(true);
    });

});
