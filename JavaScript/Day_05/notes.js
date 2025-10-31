//Operators in javaScript

/* + - * / % ** (Arithmatic operatros) */

// Modulus or mod 12 % 13 = 12  13 tries to devide 12 but if we think about reminder theoram we will get the 
// 12 as it is but we do  like 4%2 = 0 get as reminder but in js mod will not works as true mathametical mod for 
// negatuve values ex:- -1%2 will give -1 not 1

/* Exponentiation :- 2**3  = 8 */

/* = += *= /= -=  %=  (Assignment Operators) */

// == != === !== > >= < <= 

// == abstract equality (type coercion allowed)
//   === Strict comparison :- 12 == '12' will give true as js convert string to number
// but 12 === '12' will give false becuase its checks the values and refrences and type as well


/* Logical Operators  && || ! GIVES RESULTS BASED ON LEFT AND RIGHT VALUES */

//&& stops at first falsy value.

// || stops at first truthy value.

// the logical Operators will not give booelans 
//ex:- console.log("hwllo" && 13) // 13

// ! not :- invertor true -> false and false->true


/* Ternary Operator */
console.log(112 >= 13?true:false);

/* Type Checking Operators */

//typeof :- we useit to check type of anything 
console.log(typeof(()=>{})) //function

//instanceof :- check to find the class of the current variable type in js 
// Works only for objects that have constructors in their prototype chain.

console.log([] instanceof Object); // true will give true for both Array and Object classes
console.log(new Number(12) instanceof Number); //true
console.log({} instanceof Boolean); // flase

/* String Operators */

//+ (concatination:-concat operator)

/* Spread and Rest Operator*/

//Spread used to copy for refrence types
const arr = [1,2,3];
const arr2 = [...arr];
console.log(arr,arr2);

//Rest operator used in functions use to take varible length arguments

function abd(...arg){
   for(let i in arg){
    console.log(arg[i]);
   }
}

abd(1,2,3,4,5,6,7,8);


/* Nullish Coalescing Operator */

// ?? (fallback only when null / undefined) :- always give second value when first one is null
console.log(null ?? "Sorry User dos't exsists");
console.log(12>13 ?? "Sorry unable to fecth the data"); //false

/*Oeptional Chaining */

//?. (safe acess to nested values):- check if anything inside in anything if yes then execute or we don't get 
// any sort of error

const obj = {
    name:{
        first:"Lucky",
        second:{
            sf:"Baliyan",
            sl:"Choudhary",
        },
    },
}

//obj.age.second gives error
console.log(obj?.name?.second?.sf); // baliyan
console.log(obj?.sr); // undefined not error at browser level

/* Hoisting of variables  in js */

//Hoisting ka mtlb h ki variable declare krne ke phle bhi uose use kiya ja skta h 
//Hoisting m variable tut jata h do hisso m declaration and inintialisation declaration top of file 
//chala jata h (not in real but in interpreter level ) and initialisation wahi rahta h iseleye error nahi aata 
//hai kyuki wo initialise krne se phle hi declare ho chuka hota h hoisting pr let or const k saath ye kaam ni krta 
//because a goes to temperary dead zone in ES6 it is defined that we cant acess any variable before declaration
//it goes to temporary dead zone until the declartaion line.

//For let and const: Variable is hoisted but not initialized Access before declaration throws ReferenceError.

console.log(a); //undefined 
var a =  12;


/*
BONUS: Some Hidden Operators/Concepts
1. Comma Operator (,)

Executes multiple expressions, returns the last.

let x = (1, 2, 3);
console.log(x); // 3

2. Delete Operator

Removes a property from object (not variable!).

let obj = { a: 1 };
delete obj.a;
console.log(obj); // {}

3. Void Operator

Evaluates an expression but returns undefined.

void (console.log("test")); // prints "test", returns undefined
*/

//Shallow copy vs Deep copy:-

//Shallow copy copy the refrence of the outer object but what if we have another object inside 

const obj2 = {
    name:"xyz",
    address:{city:"Noida"}
};

const obj3 = {...obj2}

//but it wont copy the adress object refrence in the obj2

obj3.address.city = "Delhi";

console.log(obj2,obj3); // city changes in obj2 as well

//but if we want to make it completely copied 

const obj4 = structuredClone(obj2);
obj4.address.city = "Chennai";

console.log(obj2,obj3,obj4);












