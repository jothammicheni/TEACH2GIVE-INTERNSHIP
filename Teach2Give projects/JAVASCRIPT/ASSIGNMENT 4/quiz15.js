function objectToPairs(obj) {
    return Object.entries(obj);
}
const anotherObject = { name: 'Alice', age: 25 };
console.log(objectToPairs(anotherObject));
