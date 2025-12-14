document.addEventListener("DOMContentLoaded",()=>{

    const img = document.querySelector(".cursor");
    const main = document.querySelector("main");

    main.addEventListener("mousemove",(dets)=>{
        img.style.left = dets.x + 'px';
        img.style.top = dets.y + 'px';
    })
})