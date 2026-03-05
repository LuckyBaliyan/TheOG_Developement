// comments in js

/* 
Comments if we write anything then js find it and if its not defined in js so js will 
through an error to avoid it we use comments to write some info with peice of code

JS parsers literally strip out comments before execution. They’re not part of the Abstract Syntax Tree (AST).
Good developers use comments only where logic is complex — not to explain obvious things (e.g., // add 1 to x is bad).
*/

// Data types in js

/*

  number- 12.3 
  also a number as well JS has no separate int or float – 
  both are Number (IEEE-754 64-bit floating point)
  String - h or hrr
  ch - h
  boolean - true or flase
  null - jab kuch value dene ko nahi ho to null dete h  or aage data milega 
  undefined  - a variable  without value is declared
  NAN - not a number generates when there is a operation held on a variable that makes no scence
        or may be not a valid operation for the number.
  BigInt -	123n	For very large integers beyond Number.MAX_SAFE_INTEGER
  Symbol -	Symbol('id')	Unique and immutable identifier
  Objects - arrays and objects 
  arrays - homogenious mixture of datas in js we can literally use anything in same array.
           internally arrays are built in objects with indexes as keys so technically they are object types

  Extra Deep Info

  Number is actually 64-bit floating-point → so even integers like 12 are stored as floats internally.
  NaN, Infinity, and -0 are all part of IEEE 754 standard.
  "Mu" can’t be converted to a number. in 12*"Mu"
  JS tries type coercion — it attempts "Mu" → Number("Mu") → fails → returns NaN.

  You can check Number.isNaN(value) instead of isNaN() (because old isNaN() converts non-numbers first).

*/
  
// Arrays
ex = ["We",1,2.3,NaN,undefined,{},()=>log("hi")];
console.log(ex);

// NaN
console.log(12*"Mu");
console.log(NaN === NaN); // False because ironically its  a  miscumputed number calculated value and its hardcoded 
//in ECMASCRIPT that NaN == NaN is always false

console.log(Math.sqrt(-1)) // NaN
console.log(typeof(null)); // Object (bug in Js)


// Infinity

console.log(1/0);


//Primitive values :- values which are not wrapped in any brackets in js  ye hote h jinki value direct copy krte h.
//Refrenced values:- jinki value direct ni kr skte ho just unka refrence copy ho jata h.

console.log(0*2/0); // NaN computation held from right to left

/*
Primitive	        Reference
Stored in stack	    Stored in heap
Copied by value	    Copied by reference (pointer)
Immutable(Strings)  Mutable (can modify properties)
*/


