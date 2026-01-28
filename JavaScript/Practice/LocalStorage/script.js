/*
•  Create a simple JavaScript program that stores a list of items in localStorage and 
displays them on the web page when it loads. 
*/

document.addEventListener("DOMContentLoaded",displayItems);

function addItems(){
    let input = document.querySelector("#itemInput");
    let item = input.value.trim();

    if(item == '')return;

    let items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(item);

    localStorage.setItem("items",JSON.stringify(items));

    input.value = "";
    displayItems();
}

function displayItems(){
    const items = JSON.parse(localStorage.getItem("items")) || [];
    let list = document.getElementById("listItems");

    list.innerHTML = "";

    items.forEach(item =>{
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    })
};

function filterItems(){
    let searchValue = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll("#listItems li");

    items.forEach(item=>{
        if(item.textContent.toLocaleLowerCase().includes(searchValue)){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });
}