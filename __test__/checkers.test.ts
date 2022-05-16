import {Is} from "../lib";


describe('Testing of decorator check-arguments', () => {

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

    // Is.notNull

    it('Is.notNull should be false for null', () => {
        expect(Is.Not.Null(arrWithDataToTest[0])).toBe(false);
    });

    it('Is.notNull should be false for "null"', () => {
        expect(Is.Not.Null(arrWithDataToTest[2])).toBe(false);
    });

    it('Is.notNull should be true for "unknown"', () => {
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

    it('Is.notNullOrUndefined should be false (null)', () => {
        expect(Is.Not.NullOrUndefined(arrWithDataToTest[0])).toBe(false);
    });

    it('Is.notNullOrUndefined should be false (undefined)', () => {
        expect(Is.Not.NullOrUndefined(arrWithDataToTest[1])).toBe(false);
    });

    it('Is.notNullOrUndefined should be false ("null")', () => {
        expect(Is.Not.NullOrUndefined(arrWithDataToTest[2])).toBe(false);
    });

    it('Is.notNullOrUndefined should be false ("undefined")', () => {
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

    it('Is.notNumber should be false (0)', () => {
        expect(Is.Not.Number(0)).toBe(false);
    });

    it('Is.notNumber should be true ("0")', () => {
        expect(Is.Not.Number("0")).toBe(true);
    });

});
