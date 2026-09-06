"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 12;
// a = "Lb"; error because of type is number
a = 22;
console.log(a); // 22
let arr = [1, 2, 3, "Hello World"];
console.log(arr);
const obj = [1, 2, 3, 4, { name: "LB" }];
console.log(obj);
//enum enumerations
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["BAD_REQUEST"] = 401] = "BAD_REQUEST";
    statusCodes[statusCodes["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(statusCodes || (statusCodes = {}));
console.log(statusCodes.BAD_REQUEST);
function getData(obj) {
    const { name, email, sex = "prefered not to say" } = obj;
    return name + " " + email + " " + sex;
}
console.log(getData({ name: "Ajay", email: "AJax@gamail.com", password: "122" }));
//# sourceMappingURL=app.js.map