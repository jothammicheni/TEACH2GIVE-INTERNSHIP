"use strict";
let input = document.getElementById('input');
let btn = document.getElementById('btnDisplay');
let output = document.getElementById('output');
function displayNumber() {
    if (input.value != '') {
        let num = parseFloat(input.value);
        output.textContent = num.toString();
    }
    else {
        alert('wrong input');
    }
}
btn.addEventListener('click', displayNumber);
//# sourceMappingURL=index.js.map