function all_properties(obj) {
    const methods = [];

    for (let prop in obj) {
        if (typeof obj[prop] === 'function') {
            methods.push(prop);
        }
    }

    return methods;
}

console.log(all_properties(Array));
