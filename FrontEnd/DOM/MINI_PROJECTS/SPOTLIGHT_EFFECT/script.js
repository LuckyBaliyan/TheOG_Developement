document.addEventListener("DOMContentLoaded",()=>{
    document.addEventListener("mousemove",(dets)=>{
        console.log(dets.clientX,dets.clientY);

        //Mutating the css root variables from the script
        document.body.style.setProperty("--x",dets.clientX+'px');
        document.body.style.setProperty("--y",dets.clientY+'px');
    })
})