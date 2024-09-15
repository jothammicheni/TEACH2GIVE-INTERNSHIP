function invertObject(obj) {
    const inverted = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}
const invertMe = { a: 1, b: 2, c: 3 };
console.log(invertObject(invertMe));
