// tests/testConfig.js
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

// Register Chai plugins
chai.use(chaiAsPromised);
chai.use(sinonChai);

// Expose Chai functions globally
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();
