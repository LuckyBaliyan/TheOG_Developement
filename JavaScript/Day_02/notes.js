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

const c = 11;
// c = 12;

// console.log(c);  // will through error now


/*
- console.info() is same as log just in some browsers shows it with a precinding i sign
*/

/*
  console.table() used to show data in form of table by  taking an object as arguments
*/

console.table({name:"Lucky",age:19,sex:"Male"});

/* Use of templateStrings or template Strings*/

console.log("Hi 2+2");
console.log("Hi "+2+2);
console.log("Hi "+(2+2));
console.log(`Hi ${2+2}`);

/* Split() */

console.log("Mighty Raju ".split("g"));
console.log("Hello World".replaceAll("H","J"))

