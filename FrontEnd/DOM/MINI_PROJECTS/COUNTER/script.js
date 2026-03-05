// Counter app
const h1 =  document.querySelector('h1');
const btns = document.querySelectorAll('button');


function change(action){
    let counter  = Number(h1.innerText);
    switch (action){
        case 'inc':
            return counter + 1;
        default:
            if(counter <= 0) return 0;
            else return counter - 1;
    }
}

btns.forEach((btn,i)=>{
    if(i % 2 !== 1){
        btn.addEventListener('click',()=>{
            h1.textContent = change('inc');
        })
    }
    else{
        btn.addEventListener('click',()=>{
            h1.textContent = change('dec');
        })
    }
})


