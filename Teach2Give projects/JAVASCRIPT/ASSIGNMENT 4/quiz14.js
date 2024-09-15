function getAllPropertyValues(obj) {
    return Object.values(obj);
}

const sampleObject = { a: 1, b: 2, c: 3 };
console.log(getAllPropertyValues(sampleObject));
