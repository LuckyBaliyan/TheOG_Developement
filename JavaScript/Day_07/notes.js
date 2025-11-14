//operators Practice:- 

let a  = 10,b = 3;
//so we can assign variables in same line in js

console.log(a+b);
console.log(a-b,a*b,a/b,a%b);

let count  = 5;
console.log(++count); // 6
count = 5;
console.log(count++); // 5

console.log(5 == "5"); // true
console.log(5 === "5"); // false strict equality checks 

console.log(5+"5");// 55
console.log(5-"5");// 0

console.log(10 > 5 || 4 < 3); // true
console.log(10> 5 && 4>3 && 3.4>4); // false

//Bitwise:-
console.log(5&1);//1
console.log(5|1);//5
console.log(5^8);//13

//variable Hoisting 
console.log(p); //undefined
var p = 3; //if initialized with const and let will give error

//Hoisting with functions works:-

test();//Hi
function test(){
    console.log("Hi");
}

//But if we decalred a function with a variable so we actually call like this

/*

hello();
var hello = ()=>{
    console.log("Hi")
}

will give :-

var hello;
hello(); // calling undefined variable hello
hello = ()=>{console.log("Hi")};

*/

// What variables can be hoisted or what can't :-
/*
all can be because the error let and const give is :- can't acess a without initialization insted 
of its not defined so ya in my openion let cost and var all are hoisted 
ES6 just give a consdition of TDZ that we can't use them till before the line they initialized
*/











