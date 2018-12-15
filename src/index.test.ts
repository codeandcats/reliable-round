import { numberToString, round } from './';

describe('./src/lib/math.ts', () => {
  describe('round', () => {
    it('should default to rounding to whole integers', () => {
      expect(round(1.05)).toEqual(1);
      expect(round(1.4)).toEqual(1);
      expect(round(1.5)).toEqual(2);
      expect(round(99)).toEqual(99);
      expect(round(99.9)).toEqual(100);
    });

    it('should round to specified number of decimal places', () => {
      expect(round(0.0049, 2)).toEqual(0.00);
      expect(round(0.005, 2)).toEqual(0.01);
      expect(round(1.05, 2)).toEqual(1.05);
      expect(round(1.05, 1)).toEqual(1.1);
      expect(round(1.05, 0)).toEqual(1);
      expect(round(0.995, 0)).toEqual(1);
    });

    it('should round negative numbers', () => {
      expect(round(-1.05)).toEqual(-1);
      expect(round(-1.4)).toEqual(-1);
      expect(round(-1.5)).toEqual(-2);
      expect(round(-99)).toEqual(-99);
      expect(round(-99.9)).toEqual(-100);

      expect(round(-0.005, 2)).toEqual(-0.01);
      expect(round(-1.05, 2)).toEqual(-1.05);
      expect(round(-1.05, 1)).toEqual(-1.1);
      expect(round(-1.05, 0)).toEqual(-1);
      expect(round(-11607157.9249, 2)).toEqual(-11607157.92);
      expect(round(-11607157.925, 2)).toEqual(-11607157.93);
    });
  });

  describe('numberToString', () => {
    it('should return a number to a string', () => {
      expect(numberToString(0)).toEqual('0');
      expect(numberToString(123)).toEqual('123');
      expect(numberToString(-123)).toEqual('-123');
      expect(numberToString(123.456)).toEqual('123.456');
      expect(numberToString(123.456e10)).toEqual('1234560000000');
      expect(numberToString(123.456e10)).toEqual('1234560000000');
      expect(numberToString(123.456e-10)).toEqual('0.0000000123456');
      expect(numberToString(-123.456e-10)).toEqual('-0.0000000123456');
      expect(numberToString(123.456e20)).toEqual('12345600000000000000000');
    });
  });
});
