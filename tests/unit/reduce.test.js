import { expect } from 'chai';
import reduce from '../../src/reduce.js'; 

describe('reduce function', () => {

  it('should sum up numbers in an array', () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);
    expect(result).to.equal(10);
  });

  it('should handle arrays with an initial value not provided', () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n);
    expect(result).to.equal(10); 
  });

  it('should iterate over an object and return the correct accumulated result', () => {
    const result = reduce({ a: 1, b: 2, c: 1 }, (acc, value, key) => {
      (acc[value] || (acc[value] = [])).push(key);
      return acc;
    }, {});
    expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
  });

  it('should handle objects without an initial value provided', () => {
    const result = reduce({ a: 1, b: 2 }, (acc, value) => acc + value);
    expect(result).to.equal(3); 
  });

  it('should return the initial value when the collection is empty', () => {
    const result = reduce([], (sum, n) => sum + n, 0);
    expect(result).to.equal(0);

    const objResult = reduce({}, (sum, n) => sum + n, 5);
    expect(objResult).to.equal(5);
  });

  it('should return undefined if the collection is empty and no initial value is provided', () => {
    const result = reduce([], (sum, n) => sum + n);
    expect(result).to.equal(undefined);

    const objResult = reduce({}, (sum, n) => sum + n);
    expect(objResult).to.equal(undefined);
  });

  it('should handle string concatenation with arrays', () => {
    const result = reduce(['a', 'b', 'c'], (str, char) => str + char, '');
    expect(result).to.equal('abc');
  });

  it('should handle mixed types in the array', () => {
    const result = reduce([1, 'a', true, 2], (acc, val) => acc + String(val), '');
    expect(result).to.equal('1atrue2');
  });

  it('should gracefully handle null or undefined as the collection', () => {
    expect(reduce(null, (sum, n) => sum + n, 0)).to.equal(0);
    expect(reduce(undefined, (sum, n) => sum + n, 0)).to.equal(0);
  });

});
