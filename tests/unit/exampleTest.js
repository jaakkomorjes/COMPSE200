// tests/unit/sample.test.js
import { spy as _spy } from 'sinon';

describe('Sample Test', () => {
  it('should pass a basic assertion', () => {
    expect(1 + 1).to.equal(2);
  });

  it('should work with async/await', async () => {
    const result = await Promise.resolve('test');
    expect(result).to.equal('test');
  });

  it('should use Sinon for spying', () => {
    const spy = _spy(console, 'log');
    console.log('Hello, world!');
    expect(spy.calledOnce).to.be.true;
    spy.restore();
  });
});