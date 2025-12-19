document.addEventListener("DOMContentLoaded",()=>{
    const para = document.querySelector("p");

    const char = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890#%$*^><?/-+=@!`;
    const text = para.innerText;

    let iteration = 0;
    let interval = null;

    function randomText(){
        const str = text.split("").map((ch,i)=>{
           if(i < iteration)return ch;
           return char.split("")[Math.floor(Math.random()*char.length)];
        }).join("");
        para.innerText = str;
        iteration += 0.30;

        if (iteration >= text.length) {
            clearInterval(interval);
            interval = null;
        }

    }

    para.addEventListener("mouseenter",()=>{
       if(interval)return;

       iteration = 0;
       interval = setInterval(randomText,20);
    })
})