//Ask for user password and print acess status.

function verifyPassWord(pass){
    const CleintPassWord = 'Lm78';
    
    if(pass === null){
        console.error("Not a valid inpout");
        return;
    }

    pass = pass.trim();

    if(pass === ''){
        console.log("Empty password!");
        return;
    }

    if(pass !== CleintPassWord){
        console.log("Acess Denined!");
    }
    else if(pass === CleintPassWord){
       console.log("Acess Granted!");
    }
    else{
        console.error("Something Wrong Happens Denined!")
    }
}

verifyPassWord(" ");

//Lvl2:-

//11. Allow only 3 attempts to enter correct password !
function verfiiyPassWord(){
    const clientPass = "Lgbtq";
    let attempts = 3;
    
    while(attempts != 0){
        let pass = prompt(`Enter Pass Trial left
        ${attempts}`);

         pass = pass.trim();
         if(pass === null || pass === '') return;

        if(pass === clientPass){
            alert("Welcome Sir!");
            return;
        }
        else{
           alert(`Attempt ${-1*(attempts-(4))} fails!`);
           attempts--;
        }
    }

    alert("accout Blocked!");
}

// verfiiyPassWord();


//12. Ask Userfor  words and count how many times they printed words untill they type stop

function askWords(){
    let prompt = prompt("Enter Words");
    let count  = 1;
    while(prompt !== 'stop'){
        prompt = prompt("Enter Words");
        count++;
    }
}

//13. Sum of all odd numbers from 1-30

let sum  = 0;
for(let i = 1;i<31;i++){
    if(i%2!==0){
        sum += i;
    }
}

console.log(sum);

//14. ask for a number until its even

function isEven(){
    let num = prompt("Enter A Number:");
    num = Number(num);

    if(num % 2 === 0) return;

    while(num % 2 !== 0){
        num = prompt("Enter A NUmber");
        num = Number(num);
    }
}

// isEven();

//15. Print all Numbers b/w Two given numbers
function missingSequence(a,b){
   for(let i = a+1;i<b;i++){
     console.log(i);
   }
}

missingSequence(45,50);


//19. Make an Atm simulator for atMAx 3 widrawls
function widrawalSimulator(amount,maxlimit){
    let dayLimit = maxlimit;
    let currBalance  = 20000;

    if(amount < 0 || Number.isNaN(amount) || amount === null || amount === ''){
    console.log("Make a valid Amount for widrawl!");
    return;
    }

    if(amount < currBalance && dayLimit > 0){
        currBalance -= amount;
        dayLimit--;
        console.log(`${amount} Amount Widrawl sucessFully!`)
    }
    else if (dayLimit === 0) console.log("Day Limit Reached!");
    else console.log("Insufficient Funds!");

    console.log(`CurrentBalance:${currBalance}`);
    if(amount!== null || !Number.isNaN(amount)) console.log(`Last Widrawl: ${amount}`);
}

widrawalSimulator(300,3);
widrawalSimulator(300,3);
widrawalSimulator(300,3);
widrawalSimulator(' ',3);









