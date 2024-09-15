function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

const testObject = { name: 'Bob', age: 30 };
console.log(hasProperty(testObject, 'name')); 
console.log(hasProperty(testObject, 'gender'));

