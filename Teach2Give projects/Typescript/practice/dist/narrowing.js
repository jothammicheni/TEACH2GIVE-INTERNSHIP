"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name2;
const logSize = (size) => {
    console.log(size.toUpperCase());
};
logSize('small');
logSize('big');
const recordOfSizes = {
    small: 'small',
    large: 'large',
};
const logSize3 = (size) => {
    console.log(recordOfSizes[size]);
};
function logId2(id) {
    console.log(`The id is ${id}`);
}
const user = {
    id: 123,
};
logId2(user.id);
const arrays = [1, "name", 3, "45"];
const numbers = arrays.map((item) => {
    if (typeof item === "number")
        return item;
});
console.log(numbers);
const getAlbumYear = (year) => {
    if (typeof year === 'string') {
        console.log(`The album was released in ${year.toUpperCase()}.`);
    }
    else if (typeof year === 'number') {
        console.log(`The album was released in ${year.toFixed(0)}.`);
    }
};
const getAlbumYear2 = (year) => {
    if (typeof year === 'string') {
        console.log(`The album was released in ${year}.`);
    }
    else if (typeof year === 'number') {
        console.log(`The album was released in ${year}.`);
    }
    console.log(year);
};
getAlbumYear2(true);
console.log([] instanceof Object);
console.log({} instanceof Object);
console.log(function myFunc() { } instanceof Object);
function validateUsername(username) {
    if (typeof username === 'string' && username.length > 5) {
        return true;
    }
    return false;
}
const appElement = document.getElementById('app');
const handleResponse = (response) => {
    if ('data' in response) {
        return response.data.id;
    }
    else {
        throw new Error(response.error);
    }
};
let catDesc;
catDesc = "Cat";
catDesc = {
    age: 23,
    name: "Kana"
};
//# sourceMappingURL=narrowing.js.map