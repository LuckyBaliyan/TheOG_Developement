console.log("Hello World!");

const h1 = document.querySelector(".text");


//Methods in js:- Method is a function which belongs to an object instead of a function which is on its own
var a = Math.random();  // ranges 0 - 1 
console.log(a);

// to generate values b/w 1 - 10

var b = Math.random()*10 // 0.5 * 10 = 5 
console.log(b);

// for generating till 10 and remove points 

var c = Math.floor(Math.random()*10+1);
console.log(c);

//function to generate random colors 

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");


const random = ()=>{
    let a = Math.floor(Math.random()*256);
    return a;
}

const applyBg = ()=>{
    console.log(random());
    let res = `rgba(${random()}, ${random()}, ${random()})`;
    h1.style.color = res;
    box.style.backgroundColor = res;
    btn.style.backgroundColor = res;
}

btn.addEventListener('click',()=>{
   applyBg();
   changeTeam();
})


//Accessing from array
const assets = ['Lion','Tiger','Girraf','Monkey','Bear'];
let res = Math.floor(Math.random()*assets.length);

console.log(assets[res]);

//array of objects
const teams = [
    { 
        Team: 'CSK', 
        primary: '#F9D423',       
        secondary: '#1A237E',     
        quote: 'Whistle Podu! Rise like the Lions.'
    },
    { 
        Team: 'MI', 
        primary: '#0D47A1',
        secondary: '#FFD700',
        quote: 'One Family. Five Times the Glory.'
    },
    { 
        Team: 'RCB', 
        primary: '#D50000',    
        secondary: '#212121', 
        quote: 'Play Bold. Roar Strong.'
    },
    { 
        Team: 'KKR', 
        primary: '#4A148C',
        secondary: '#FDD835',     
        quote: 'Korbo Lorbo Jeetbo!'
    },
    { 
        Team: 'SRH', 
        primary: '#FF6F00',     
        secondary: '#263238',     
        quote: 'Rise Up Like the Orange Army.'
    },
    { 
        Team: 'DC', 
        primary: '#1E88E5',      
        secondary: '#C62828',    
        quote: 'Roar Macha — Play with Passion.'
    },
    { 
        Team: 'RR', 
        primary: '#EC407A',       
        secondary: '#283593',     
        quote: 'Halla Bol! Royal Spirit Always.'
    },
    { 
        Team: 'GT', 
        primary: '#0D1B2A',       
        secondary: '#FFC857',     
        quote: 'Gujarat Grit — Fearless Always.'
    },
    { 
        Team: 'LSG', 
        primary: '#4FC3F7',     
        secondary: '#FF7043',     
        quote: 'Ab Hoga Tehka! Lucknow Style.'
    },
    { 
        Team: 'PBKS', 
        primary: '#C62828',      
        secondary: '#FAFAFA',     
        quote: 'Sher Squad — Play with Heart.'
    }
];


console.log(teams,teams[0],teams[0].Team);


const teamName = document.querySelector(".teamName");
const span = document.querySelector("span");

const teamBtn = document.querySelector(".btnt");

const changeTeam =  ()=>{
    const randomIndx  = Math.floor(Math.random()*teams.length);
    console.log(randomIndx);

    teamName.textContent = `${teams[randomIndx].Team}`;
    teamName.style.color = `${teams[randomIndx].secondary}`;
    teamName.style.backgroundColor = `${teams[randomIndx].primary}`;
    span.innerHTML = `${teams[randomIndx].quote}`;
}

teamBtn.addEventListener('click',()=>{
    changeTeam();
});