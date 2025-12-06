//Understanding adding and creating element dynamically in dom tree

const myelem = document.createElement('h1');

console.log(myelem);

myelem.textContent = `Created Dynamically!`;
myelem.style.color = `lightseagreen`;
document.body.append(myelem);

const btn = document.createElement('button');
btn.innerHTML = `Add More!`;

const btn2 = document.createElement('button');
btn2.innerHTML = `Delete!`;

btn.style.padding = `10px 30px`;
btn.style.backgroundColor = `red`;

btn.style.border = `none`;
btn.style.color = `white`;


btn2.style.padding = `10px 30px`;
btn2.style.backgroundColor = `red`;

btn2.style.border = `none`;
btn2.style.color = `white`;

const btns = document.querySelector(".btns");

btns.appendChild(btn);
btns.appendChild(btn2);

const container = document.querySelector(".container");

btn.addEventListener('click',()=>{
    let elem = document.createElement("div");
    elem.innerHTML = `Toast Added!`;
    elem.classList.add('t');

    container.appendChild(elem);
})

btn2.addEventListener('click',()=>{
    const singleElem = document.querySelector(".t");
    if(singleElem){
        singleElem.remove(); 
        // inorder to remove we use this on element not on the body because it can remove evry elem when used on body
    }
})







