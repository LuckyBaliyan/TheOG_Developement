//console.log("Hello World");

const a = "Hello";
const b = 5;

//console.log(a + b); //"Hello5"

//console.log(a - b); // JS Will give NaN

const c: number = 123;
console.log(c);

let d: String;
d = "baad me assign kr deya kyuki let hai na! but only String type";

console.log(d);

//Arrays
let arr: number[];
arr = [1, 2, 3];
arr.push(4);


//or same thing second way
let arr2: Array<number> = [98, 101];

console.log(arr, arr2);


//tuples:- Fixed size arrays
const tuple: [number, boolean, String] = [1, false, "x"];
console.log(tuple);

//void - used to refer functions that ar't returning a value
function greet(name: String): void {
      console.log("Good Morning " + name);
}

greet("Lucky");

//returning function
function getPi(): number {
      return 22 / 7;
}

console.log(getPi());

//functions that never completes
function nevercComplete(): never {
      throw new Error("Somethig went wrong!");
}

// console.log(nevercComplete());

//type keyword
const user = {
      name: "Lucky",
      age: 20,
      isMinor: false,
}

//Ye hai aam zindagi 
function init(data: { name: String, age: number, isMinor: boolean }): void {
      console.log("hello " + data.name + " your are is " + data.age);
}

//make variable for tyes and use it anywhere can also be used for single type variable
// as well
type USER = { name: String, age: number, isMinor: boolean };

function init2(data: USER): void {
      console.log(data.name);
}

init(user);

init2(user);


/**
 * any , 
 * unknown
 */

// any will only throw errors via js like at runtime if x type is number
let x: any;
x = 123;

//console.log(x.toUpperCase());

//here we can detect the error early and can frame logic to handle that
let y: unknown;
y = 10;

/*
if (typeof y === String) {
      console.log(y.toUpperCase());
}
else console.warn("The type of ur variable is't String")
*/


//optional params
function yoyo(name: string, greet?: string) {
      console.log(`${greet ?? "hello"} ` + name + " how are you?");
}

yoyo("Lucky");
yoyo("Lucky", "GM");

//default params
function getPiAgain(pi: number = 22 / 7): number {
      return pi;
}

console.log(getPiAgain(3.14));
console.log(getPiAgain());

//generic Methods
function getFirst<T>(arr: T[]): T {
      return <T>arr[0];
}

const arr3 = [1, 2, 3, 4, 5];
const arr4 = ["a", "b", "c"];
console.log(getFirst<number>(arr3));
console.log(getFirst<String>(arr4));

//arrow functions
const square = (n: number): number => n * n;
console.log(square(3));




