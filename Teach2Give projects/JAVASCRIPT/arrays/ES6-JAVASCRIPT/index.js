function filterAndSort(filterFn, ...numbers){
  return numbers
       . filter(filterFn)
       .sort((a,b)=>a-b)
}

const isEven=(num)=>num%2===0;

console.log(`Filtered and sorted array: ${filterAndSort(isEven,  9,4,6,6,10,6,3)}`)



/// merge objects
function mergeObj(...objs) {
    return objs.reduce((prev, next, index) => {
        for (let key in next) {
            if (prev[key]) {
                prev[`${key}_${index + 1}`] = next[key];
            } else {
                prev[key] = next[key];
            }
        }
        return prev;
    }, {});
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };
const obj3 = { a: 1, c: 2 };
const obj4 = { a: 1, c: 2 };

console.log(mergeObj(obj1, obj2,obj3,obj4 )); 




//QUESTION 3

///Create a function called combineArrays that takes 

function combineArrays(...arrays) {
    const combinedArray = [].concat(...arrays);
        const uniqueArray = [...new Set(combinedArray)];
        return uniqueArray;
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4, 5];
const array3 = [5, 6, 7];
const array4 = [56, 65, 70];

console.log(`Combined Arrays: ${combineArrays(array1, array2, array3,array4)}`);
// Output: [1, 2, 3, 4, 5, 6, 7]




function extractProperties(objects, properties) {
    return objects.map(obj => {
        return properties.reduce((newObj, prop) => {
            if (obj.hasOwnProperty(prop)) {
                newObj[prop] = obj[prop];
            }
            return newObj;
        }, {});
    });
}



//QUESTION FOUR
const data = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
];

const propertiesToExtract = ['name', 'city'];

console.log(extractProperties(data, propertiesToExtract));
