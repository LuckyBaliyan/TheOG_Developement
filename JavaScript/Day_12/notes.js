//Pure and impure Functions

let a = 12;
function abcd(val){
    console.log(val+2);
}

//any function that produce expected output on a given o/p and don't interepts any sort of values such type of 
//functions are called pure functions

abcd(a);//12 + 2 = 14
abcd(a);//12 + 2 = 14
abcd(a);//12 + 2 = 14

function imPure(val){
    a = Math.floor((Math.random()*5)+val);
    return a;
}

console.log(imPure(a));//13
console.log(imPure(a));//17
console.log(imPure(a));//17


// Global Scope and Local Scope:- Outside and Inside the LocalScope or function scope
function localScoped(){
    let b = 2;
    console.log(b);
}

localScoped(); // 2


//Clouser:- A function that returns a function but returning a function that will must use it's parents variables 
// and every clouser is also a higherOrder Functions

function parentFunctionClouser(){
    let c = 121;
    return function(){
        console.log(c);
    }
}

function higherOrder(){
    return ()=>{
        console.log("Hello World!");
    }
}

higherOrder()();
const clouserFunction = parentFunctionClouser();
clouserFunction();

//Arrays Creations

const arr = [1,2,4];
const arr2 = new Array();
console.log(arr,arr2);

//Array Methods 

arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(0);
console.log(arr);

//Destructured 
const [e,,b] = arr; // will map [0--> e and leave 1st index and then maps 4-->b]
console.log(e,b) // 0,4


//filter
let arr3 = [1,2,3,4];
const newArray = arr3.filter((val)=>{
    return val < 3;
})

console.log(newArray); // [1,2]

//spread operators 
const arr4 = [1,2,3,4,5,6,7];
const newArray2 = [...arr4]; // to avoid refrence changes to original arrays 

newArray2[1] = 0;

console.log(arr4,newArray2);

//loops on arrays 
let arr5 = [1,2,3,4];
for(let i in arr5) console.log(arr5[i]);
console.log();
for(let i of arr5) console.log(i);

//forEach
arr5.forEach((val,index)=>{
    console.log(val,index)
})


//Objects :- key-value pairs

const obj = {
    name:"Lucky",
    age:20,
    sex:'M',
    email:'baliyanlucky85@gmail.com',
}

console.log(obj);


let obj2 = new Object();
console.log(obj2);

console.log(obj.name); //Lucky
console.log(obj['name']); //Lucky must be in Strings the value in square brackets

//delete
delete obj.email;
console.log(obj);

//Nested Objects namings
let obj3 = {
    name:"Lucky",
    solcials:{
        insta:'',
        tele:'',
    }
}

console.log(obj3);






