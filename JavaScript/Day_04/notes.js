//

/*
defer  used in js script tag so that our js loads only after the dom
*/ 

// wht ever you take from a prompt is a string so we then parse it to the required type
/*
const userAge  = prompt("Enter your age");
console.log(typeof(age)) // String
*/

//parse it to number
const numAge = Number.parseInt('12');
console.log(typeof(numAge)); // number


// Slice()
const myString  = 'Another Round';
console.log(myString.slice(3,7)); // ther

//null type
console.log(typeof(null)); //object

//undefined type
let y;
console.log(typeof(y)); // undefined

// Specials 
console.log(1/0) // Infinity
console.log(-1/0) // -Infinity
console.log(0/0); // NaN
console.log(Number("abc")); // NaN
console.log(undefined + 1); 
// NaN because if we chechk type of undefined then it is a NaN and anything + NaN is NaN

//Primitive vs Refrence types

let x= 5;
let z = 10;
z = x;

console.log(x,y); // 5 undefined 

let obj1 = {name:'shaka'};
let obj2 = {name:'sumit'};
obj2 = obj1;
console.log(obj1,obj2);
obj2.name = 'surya'
console.log(obj1,obj2);



