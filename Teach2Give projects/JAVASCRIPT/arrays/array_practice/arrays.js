//QUESTION ONE
//create an empty array

const name=[]
console.log(name)

//QUESTION 2
//how to access the first and last element of an array
const arr2=['james','john','peter',"mathew","simon","judas","paul",]
let firstitem=arr2[0]
let lastItem=arr2[arr2.length-1]
console.log(`The first item of the array is: ${firstitem} , last item is ${lastItem}`)

//QUESTION 3
//add items to the end of the array

arr2.push('jotham')
console.log(arr2)

//QUESTION 4
//remove the last item from an array

arr2.pop()
console.log(arr2)

//QUESTION 5
//looping through a loop in javascript

for(let i=0;i<arr2.length;i++){
    console.log(arr2[i])
    
}
console.log(arr2.length)
//using the foreach
// arr2.forEach((element)=>{
//   console.log(element)
// })

//QUESTION 6
//checking if an element exists in an array
let checkItem='james'
if(arr2.indexOf(checkItem)!==-1){
    console.log("item found in the array")
}else{
    console.log("item not found")
}


//QUESTION 7
//remove an item at a specific index of an array


console.log(`Printed array before: ${arr2}`)

arr2.splice(2,1, 'micheni' )
console.log(arr2)

//QUESTION 8
//HOW TO CONCTNATE TWO ARRAYS

const arr3=[13,50,70,90]
const arr4=['james','john','peter','judas']
let concartnatedArray=arr3.concat(arr4)
console.log(concartnatedArray)


// Flatten Array JavaScript Interview Questions With Answers
// interview questions. Check JavaScript interview questions on the flattened array below.
// Question 
// 1: Write a function to flatten a nested array in JavaScript.
// Answer:

// step 1
const arr5=[[5,6,7],[[66,7,8],[6,7,9]],[80,90,40,30]]
/*
function flattenArray(arr) {
return arr.reduce(function(flat, toFlatten) {
return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
}, []);
}

console.log(flattenArray(arr5))
*/

const flattenedArray=arr5.flat(Infinity)
console.log(flattenedArray)
//using the spread operator

