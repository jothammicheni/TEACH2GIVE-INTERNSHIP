
const { runner } = require('./src/testUtils');
const { generateReport } = require('./src/reporting');

require('./examples/exampleTests');

async function runTests() {
  const results = await runner.runTests();
  generateReport(results);
}

runTests();