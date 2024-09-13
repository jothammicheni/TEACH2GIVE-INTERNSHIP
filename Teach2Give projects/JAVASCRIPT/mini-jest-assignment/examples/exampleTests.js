const { test, describe } = require('../src/testUtils');
const { assertEqual, assertTrue, assertContains } = require('../src/assertions');

describe('Math operations', () => {
  test('addition', () => {
    assertEqual(2 + 2, 4, 'Simple addition');
  });

  test('multiplication', () => {
    assertEqual(3 * 4, 12, 'Simple multiplication');
  });
});

describe('Array operations', () => {
  test('array contains element', () => {
    const arr = [1, 2, 3, 4, 5];
    assertContains(arr, 3, 'Array should contain 3');
  });
});

test('truthy check', () => {
  assertTrue(true, 'True should be truthy');
});

test('async test', async () => {
  const result = await new Promise(resolve => setTimeout(() => resolve(42), 100));
  assertEqual(result, 42, 'Async result should be 42');
});


