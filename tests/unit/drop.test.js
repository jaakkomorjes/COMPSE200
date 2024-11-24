import { expect } from 'chai';
import drop from '../../src/drop.js'; 

describe('drop function', () => {

  it('should drop the default 1 element from the beginning of the array', () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
  });

  it('should drop the specified number of elements', () => {
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
    expect(drop([1, 2, 3], 3)).to.deep.equal([]);
  });

  it('should return the full array if n is 0', () => {
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
  });

  it('should return an empty array if n is greater than the array length', () => {
    expect(drop([1, 2, 3], 5)).to.deep.equal([]);
  });

  it('should return an empty array for null or undefined input', () => {
    expect(drop(null)).to.deep.equal([]);
    expect(drop(undefined)).to.deep.equal([]);
  });

  it('should handle negative values of n gracefully (treated as 0)', () => {
    expect(drop([1, 2, 3], -1)).to.deep.equal([1, 2, 3]);
  });

  it('should handle non-integer n values by converting them to integers', () => {
    expect(drop([1, 2, 3], 1.7)).to.deep.equal([2, 3]); // n = 1
    expect(drop([1, 2, 3], '2')).to.deep.equal([3]);    // n = 2 (string converted)
  });

  it('should return an empty array if input is empty', () => {
    expect(drop([], 2)).to.deep.equal([]);
  });

  it('should work with arrays containing various data types', () => {
    expect(drop(['a', 1, { key: 'value' }], 1)).to.deep.equal([1, { key: 'value' }]);
  });
});
