function generateReport(results) {
    const passedTests = results.filter(r => r.status === 'passed');
    const failedTests = results.filter(r => r.status === 'failed');
    
    console.log('\n----- Test Report -----');
    console.log(`Total tests: ${results.length}`);
    console.log(`Passed: ${passedTests.length}`);
    console.log(`Failed: ${failedTests.length}`);
  
    if (failedTests.length > 0) {
      console.log('\nFailed Tests:');
      failedTests.forEach(test => {
        console.log(`  - ${test.name}`);
        console.log(`    Error: ${test.error}`);
      });
    }
  
    console.log('\n-----------------------');
  }
  
  module.exports = { generateReport };