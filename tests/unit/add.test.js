import { expect } from 'chai';
import add from '../../src/add.js'; 

describe('add function', () => {
  
  it('should add two positive numbers correctly', () => {
    expect(add(6, 4)).to.equal(10);
  });

  it('should add two negative numbers correctly', () => {
    expect(add(-6, -4)).to.equal(-10);
  });

  it('should add a positive number and a negative number correctly', () => {
    expect(add(6, -4)).to.equal(2);
  });

  it('should add zero and a number correctly', () => {
    expect(add(0, 5)).to.equal(5);
    expect(add(5, 0)).to.equal(5);
  });

  it('should return the same number if the other number is zero', () => {
    expect(add(3, 0)).to.equal(3);
  });

  it('should handle floating-point numbers correctly', () => {
    expect(add(1.5, 2.3)).to.be.closeTo(3.8, 0.0001);
  });

  it('should handle very large numbers correctly', () => {
    expect(add(1e15, 1e15)).to.equal(2e15);
  });

  it('should handle very small numbers correctly', () => {
    expect(add(1e-15, 1e-15)).to.equal(2e-15);
  });

});
