// let sales = 123_456_789;
// let course = 'Tyscript'
// let is_published = true
// //any datatypes
// function render(doc: any) {
//     console.log(doc)
// }
// //Arrays
// let numbers: number[] = [1, 2, 3]
// //tupples
// let user: [number, string] = [1, 'jotham']
// user.push(23)
// console.log(user)
// //enums
// const small = 1;
// const mediun = 2;
// const large = 3;
// enum Size { Small = 1, Medium = 2, large = 3 }
// //functions
// function calculateTax(income: number): number {
//     income += (mediun * 100) / 4
//     return income
// }
// let net_salary: number = 3000;
// calculateTax(net_salary);
// //objects
// //first initialize the types
// type Employee = {
//     readonly id: number,
//     name: string
//     retire: (date: Date) => void
// }
// let employee: Employee = {
//     id: 1,
//     name: 'jotham',
//     retire: (date: Date) => {
//         console.log(date);
//     }
// }
var input = document.getElementById('input');
var btn = document.getElementById('btnDisplay');
var output = document.getElementById('output');
function displayNumber() {
    var num = parseFloat(input.value);
    output.textContent = num.toString();
}
btn.addEventListener('click', displayNumber);
