
//Project 02
const main = document.querySelector("main");
const btn = document.querySelector("main button");


btn.addEventListener('click',()=>{
    const cube  = document.createElement("div");
    cube.classList.add("cube");

    let c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);

    let randomOffset = Math.floor(Math.random()*360);


    cube.style.left = `${getX()}%`
    cube.style.top = `${getY()}%`;

    cube.style.transform = `rotate(${randomOffset}deg)`;

    cube.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

    cube.style.position = 'absolute';

    main.appendChild(cube);
})



function getX(){
    return Math.floor(Math.random()*100);
}

function getY(){
    return Math.floor(Math.random()*100);
}




