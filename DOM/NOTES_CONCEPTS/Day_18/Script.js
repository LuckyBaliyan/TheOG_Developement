//Asynchronus and Synchronus Programming 

//Js in default is synchrounus but we can make it asynchronus using the web API's

setTimeout(()=>{
    console.log("Hello");
},4000);

console.log("Hello");

setTimeout(()=>{
    console.log("Hello");
},2000);

const btn = document.querySelector(".generate");
btn.addEventListener('click',()=>{
    const h2 = document.createElement("h1");
    h2.innerHTML = `Hello Guys!`;
    h2.style.color = `red`;
    h2.style.fontSize = '2rem';

    setTimeout(()=>{
       document.body.appendChild(h2);
    },2000);

    let a = setInterval(()=>{
       const h2 = document.createElement("h1");
       h2.innerHTML = `Hello Guys!`;
       h2.style.color = `red`;
       h2.style.fontSize = '2rem';
       document.body.appendChild(h2);
    },300);

    //Clear interval on a setTimeOut so that it will not stop immidiately.
    setTimeout(()=>{clearInterval(a)},5000);
});


