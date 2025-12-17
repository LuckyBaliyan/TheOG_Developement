document.addEventListener("DOMContentLoaded",()=>{
    const box = document.querySelector(".piano-container");

    const keys = [
      '#'
    ];

   const keyMap = {
  '#': `assets/28.mp3`,
  'A': `assets/29.mp3`,
  'S': `assets/30.mp3`,
  'D': `assets/31.mp3`,
  'F': `assets/32.mp3`,
  'G': `assets/33.mp3`,
  'H': `assets/34.mp3`,
  'J': `assets/35.mp3`,
  'K': `assets/36.mp3`,
  'L': `assets/37.mp3`,
  'Q': `assets/38.mp3`,
  'W': `assets/39.mp3`,
  'E': `assets/40.mp3`,
  'R': `assets/41.mp3`,
  'T': `assets/42.mp3`,
  'Y': `assets/43.mp3`,
  'U': `assets/44.mp3`,
  'I': `assets/45.mp3`,
  'O': `assets/46.mp3`,
  'P': `assets/47.mp3`,
  'Z': `assets/48.mp3`,
  'X': `assets/49.mp3`,
  'C': `assets/50.mp3`,
  'V': `assets/51.mp3`,
  'B': `assets/52.mp3`,
  'N': `assets/53.mp3`,
  'M': `assets/54.mp3`,
};


    for(let i = 65;i<91;i++){
       keys.push(String.fromCharCode(i))
    }

    keys.forEach((k,i)=>{
        const key = document.createElement("div");
        key.innerHTML = `<h2>${keys[i]}</h2>`;
        key.classList.add("key");
        box.appendChild(key);
        console.log(key); 
    });

    const getSrc = (key)=>{
       const myKey = keyMap[key];
       return myKey;
    }



    document.addEventListener('keydown',(e)=>{
        const key = e.key.toUpperCase();
        console.log(key);

        if(e.repeat)return;
        if(!keyMap[key])return;

        const audi = new Audio(`${getSrc(String(key))}`);
        const domKeys = document.querySelectorAll(".key");

        console.log(domKeys);
        domKeys.forEach((k,i)=>{
            const h2 = k.querySelector("h2");
            console.log(h2.innerText);
            if(h2.innerText === String(key)){
                k.classList.add("active");
            } 
        })
        audi.play();
    });

   
    document.addEventListener('keyup',(e)=>{
        const key = e.key.toUpperCase();

        document.querySelectorAll(".key").forEach((k)=>{
            if(k.innerText.trim() === key){
                k.classList.remove("active");
            }
        })
    })
    
})