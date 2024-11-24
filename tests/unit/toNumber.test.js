import { expect } from 'chai';
import toNumber from '../../src/toNumber.js';


describe('toNumber function', () => {
    it('should convert a number to itself', () => {
      expect(toNumber(3.2)).to.equal(3.2);
      expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
      expect(toNumber(Infinity)).to.equal(Infinity);
    });
  
    it('should convert a string to a number', () => {
      expect(toNumber('3.2')).to.equal(3.2);
      expect(toNumber('0b101')).to.equal(5);
      expect(toNumber('0o10')).to.equal(8);
      expect(toNumber('0x1f')).to.equal(31);
    });
  
    it('should return NaN for invalid numbers', () => {
      expect(toNumber('abc')).to.be.NaN;
      expect(toNumber('0x')).to.be.NaN;
      expect(toNumber(Symbol('symbol'))).to.be.NaN;
    });
  
    it('should convert objects to numbers if possible', () => {
      expect(toNumber({ valueOf: () => 3.2 })).to.equal(3.2);
      expect(toNumber({})).to.be.NaN;
    });
  
    it('should handle edge cases', () => {
      expect(toNumber(null)).to.equal(0);
      expect(toNumber(undefined)).to.be.NaN;
      expect(toNumber(true)).to.equal(1);
      expect(toNumber(false)).to.equal(0);
    });
  });