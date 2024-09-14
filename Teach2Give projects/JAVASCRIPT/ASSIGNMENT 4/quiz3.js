var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


function getObjectLength(obj) {
    return Object.keys(obj).length;
}

var length = getObjectLength(student);
console.log("Length of the student object:", length);
