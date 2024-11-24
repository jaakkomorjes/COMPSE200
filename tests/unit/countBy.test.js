import { expect } from 'chai';
import countBy from '../../src/countBy.js';

describe('countBy function', () => {
  it('should count by a given iteratee', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false }
    ];

    const result = countBy(users, value => value.active);
    expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
  });

  it('should handle an empty collection', () => {
    const result = countBy([], value => value.active);
    expect(result).to.deep.equal({});
  });

  it('should handle different types of iteratees', () => {
    const numbers = [6.1, 4.2, 6.3];
    const result = countBy(numbers, Math.floor);
    expect(result).to.deep.equal({ '4': 1, '6': 2 });
  });

  it('should handle objects as collections', () => {
    const users = {
      'a': { 'user': 'barney', 'active': true },
      'b': { 'user': 'betty', 'active': true },
      'c': { 'user': 'fred', 'active': false }
    };

    const result = countBy(users, value => value.active);
    expect(result).to.deep.equal({ 'true': 2, 'false': 1 });
  });
});