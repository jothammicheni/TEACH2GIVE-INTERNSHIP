
const TestRunner = require('./TestRunner');

const runner = new TestRunner();

function test(name, testFunction, tags = []) {
  runner.registerTest(name, testFunction, tags);
}

function describe(suiteName, suiteFunction) {
  const originalRegisterTest = runner.registerTest.bind(runner);
  runner.registerTest = (name, testFunction, tags = []) => {
    originalRegisterTest(`${suiteName}: ${name}`, testFunction, tags);
  };

  suiteFunction();

  runner.registerTest = originalRegisterTest;
}

module.exports = {
  test,
  describe,
  runner
};