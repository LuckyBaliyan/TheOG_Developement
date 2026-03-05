//Starting with Dom

//DOM:- document object model 

//4 Pillars of DOM :-
/*

-- Selection of an Element
-- Changing in Html
-- Changing in Css
-- Eventlistners in Js

*/

//document in DOM 

/*
 HTML renders in the form of tree with nodes as parent and child divs or tags.
 document is the Object in DOM 
*/

let h1 = document.querySelector('h1');
console.log(h1);

h1.style.color = `#fff`;
h1.style.fontSize = `7rem`;
const span = document.createElement("span");
span.innerText = 'js!';
span.style.color = `black`;
h1.innerHTML = `Hello DOM by `;
h1.appendChild(span);

/*
    document
      /   \
    head  body
     |    | \
   title  h1  p

*/


// Slecting elements by their class
const box = document.querySelector('.box');
console.log(box);

//if we are using getElementsbyClassName so we are getting a node list since id can be unique but same class can 
//be assigned to many elements 

const box2 = document.getElementsByClassName('box');
// that's why we have Elemetssss this s in getElementsByClassName

console.log(box2[0]);

//adding event listners
box.addEventListener("mouseover", () => {
    let transformOffset = Math.floor(Math.random()*90-10)
    console.log(transformOffset);
    box.style.transform = `translateX(${transformOffset}vw) rotate(${transformOffset/0.56}deg)
    translateY(${transformOffset*0.5}vh)`;
});



           