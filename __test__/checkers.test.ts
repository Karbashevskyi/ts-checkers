import {isNotNullOrUndefined, isNull, isNullOrUndefined, isNumber, isUndefined} from "../lib";
import {isNotNumber} from "../src";

describe('Testing of decorator check-arguments', () => {

    const arrWithDataToTest: any[] = [null, undefined, 'null', 'undefined', 'test'];

    // isNull

    it('isNull should be true', () => {
        expect(isNull(arrWithDataToTest[0])).toBe(true);
    });

    it('isNull should be true ("null")', () => {
        expect(isNull(arrWithDataToTest[2])).toBe(true);
    });

    it('isNull should be false ("unknown")', () => {
        expect(isNull("unknown")).toBe(false);
    });

    // isUndefined

    it('isUndefined should be true', () => {
        expect(isUndefined(arrWithDataToTest[1])).toBe(true);
    });

    it('isUndefined should be true ("undefined")', () => {
        expect(isUndefined(arrWithDataToTest[3])).toBe(true);
    });

    it('isUndefined should be false ("unknown")', () => {
        expect(isUndefined("unknown")).toBe(false);
    });

    // isNullOrUndefined

    it('isNullOrUndefined should be true (null)', () => {
        expect(isNullOrUndefined(arrWithDataToTest[0])).toBe(true);
    });

    it('isNullOrUndefined should be true (undefined)', () => {
        expect(isNullOrUndefined(arrWithDataToTest[1])).toBe(true);
    });

    it('isNullOrUndefined should be true ("null")', () => {
        expect(isNullOrUndefined(arrWithDataToTest[2])).toBe(true);
    });

    it('isNullOrUndefined should be true ("undefined")', () => {
        expect(isNullOrUndefined(arrWithDataToTest[3])).toBe(true);
    });

    //isNotNullOrUndefined

    it('isNotNullOrUndefined should be false (null)', () => {
        expect(isNotNullOrUndefined(arrWithDataToTest[0])).toBe(false);
    });

    it('isNotNullOrUndefined should be false (undefined)', () => {
        expect(isNotNullOrUndefined(arrWithDataToTest[1])).toBe(false);
    });

    it('isNotNullOrUndefined should be false ("null")', () => {
        expect(isNotNullOrUndefined(arrWithDataToTest[2])).toBe(false);
    });

    it('isNotNullOrUndefined should be false ("undefined")', () => {
        expect(isNotNullOrUndefined(arrWithDataToTest[3])).toBe(false);
    });

    // isNumber

    it('isNumber should be true (0)', () => {
        expect(isNumber(0)).toBe(true);
    });

    it('isNumber should be false ("0")', () => {
        expect(isNumber("0")).toBe(false);
    });

    // isNotNumber

    it('isNotNumber should be false (0)', () => {
        expect(isNotNumber(0)).toBe(false);
    });

    it('isNotNumber should be true ("0")', () => {
        expect(isNotNumber("0")).toBe(true);
    });

});
