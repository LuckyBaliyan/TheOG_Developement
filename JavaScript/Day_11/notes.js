//Js Functions

function doSomething(name="user_1",age,email,sex,city="Delhi"){
    console.log(name,age,sex,email,city);
}


doSomething(); // user_1 undefined undefined undefined Delhi


//is there is any way to acess these arguments 

function donSomething2(){ // parameters goes here 
    console.log(arguments);
    //Arguments is an object having values which are passed as a parameter to a function
    //if not take the values as arguments and still pass them they are still acessable within the arguments 
    //object  mapped with index as 0,1,2 as keys

    console.log(arguments[0]) //Lucky
}

donSomething2("Lucky",19,'M',"UP"); // arguments

function doSomething3(name,age,sex){
    console.log(arguments);
    console.log(arguments[0]);

    //Here also values are still maped to indexs like 0-n so its an array basically.
}

doSomething3("Sumit",22,'M');

//FUNCTION HOISTING

//we cant acess a variabled defined function before its defined while we can acess a normal
//  function before its defined

a();
function a(){ let a= 2; console.log("Acessed!",a)}


//But 
// b(); will give us error
var b = function acessed(){
    let a = 22;
    console.log(a);
}

b();

//same we ca't for arrow functions
var abc = ()=>{
    console.log('Arrow Functions');
};

abc();


//Params array
function callMe(a,b,c, ...params){ //Reset parameter takes all the rest values in it as array
    console.log(a,b,c,params);
}

callMe(1,2,3,4,5,6,7,8,9);


//Parameters in JS -[required,destructured,rest,default]

function abcde(a,b,c,d){
    //If we don't passes the asked values of parameters for the function so they are undefined
    console.log(a,b,c,d);
}

abcde();

//Destructured Types
function destructured({name,age}){ //desturctured here
    console.log(name,age);
}

destructured({name:"Lucky",age:20});

//Without Destructured
function WithoutDestructured(obj){
    console.log(obj.name,obj.age);
}

WithoutDestructured({name:"Sumit",age:33});

//Default:- used to pass as a default value for a param so that we can avoid the undefined cases
function defaultFunc(a,b,c=0){
    console.log(a,b,c);
}

defaultFunc(1,2,3);
defaultFunc(11,99);


//Life without default params
function check(a,b){
    b = b || 'Not Input Value';
    console.log(a,b);
}

check(1,2);
check(1);

//Positional arguments
function pos(a,b,c){
    console.log(a,b,c)
}

pos(1,null,3);


//Spread Arguments
let arr = [1,2,3,4,5];

function values(a,b,c,...d){ //Spread params
    console.log(a,b,c,d);
}

values(...arr);  // spread Arguments


//Nested Functions
function defg(){
    function IAS(){
        console.log("Ek Kamm Kro tum iAs ki tyaari rhne do!!")
    }

    IAS();
}

defg();

//Scope Chaning 
let a2 = 13;
function acds(){
    let b = 15;
    function def(){
        let c  =  17;
        function efg(){
            let d = 19
            console.log(d,c,b,a2);
        }
        efg();
        console.log(c,b,a2);
    }
    def();
    console.log(b,a2);
}
acds();
console.log(a2);


//Understanding IIFE (Imidiately Invoked Function Expression).
// Used to make private variables that can't be acessed and changes form the console

(()=>{
  console.log('Hello IIFE');
})();


(function(){
  console.log("Hello World");
})();


//Anonymus Functions:- A Functions with no name
const cl = ()=> setTimeout(function () {
            console.log("Anonymus")
          },200);

cl();  // here the functiob inside setTimeOut is a anonymus function


//HOF - Highet Order Function :- Ya to ek function ek or function return kr de or ya wo accept 
// kr le ek or function parameter me!

const hof = function(){
    return function abc(){
       console.log('Hof Function!')
    }
}

hof()();  // beacuse we have to call the function return by calling the hof function
//or we can do like 

const returnedByHof = hof();
returnedByHof();

//Second Way of being HOF
function abc (a){
    const val = a();
    console.log(val);
}

abc(function a(){return 9}) // and the function we pass as arguments named callback function


//Firts Class Functions FCF

//This concept says whichever scriptig language has FCF there we can use functions like variables
//EX:-

function zdi(a,b){
    console.log(a(),b);
}

zdi(function zdi2(){return 21},2);






