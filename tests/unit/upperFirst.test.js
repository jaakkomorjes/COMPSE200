import { expect } from 'chai';
import upperFirst from '../../src/upperFirst.js';

describe('upperFirst function', () => {
    it('should convert the first character of a string to upper case', () => {
      expect(upperFirst('fred')).to.equal('Fred');
      expect(upperFirst('FRED')).to.equal('FRED');
    });
  
    it('should handle an empty string', () => {
      expect(upperFirst('')).to.equal('');
    });
  
    it('should handle a single character string', () => {
      expect(upperFirst('f')).to.equal('F');
      expect(upperFirst('F')).to.equal('F');
    });
  
    it('should handle non-alphabetic characters', () => {
      expect(upperFirst('1fred')).to.equal('1fred');
      expect(upperFirst('!fred')).to.equal('!fred');
    });
  
    it('should handle strings with leading whitespace', () => {
      expect(upperFirst(' fred')).to.equal(' fred');
    });
  });