import {Is} from "../lib";


describe('Testing of decorator check-arguments', () => {

    const arrWithDataToTest: any[] = [null, undefined, 'null', 'undefined', 'test'];

    // isNull

    it('Is.null should be true', () => {
        expect(Is.null(arrWithDataToTest[0])).toBe(true);
    });

    it('Is.null should be true ("null")', () => {
        expect(Is.null(arrWithDataToTest[2])).toBe(true);
    });

    it('Is.null should be false ("unknown")', () => {
        expect(Is.null("unknown")).toBe(false);
    });

    // isUndefined

    it('Is.undefined should be true', () => {
        expect(Is.undefined(arrWithDataToTest[1])).toBe(true);
    });

    it('Is.undefined should be true ("undefined")', () => {
        expect(Is.undefined(arrWithDataToTest[3])).toBe(true);
    });

    it('Is.undefined should be false ("unknown")', () => {
        expect(Is.undefined("unknown")).toBe(false);
    });

    // isNullOrUndefined

    it('Is.nullOrUndefined should be true (null)', () => {
        expect(Is.nullOrUndefined(arrWithDataToTest[0])).toBe(true);
    });

    it('Is.nullOrUndefined should be true (undefined)', () => {
        expect(Is.nullOrUndefined(arrWithDataToTest[1])).toBe(true);
    });

    it('Is.nullOrUndefined should be true ("null")', () => {
        expect(Is.nullOrUndefined(arrWithDataToTest[2])).toBe(true);
    });

    it('Is.nullOrUndefined should be true ("undefined")', () => {
        expect(Is.nullOrUndefined(arrWithDataToTest[3])).toBe(true);
    });

    //isNotNullOrUndefined

    it('Is.notNullOrUndefined should be false (null)', () => {
        expect(Is.notNullOrUndefined(arrWithDataToTest[0])).toBe(false);
    });

    it('Is.notNullOrUndefined should be false (undefined)', () => {
        expect(Is.notNullOrUndefined(arrWithDataToTest[1])).toBe(false);
    });

    it('Is.notNullOrUndefined should be false ("null")', () => {
        expect(Is.notNullOrUndefined(arrWithDataToTest[2])).toBe(false);
    });

    it('Is.notNullOrUndefined should be false ("undefined")', () => {
        expect(Is.notNullOrUndefined(arrWithDataToTest[3])).toBe(false);
    });

    // isNumber

    it('Is.number should be true (0)', () => {
        expect(Is.number(0)).toBe(true);
    });

    it('Is.number should be false ("0")', () => {
        expect(Is.number("0")).toBe(false);
    });

    // isNotNumber

    it('Is.notNumber should be false (0)', () => {
        expect(Is.notNumber(0)).toBe(false);
    });

    it('Is.notNumber should be true ("0")', () => {
        expect(Is.notNumber("0")).toBe(true);
    });

});
