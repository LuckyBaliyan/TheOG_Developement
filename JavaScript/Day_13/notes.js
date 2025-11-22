//Lvl1:_

function hello(){
    console.log("Hello js");
}

hello();


//2.auto return 
const add = (a,b)=>a+b;
console.log(add(1,2));

//3.default param
function hi(name='Guest'){
    console.log(`hi ${name}`);
}

hi("Lucky");
hi();

//4. Use rest paramets to make a function that adds unlimited numbers
const rest = (sum,...rest)=>{
    rest.forEach(e => {
        sum += e;
    });

    return sum;
}

const res = rest(0,1,2,3,4,5,6,7,8);
console.log(res);

//IMP:- using array reduce function  reduce is used in cases like where we have to retrive the final value on array elems
// Like summing up all the array elems and returning the last array element

const sum = (...rest)=>{
    let ans = rest.reduce((acc,val)=>{
        return acc + val;
    },0) // acc = 0 just like sum = 0 during iniitialization
    console.log(ans);
}

sum(1,2,3,4,5);

//5. Create IIFE AND PRINT I
(()=>{
    console.log("I")
})();

//6. Make a Function nested where the inner one prints a variable from the outer one 
function parent(){
    let a= 0;
    function child(){
        let b = a+1;
        console.log(a);
        console.log(b);
    }
    child();
};

parent();

//7.Create an array of 5 fruites and add  1 at the end and 1 at beigning
const arr = ['apple','banana','orange','graphes','gavava'];
console.log(arr);
arr.push('Litchey');
arr.unshift('Mango');
console.log(arr);

//8. Use a loop to print all the elements of an array
const nums = [1,2,4,5,56,6788,3,2,3,54,3];

for(let i = 0;i<nums.length;i++)console.log(nums[i]);
console.log(" ");

for(let num of nums)console.log(num);
console.log("");

nums.forEach(num=>{
    console.log(num);
})
console.log("");


//Create an object person with name city and sex print each key and value
const person = {
  name:'Subham Anand',
  age:23,
  city:'GAUR YAMUNA CITY',
  sex:'M',
}

for(let o in person){
    console.log(o,":",person[o]);
}

console.log(person["name"]); //Shubnham Anand

const showTime  = ()=>setTimeout(()=>{
    console.log("Times Up!");
},5000);

showTime();





