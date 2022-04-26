import {Is} from "../lib";


describe('Testing of decorator check-arguments', () => {

    const arrWithDataToTest: any[] = [null, undefined, 'null', 'undefined', 'test'];

    // isNull

    it('isNull should be true', () => {
        expect(Is.null(arrWithDataToTest[0])).toBe(true);
    });

    it('isNull should be true ("null")', () => {
        expect(Is.null(arrWithDataToTest[2])).toBe(true);
    });

    it('isNull should be false ("unknown")', () => {
        expect(Is.null("unknown")).toBe(false);
    });

    // isUndefined

    it('isUndefined should be true', () => {
        expect(Is.undefined(arrWithDataToTest[1])).toBe(true);
    });

    it('isUndefined should be true ("undefined")', () => {
        expect(Is.undefined(arrWithDataToTest[3])).toBe(true);
    });

    it('isUndefined should be false ("unknown")', () => {
        expect(Is.undefined("unknown")).toBe(false);
    });

    // isNullOrUndefined

    it('isNullOrUndefined should be true (null)', () => {
        expect(Is.nullOrUndefined(arrWithDataToTest[0])).toBe(true);
    });

    it('isNullOrUndefined should be true (undefined)', () => {
        expect(Is.nullOrUndefined(arrWithDataToTest[1])).toBe(true);
    });

    it('isNullOrUndefined should be true ("null")', () => {
        expect(Is.nullOrUndefined(arrWithDataToTest[2])).toBe(true);
    });

    it('isNullOrUndefined should be true ("undefined")', () => {
        expect(Is.nullOrUndefined(arrWithDataToTest[3])).toBe(true);
    });

    //isNotNullOrUndefined

    it('isNotNullOrUndefined should be false (null)', () => {
        expect(Is.notNullOrUndefined(arrWithDataToTest[0])).toBe(false);
    });

    it('isNotNullOrUndefined should be false (undefined)', () => {
        expect(Is.notNullOrUndefined(arrWithDataToTest[1])).toBe(false);
    });

    it('isNotNullOrUndefined should be false ("null")', () => {
        expect(Is.notNullOrUndefined(arrWithDataToTest[2])).toBe(false);
    });

    it('isNotNullOrUndefined should be false ("undefined")', () => {
        expect(Is.notNullOrUndefined(arrWithDataToTest[3])).toBe(false);
    });

    // isNumber

    it('isNumber should be true (0)', () => {
        expect(Is.number(0)).toBe(true);
    });

    it('isNumber should be false ("0")', () => {
        expect(Is.number("0")).toBe(false);
    });

    // isNotNumber

    it('isNotNumber should be false (0)', () => {
        expect(Is.notNumber(0)).toBe(false);
    });

    it('isNotNumber should be true ("0")', () => {
        expect(Is.notNumber("0")).toBe(true);
    });

});
