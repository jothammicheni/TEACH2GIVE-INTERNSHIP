var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


function Properties(obj) {
    console.log("Properties of the object:");
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            console.log(property);
        }
    }
}


Properties(student);
