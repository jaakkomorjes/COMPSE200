import { expect } from 'chai';
import filter from '../../src/filter.js'; 

describe('filter function', () => {
    it('should filter array elements based on the predicate', () => {
      const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
      ];
  
      const result = filter(users, ({ active }) => active);
      expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
    });
  
    it('should return an empty array if no elements match the predicate', () => {
      const users = [
        { 'user': 'barney', 'active': false },
        { 'user': 'fred', 'active': false }
      ];
  
      const result = filter(users, ({ active }) => active);
      expect(result).to.deep.equal([ [ ] ]);
    });
  
    it('should handle an empty array', () => {
      const result = filter([], ({ active }) => active);
      expect(result).to.deep.equal([ [ ] ]);
    });
  
    it('should handle different types of predicates', () => {
      const numbers = [1, 2, 3, 4, 5];
      const result = filter(numbers, n => n % 2 === 0);
      expect(result).to.deep.equal([2, 4]);
    });
  
    it('should handle null or undefined arrays', () => {
      expect(filter(null, ({ active }) => active)).to.deep.equal([ [ ] ]);
      expect(filter(undefined, ({ active }) => active)).to.deep.equal([ [ ] ]);
    });
  });