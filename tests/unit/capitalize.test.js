import { expect } from 'chai';
import capitalize from '../../src/capitalize.js';

describe('capitalize function', () => {
  it('should capitalize a lowercase word', () => {
    expect(capitalize('hello')).to.equal('Hello');
  });

  it('should capitalize an uppercase word', () => {
    expect(capitalize('WORLD')).to.equal('World');
  });

  it('should handle mixed-case words', () => {
    expect(capitalize('jAvAsCrIpT')).to.equal('Javascript');
  });

  it('should handle a single lowercase character', () => {
    expect(capitalize('a')).to.equal('A');
  });

  it('should handle a single uppercase character', () => {
    expect(capitalize('B')).to.equal('B');
  });

  it('should return an empty string when given an empty string', () => {
    expect(capitalize('')).to.equal('');
  });

  it('should handle strings with spaces', () => {
    expect(capitalize(' hello')).to.equal(' hello'); 
    expect(capitalize('hello world')).to.equal('Hello world'); 
  });

  it('should handle non-string input types', () => {
    expect(capitalize(123)).to.equal('123'); 
    expect(capitalize(null)).to.equal(''); // `null` becomes an empty string
    expect(capitalize(undefined)).to.equal(''); 
  });

  it('should handle special characters', () => {
    expect(capitalize('!exclamation')).to.equal('!exclamation');
  });

  it('should handle already capitalized words', () => {
    expect(capitalize('Fred')).to.equal('Fred');
  });
});