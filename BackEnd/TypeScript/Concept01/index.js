//console.log("Hello World");
const a = "Hello";
const b = 5;
//console.log(a + b); //"Hello5"
//console.log(a - b); // JS Will give NaN
const c = 123;
console.log(c);
let d;
d = "baad me assign kr deya kyuki let hai na! but only String type";
console.log(d);
//Arrays
let arr;
arr = [1, 2, 3];
arr.push(4);
console.log(arr);
//tuples:- Fixed size arrays
const tuple = [1, false, "x"];
console.log(tuple);
//void - used to refer functions that ar't returning a value
function greet(name) {
    console.log("Good Morning " + name);
}
greet("Lucky");
//returning function
function getPi() {
    return 22 / 7;
}
console.log(getPi());
//functions that never completes
function nevercComplete() {
    throw new Error("Somethig went wrong!");
}
// console.log(nevercComplete());
//Ye hai aam zindagi 
const user = {
    name: "Lucky",
    age: 20,
    isMinor: false,
};
function init(data) {
    console.log("hello " + data.name + " your are is " + data.age);
}
init(user);
export {};
//# sourceMappingURL=index.js.map