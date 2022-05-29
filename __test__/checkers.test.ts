import {Is} from "../lib";


describe('Testing Is. and Is.Not', () => {

    const arrWithDataToTest: any[] = [null, undefined, 'null', 'undefined', 'test'];

    // isNull

    it('Is.null should be true', () => {
        expect(Is.Null(arrWithDataToTest[0])).toBe(true);
    });

    it('Is.null should be true ("null")', () => {
        expect(Is.Null(arrWithDataToTest[2])).toBe(true);
    });

    it('Is.null should be false ("unknown")', () => {
        expect(Is.Null("unknown")).toBe(false);
    });

    // Is.Not.Null

    it('Is.Not.Null should be false for null', () => {
        expect(Is.Not.Null(arrWithDataToTest[0])).toBe(false);
    });

    it('Is.Not.Null should be false for "null"', () => {
        expect(Is.Not.Null(arrWithDataToTest[2])).toBe(false);
    });

    it('Is.Not.Null should be true for "unknown"', () => {
        expect(Is.Not.Null("unknown")).toBe(true);
    });

    // isUndefined

    it('Is.undefined should be true', () => {
        expect(Is.Undefined(arrWithDataToTest[1])).toBe(true);
    });

    it('Is.undefined should be true ("undefined")', () => {
        expect(Is.Undefined(arrWithDataToTest[3])).toBe(true);
    });

    it('Is.undefined should be false ("unknown")', () => {
        expect(Is.Undefined("unknown")).toBe(false);
    });

    // isNullOrUndefined

    it('Is.nullOrUndefined should be true (null)', () => {
        expect(Is.NullOrUndefined(arrWithDataToTest[0])).toBe(true);
    });

    it('Is.nullOrUndefined should be true (undefined)', () => {
        expect(Is.NullOrUndefined(arrWithDataToTest[1])).toBe(true);
    });

    it('Is.nullOrUndefined should be true ("null")', () => {
        expect(Is.NullOrUndefined(arrWithDataToTest[2])).toBe(true);
    });

    it('Is.nullOrUndefined should be true ("undefined")', () => {
        expect(Is.NullOrUndefined(arrWithDataToTest[3])).toBe(true);
    });

    //isNotNullOrUndefined

    it('Is.Not.NullOrUndefined should be false (null)', () => {
        expect(Is.Not.NullOrUndefined(arrWithDataToTest[0])).toBe(false);
    });

    it('Is.Not.NullOrUndefined should be false (undefined)', () => {
        expect(Is.Not.NullOrUndefined(arrWithDataToTest[1])).toBe(false);
    });

    it('Is.Not.NullOrUndefined should be false ("null")', () => {
        expect(Is.Not.NullOrUndefined(arrWithDataToTest[2])).toBe(false);
    });

    it('Is.Not.NullOrUndefined should be false ("undefined")', () => {
        expect(Is.Not.NullOrUndefined(arrWithDataToTest[3])).toBe(false);
    });

    // isNumber

    it('Is.number should be true (0)', () => {
        expect(Is.Number(0)).toBe(true);
    });

    it('Is.number should be false ("0")', () => {
        expect(Is.Number("0")).toBe(false);
    });

    // isNotNumber

    it('Is.Not.Number should be false (NaN)', () => {
        expect(Is.Not.Number(NaN)).toBe(true);
    });

    it('Is.Not.Number should be false (0)', () => {
        expect(Is.Not.Number(0)).toBe(false);
    });

    it('Is.Not.Number should be true ("0")', () => {
        expect(Is.Not.Number("0")).toBe(true);
    });

    // Is.Array

    it('Is.Array should be true for []', () => {
        expect(Is.Array([])).toBe(true);
    });

    // Is.Not.Array

    it('Is.Not.Array should be false for {}', () => {
        expect(Is.Not.Array({})).toBe(true);
    });

    // Is.Object

    it('Is.Object should be true for {}', () => {
        expect(Is.Object({})).toBe(true);
    });

    // Is.Not.Object

    it('Is.Not.Object should be false for []', () => {
        expect(Is.Not.Object([])).toBe(true);
    });

    // Is.Boolean

    it('Is.Boolean should be true for {}', () => {
        expect(Is.Boolean(true)).toBe(true);
    });

    // Is.Not.Boolean

    it('Is.Not.Boolean should be false for []', () => {
        expect(Is.Not.Boolean(0)).toBe(true);
    });

    // Is.String

    it('Is.String should be true for {}', () => {
        expect(Is.String('')).toBe(true);
    });

    // Is.Not.String

    it('Is.Not.String should be false for []', () => {
        expect(Is.Not.String(0)).toBe(true);
    });

});
