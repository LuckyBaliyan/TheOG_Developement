document.addEventListener("DOMContentLoaded",()=>{


    const card = document.querySelector(".card");
    const  i = document.querySelector(".love");
    const img = document.querySelector("img");

    console.log(card,i,img);

    img.addEventListener('dblclick',()=>{
        i.style.opacity = .7;
        i.style.transform = `translate(-50%, -50%) scale(1) rotate(0)`;

        setTimeout(()=>{
            i.style.transform = `translate(-50%,-200%) scale(1) rotate(30deg)`;
            i.style.opacity = 0;
        },800)

        setTimeout(()=>{
            i.style.transform = `translate(-50%, -50%) scale(0) rotate(-60deg)`;
        },1000);
    })

})