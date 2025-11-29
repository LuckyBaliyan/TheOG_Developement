//Level:-2 Practice

//1.write a higher order function runTwice that will takes another function and executes it two times.

function runTwice(fn){
   fn();
   fn();
}

runTwice(function(){
    console.log("Hello World");
})

//2. write a pure function:- that always accept same i/p and return same o/p and impure function with global variable
let global = 0;
function imPure (a){
    return  ++a;
}

function pure(a){
    return a;
}

console.log(imPure(global));
console.log(pure(global));

//3. Write a function that uses object destructuring inside parameters to extarct and print name and age

const obj = {
    name:'Binod',
    age:20,
}

function binod({name,age}){
    console.log(name," age of:",age);
}

binod(obj);

//4. Demonstrait thee difference between normal function and  arrow function when used as object methods (this issue).

const obj2  = {
    function:()=>{
       return 12
    },
    func:function (){
        return 13
    }
}

console.log(obj2.function(),obj2.func()); //12 13

//this:- keyword is a dynamic keyword its value gets changes again and again depend upon where it can be used


//globally the value of this keyword is window:_
console.log(this);  // window object

function abc(){
    console.log(this);
}

abc();  // still window object


//but
const obj3 = {
    name:'Binod',
    fnc:function(){  //normal function
        console.log(this);
        
        function fn2(){
            console.log(this);
        }

        fn2(); // will give window Object so that's why we always use arrow functions inside sub functions in object 

        const arr = ()=>{
            console.log(this);
        }

        arr();
    }
    ,
    arrow:()=> {  // arrow functon
        console.log(this);
    }
}

obj3.fnc();  // now this is refrencing the obj3 
obj3.arrow(); // gives {} window object 

// so basically the arraow function takes the value of it's this from its parent which is the obj3 and obj3 have  
// the global space where this --> window Object so its returning {}.

//5.Given an array of numbers, use map() to create a new array where each number is squared.
const arr = [1,2,3,4,5,6,7];
const ans = arr.map(i=>i*i);

console.log(ans);

//6. Use a filter method to get onky even numbers from an array
const giv = [1,2,33,4,56,45,21,8];
console.log(giv.filter(e=>e%2 === 0));

//7.use reduce to find the total salary from an array

const salaries = [1000,20000,300000];
const res = salaries.reduce((acc,sum)=>{
            return acc + sum;
           },0);

console.log(res);

//even shorter version
const res2 = salaries.reduce((a,b)=>a+b,0);
console.log(res2);


//8. Create an array of names and use some() and every() to test a consition (eg. all names longer than 3 chars).

const names = ['Sumit','Mridul','Hera','Abhimanyu','Prakash','Dharmendra'];

//Some if thers exsist at least one condiiton is true
const slected = names.some((name)=>name.length <= 4);  //true
const selected2 = names.every((name)=>name.length <= 4); // flase

console.log(slected,selected2);


//9. Create an Object and observe the behaviour of the Object using freeze() and object.seal() by adding/Changing keys

const obj4 = {
    name:'Kawde Prasad',
    age:20,
    email:'@kaaaawdeeePrasad@gmail.com',
};



const obj5 = {
    name:'Kawde Prasad',
    age:20,
    email:'@kaaaawdeeePrasad@gmail.com',
};

Object.freeze(obj4);  // prevent changing the value correspond a key and adding a new value as well
obj4.age = 31;
obj4.social = 'INSTAGRAMM';


Object.seal(obj5); // Prevent only adding a new value 
obj5.social = 'INSTAGRAMM';
obj5.age = 19;

console.log(obj4,obj5);


//10. Create a Nested Object user --> address --> city and acess the city name inside it.

let user = {
    name:'Harsh',
    address:{
        city:{
            name:'MUMBAI',
        },
    },
}

let {name:city} = user.address.city;
console.log(city);











