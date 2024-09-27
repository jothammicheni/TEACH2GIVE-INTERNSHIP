"use strict";
const message = Date.now() % 2 === 0 ? 'Hello Tuesdays!' : null;
console.log(message);
const userId = (name) => {
    console.log("", name);
};
userId(1234);
userId('jehhdjhdh');
userId(true);
//# sourceMappingURL=unions.js.map