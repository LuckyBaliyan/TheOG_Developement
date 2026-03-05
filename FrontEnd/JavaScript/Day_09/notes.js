//Lvl_1:-

//1. Print from 1 to 10
for(let i = 1;i<=10;i++){
    console.log(i);   
}

//2. print only even numbers from 1-20
for(let i = 1;i<=20;i++){
    if(i%2 === 0) console.log(i);
}

//second method
for(let i = 2;i<=20;i+=2) console.log(i);


//3.print numbers from 10-1
for(let i = 10;i>0;i--) console.log(i);

//4.print a word yes 5 times 
for(let i = 5;i>0;i--) console.log('yes');

//5.print a number is even or odd
for(let i = 100;i<=110;i++){
    let res = i%2 === 0?`${i}-Even`:`${i}-ODD`
    console.log(res,typeof(res));
}

//6.take a number from prompt and cehck if it is  +ve or -ve
/*
function cehckSign(){
  let num = prompt("Enter Number");
  if(Number(num) < 0) console.log("negative");
  else console.log("Positive");
}

cehckSign();
*/

//7.Print the table of 5
for(let i = 1;i<=10;i++){
    console.log(`5 X ${i} = ${5*i}`);
}

//8.Verify age with handling edge cases

function validAge(age){
    if(age === null){
        console.log("Not a Valid age"); 
        return;
    }

    age  = age.trim();

    if(age === ''){
        console.log("Not a Valid Age!");
        return;
    }

    let goodAge = Number(age);

    if(Number.isNaN(goodAge)){
        console.log("Not a Number")
        return;
    }

    if(goodAge < 18) console.log("Smaller Than 18");
    else console.log("Age is Eligible!");
    
}

validAge("  ");












