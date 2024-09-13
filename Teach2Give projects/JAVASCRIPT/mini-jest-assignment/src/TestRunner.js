class TestRunner {
    constructor() {
      this.tests = [];
      this.hooks = {
        beforeEach: [],
        afterEach: [],
        beforeAll: [],
        afterAll: []
      };
      this.executionOrder = 'sequential';
    }
  
    registerTest(name, testFunction, tags = []) {
      this.tests.push({ name, testFunction, tags });
    }
  
    async runTests() {
      console.log('Starting test run...');
      
      await this.runHooks('beforeAll');
  
      const results = [];
      for (const test of this.tests) {
        await this.runHooks('beforeEach');
        const result = await this.runTest(test);
        results.push(result);
        await this.runHooks('afterEach');
      }
  
      await this.runHooks('afterAll');
  
      return results;
    }
  
    async runTest(test) {
      console.log(`Running test: ${test.name}`);
      try {
        await test.testFunction();
        return { name: test.name, status: 'passed' };
      } catch (error) {
        return { name: test.name, status: 'failed', error: error.message };
      }
    }
  
    filterTests(filter) {
      this.tests = this.tests.filter(test => 
        test.name.includes(filter) || test.tags.includes(filter)
      );
    }
  
    setExecutionOrder(order) {
      if (order !== 'sequential' && order !== 'random') {
        throw new Error('Invalid execution order. Use "sequential" or "random".');
      }
      this.executionOrder = order;
    }
  
    addHook(type, hookFunction) {
      if (!this.hooks[type]) {
        throw new Error(`Invalid hook type: ${type}`);
      }
      this.hooks[type].push(hookFunction);
    }
  
    async runHooks(type) {
      for (const hook of this.hooks[type]) {
        await hook();
      }
    }
  }
  
  module.exports = TestRunner;
  