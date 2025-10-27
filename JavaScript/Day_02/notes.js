/*
 - Variables 

 var,let,const

 //Error is not our enimy when Es-6 came we can actually solve the problem of 
 block scope
 
 Ex:- 
 */

 {
    var a = 8;
 }

 console.log(a); 
 // we get a but which we should't get and that's a bug which wont give any error

 //But after ES-6 let fixed it 

 {
    let b = 9;
    console.log(b); // will work becuase let is blocked scope
 }

 // console.log(b);  // will through error

 /* 

- Const is used to make unchangable values when we want to change it js will through error
  in short we can't reinitialize and reRide it.

*/

/*

  More about variables

🔹 1. Variables in JavaScript — var, let, const
🧠 Basic Concepts

JavaScript me variables declare karne ke 3 tareeke hain:

var → function-scoped

let → block-scoped

const → block-scoped + immutable reference

🧩 var

Scope: Function scoped hota hai (block-scoped nahi hota).

Problem: Agar aap {} ke andar declare karte ho, tab bhi wo bahar accessible hota hai — 
ye hoisting + no block scope ke kaaran hota hai.

Hoisting: JavaScript execution ke time me var variables top pe move ho jaate hain with undefined value.

console.log(x); // undefined (error nahi aayega)
var x = 10;


Industry Insight:

var ab legacy codebases (purane projects) me milta hai.

Modern JS (ES6+) me let aur const use karna best practice hai.

🧩 let

Scope: Block-scoped (sirf {} ke andar valid).

Hoisting: Hoti hai, lekin "Temporal Dead Zone (TDZ)" ke wajah se use karne se pehle access nahi kar sakte.

console.log(a); // ❌ ReferenceError
let a = 10;


Reassign: Allowed (let x = 5; x = 6; ✅).

Industry Insight:

let ko use karte hain jab variable ki value change hone wali ho.

Code readability aur predictability badhta hai.


🧩 const

Scope: Block-scoped

Reassignment: Not allowed

Hoisting: Hoti hai but TDZ apply hoti hai (use pehle error).

Immutable value?

Primitive values (number, string, etc.) immutable hote hain.

Objects aur arrays reference ke hisaab se constant hote hain — unka content change ho sakta hai, par reference nahi.

const obj = {name: "Lucky"};
obj.name = "Raju"; // ✅ allowed (same refrence but different value)
obj = {}; // ❌ TypeError (diffrent refrence)


Industry Insight:

Prefer using const by default.

Use let only when value needs to change.

Ye pattern maintainability aur bugs kam karta hai.

*/

const c = 11;
// c = 12;

// console.log(c);  // will through error now


/*
- console.info() is same as log just in some browsers shows it with a precinding i sign
*/

/*
  console.table() 
  used to show data in form of table by  taking an object or array as arguments

   Industry Insight:

   Debugging API responses ya large datasets ke liye super helpful.
   Developer tools me clean & visual debugging milta hai.

*/

console.table([{name:"Lucky",age:19,sex:"Male"}]);
console.table({name:"ajay",sex:'M',age:22});
console.table(["hi","Ramesh","ravi"]);

/* Use of templateStrings or template Strings*/

console.log("Hi 2+2");
console.log("Hi "+2+2);
console.log("Hi "+(2+2));
console.log(`Hi ${2+2}`);

//Multilines Strings are also possible without /n

console.log(`
    Hello
    world
    of java
    Script
`);

/* Split() replace() */

console.log("Mighty Raju ".split("g"));
console.log("Hello World".replaceAll("H","J"));


/*

🔹 5. Extra Industry-Level Tips 💡

Always declare variables at the top of their scope (good practice, readability).

Use const-first approach → agar change karna pade to hi let.

Prefer template literals for any string that has dynamic data.

Avoid var unless maintaining legacy code.

Use console.table() for debugging API responses or database records.

Use strict equality (===) to avoid type coercion issues.

Don’t forget TDZ (Temporal Dead Zone) concept — JS runtime variables ko 
declare hone se pehle access nahi karne deta (let & const).

*/

