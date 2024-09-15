function getAllPropertyNames(obj) {
    let properties = [];
   for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            properties.push(prop);
        }
    }
    let proto = Object.getPrototypeOf(obj);
    while (proto) {
        for (let prop in proto) {
            if (proto.hasOwnProperty(prop) && !properties.includes(prop)) {
                properties.push(prop);
            }
        }
        proto = Object.getPrototypeOf(proto);
    }

    return properties;
}


console.log(getAllPropertyNames(Array));
