function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>fn.apply(this,args),delay);
    };
}

const handleDebouncen = debounce(()=>{
    console.log("hey!");
},3000);

handleDebouncen();
handleDebouncen();