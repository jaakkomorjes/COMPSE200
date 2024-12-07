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
    expect(result).equal({ 'true': 2, 'false': 1 });
  });

  it('should handle an empty collection', () => {
    const result = countBy([], value => value.active);
    expect(Object.keys(result)).to.have.lengthOf(0);;
  });

  it('should count by a different iteratee', () => {
    const items = [
      { 'type': 'fruit', 'name': 'apple' },
      { 'type': 'fruit', 'name': 'banana' },
      { 'type': 'vegetable', 'name': 'carrot' }
    ];

    const result = countBy(items, value => value.type);
    expect(result).equal({ 'fruit': 2, 'vegetable': 1 });
  });

  it('should handle non-boolean iteratee results', () => {
    const numbers = [1, 2, 3, 4, 5, 6];

    const result = countBy(numbers, value => value % 2 === 0 ? 'even' : 'odd');
    expect(result).equal({ 'odd': 3, 'even': 3 });
  });
});