"use strict";
const concatNames = (fname, lname) => {
    if (!lname) {
        return `names :${fname}`;
    }
    else {
        return `names :${fname} ${lname}`;
    }
};
console.log(concatNames('jotham', 'ian'));
const concatnames = (fname, lname = 'micheni') => {
    lname = 'murimi';
    return `names: ${fname} ${lname}`;
};
console.log(concatnames('jotham'));
const concart = (...names) => {
    return names.join('');
};
console.log(concart('jotham', 'murimi', 'micheni'));
const modifyUser = (users, id, makeChange) => {
    return users.map((u) => {
        if (u.id === id) {
            return makeChange(u);
        }
        return u;
    });
};
const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' }
];
const changeUserName = (user) => {
    return { ...user, name: 'Updated Name' };
};
const updatedUsers = modifyUser(users, '2', changeUserName);
console.log(updatedUsers);
//# sourceMappingURL=practice1.js.map