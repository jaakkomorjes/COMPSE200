import { expect } from 'chai';
import difference from '../../src/difference.js';

describe('difference function', () => {
  it('should return the difference of two arrays', () => {
    expect(difference([2, 1], [2, 3])).to.deep.equal([1]);
  });

  it('should return the original array if there are no matches in the second array', () => {
    expect(difference([1, 2, 3], [4, 5, 6])).to.deep.equal([1, 2, 3]);
  });

  it('should return an empty array if all elements match', () => {
    expect(difference([1, 2, 3], [1, 2, 3])).to.deep.equal([]);
  });

  it('should handle multiple "values" arrays correctly', () => {
    expect(difference([1, 2, 3, 4], [1, 2], [3])).to.deep.equal([4]);
  });

  it('should handle empty arrays as inputs', () => {
    expect(difference([], [1, 2, 3])).to.deep.equal([]);
    expect(difference([1, 2, 3], [])).to.deep.equal([1, 2, 3]);
    expect(difference([], [])).to.deep.equal([]);
  });

  it('should handle arrays with duplicate elements', () => {
    expect(difference([1, 2, 2, 3], [2])).to.deep.equal([1, 3]);
  });

  it('should handle non-array-like inputs gracefully', () => {
    expect(difference(null, [1, 2, 3])).to.deep.equal([]);
    expect(difference(undefined, [1, 2, 3])).to.deep.equal([]);
    expect(difference({}, [1, 2, 3])).to.deep.equal([]);
  });

  it('should handle nested arrays correctly', () => {
    expect(difference([1, [2, 3]], [[2, 3]])).to.deep.equal([1, [2, 3]]);
  });

  it('should handle mixed types in the array', () => {
    expect(difference([1, 'a', 3], [1, 3])).to.deep.equal(['a']);
    expect(difference([1, 'a', 3], ['a'])).to.deep.equal([1, 3]);
  });

  it('should handle deeply nested arrays if flattening is involved', () => {
    expect(difference([1, [2, [3, 4]]], [[3, 4]])).to.deep.equal([1, [2, [3, 4]]]);
  });
});
