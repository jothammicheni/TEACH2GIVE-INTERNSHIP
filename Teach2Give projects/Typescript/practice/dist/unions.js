"use strict";
const message = Date.now() % 2 === 0 ? 'Hello Tuesdays!' : null;
console.log(message);
const userId = (name) => {
    console.log("", name);
};
userId(1234);
userId('jehhdjhdh');
userId(true);
const logId = (id) => {
    console.log(id);
};
logId("ertyui");
logId(3454);
//# sourceMappingURL=unions.js.map