document.addEventListener("DOMContentLoaded",()=>{
    const counter = document.querySelector("span");
    let val = Number(counter.innerText);

    const incBtn = document.querySelector(".add");
    const decBtn = document.querySelector(".sub");

    const Inc = ()=>{
        val++;
    }
    
    const dec = ()=>{
        if(val <= 0) val = 0;
        else val --;
    };

    incBtn.addEventListener("click",()=>{
        Inc();
        counter.innerText = String(val);
    })

    decBtn.addEventListener("click",()=>{
        dec();
        counter.innerText = String(val);
    })
})