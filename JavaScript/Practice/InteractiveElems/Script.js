document.addEventListener("DOMContentLoaded",()=>{
    let input = document.querySelector("input");
    const ul = document.querySelector("ul");
    const btn = document.querySelector("button");


    console.log(input,ul,btn);


    function updatesList(){
        if(input.value.trim() === ''){
            alert("Nothing to add!");
            return;
        }

        const newList  = document.createElement("li");
        newList.textContent = input.value.trim();

        ul.appendChild(newList);
        alert("Sucessfully Added to the list!");

        clearInput();
        RemoveFromList();
    }

    function RemoveFromList(){
        const li = document.querySelectorAll("ul li");

        li.forEach((l,i)=>{
            l.addEventListener('click',()=>{
                ul.removeChild(l);
                alert("Sucessfully Deleted!");
                return;
            })
        })

    }

    const clearInput = ()=>{
        input.value = "";
    }

    btn.addEventListener('click',updatesList);
    RemoveFromList();
})