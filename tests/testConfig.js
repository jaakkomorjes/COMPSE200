// tests/testConfig.js

// Load environment variables from .env.test or .env (fallback)
require('dotenv').config({ path: '.env.test' });

// Chai setup
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');

// Register Chai plugins
chai.use(chaiAsPromised);
chai.use(sinonChai);

// Expose commonly used Chai functions globally
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();

// Set a global timeout for all tests (optional)
before(function () {
  this.timeout(5000); // 5 seconds timeout for each test
});

// Mocha hooks for setup and teardown (e.g., database setup)
before(async () => {
  console.log('Setting up the test environment...');
  // Example: Initialize test database
  // await initializeTestDatabase();
});

after(async () => {
  console.log('Cleaning up after tests...');
  // Example: Clean up the test database
  // await cleanupTestDatabase();
});
