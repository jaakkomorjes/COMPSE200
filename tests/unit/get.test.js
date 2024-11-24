import { expect } from 'chai';
import get from '../../src/get.js'; 

describe('get function', () => {

  it('should retrieve a value at a simple path', () => {
    const object = { a: 1 };
    expect(get(object, 'a')).to.equal(1);
  });

  it('should retrieve a value at a deep path', () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, 'a[0].b.c')).to.equal(3);
    expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
  });

  it('should return the default value if the path does not exist', () => {
    const object = { a: 1 };
    expect(get(object, 'b', 'default')).to.equal('default');
  });

  it('should return `undefined` if the path does not exist and no default value is provided', () => {
    const object = { a: 1 };
    expect(get(object, 'b')).to.equal(undefined);
  });

  it('should handle null or undefined object inputs gracefully', () => {
    expect(get(null, 'a', 'default')).to.equal('default');
    expect(get(undefined, 'a', 'default')).to.equal('default');
  });

  it('should handle non-object inputs gracefully', () => {
    expect(get(42, 'a', 'default')).to.equal('default');
    expect(get('string', 'a', 'default')).to.equal('default');
  });

  it('should handle array paths with numeric indices', () => {
    const object = { a: [10, 20, 30] };
    expect(get(object, ['a', 1])).to.equal(20);
  });

  it('should return the default value if the resolved value is `undefined`', () => {
    const object = { a: { b: undefined } };
    expect(get(object, 'a.b', 'default')).to.equal('default');
  });

  it('should retrieve values from objects with complex keys', () => {
    const object = { 'complex.key': { nested: true } };
    expect(get(object, ['complex.key', 'nested'])).to.equal(true);
  });
});
