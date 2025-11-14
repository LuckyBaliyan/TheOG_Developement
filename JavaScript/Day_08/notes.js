//

//Conditionals if,else,else if,ternary Operator

const num = Math.floor(Math.random()*100);

if(num % 2 === 0){
    console.log("Accept:",num);
}
else if(num % 3 === 0){
    console.log("Reviewing:",num);
}
else{
    console.log("Reject:",num);
}

//Ternary Operator
console.log(num > 50?`Hi ${num}`:`Bye ${num}`)


//Truthy Falsy
if("String"){
    console.log(true); // because "String" is a truthy value
}
else{
    console.log(false);
}

/*
Truthy values:- 
"S",-1,1,[],{}," ",Infinity,-Infinity,".",Symbol

flasy values:-
"",null,undefined,NaN,document.all
*/


//Switch Case

switch(30){
    case 1:
        console.log("H");
        break;
    case 30:
        console.log("hi");
        break;
    default:
        console.log("default case");
}


//Loops
for(let a = 10;a>=0;a--){
    console.log(a+2);
}

//Fibonacci sequence
function Fibonacci(n){
    const ans = [0,1];
    for(let i = 2;i<n;i++){
        ans[i] = ans[i-1]+ans[i-2];
    }

    return ans;
}

console.log(Fibonacci(12));

//While Loops
let n = 3;
while(n>0){
    console.log("Hi");
    n--;
}

n=6;

//DoWhile
do{
    console.log(n);
    n--;
}while(n>=0)

