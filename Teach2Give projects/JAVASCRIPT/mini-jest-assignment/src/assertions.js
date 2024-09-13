function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
      throw new Error(`${message} Expected ${expected}, but got ${actual}`);
    }
  }
  
  function assertNotEqual(actual, expected, message = '') {
    if (actual === expected) {
      throw new Error(`${message} Expected ${actual} to be different from ${expected}`);
    }
  }
  
  function assertTrue(value, message = '') {
    if (!value) {
      throw new Error(`${message} Expected truthy value, but got ${value}`);
    }
  }
  
  function assertFalse(value, message = '') {
    if (value) {
      throw new Error(`${message} Expected falsy value, but got ${value}`);
    }
  }
  
  function assertContains(array, item, message = '') {
    if (!array.includes(item)) {
      throw new Error(`${message} Expected ${array} to contain ${item}`);
    }
  }
  
  module.exports = {
    assertEqual,
    assertNotEqual,
    assertTrue,
    assertFalse,
    assertContains
  };
  