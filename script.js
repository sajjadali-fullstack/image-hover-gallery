let elements = document.querySelectorAll(".element");


elements.forEach( (element) => {
    
    // console.log(element.childNodes[3])

    element.addEventListener("mouseenter", (event) => {  
        element.childNodes[3].style.opacity = 1;
      
    });

    element.addEventListener("mouseleave", (event) => {  
        element.childNodes[3].style.opacity = 0;

    });

    element.addEventListener("mousemove", (event) => {  
        element.childNodes[3].style.left = event.x + "px" 
        element.childNodes[3].style.top = event.y + "px" 
      

        
    });

});



// FOR ONE ELEMENT / IMAGE [Checking Purpose]

// let element1 = document.querySelector("#elem-1");
// let elementImg = document.querySelector("#elem-1 > img");


// element1.addEventListener("mousemove", (event) => { 
// elementImg.style.left = event.x + "px" 
// elementImg.style.top = event.y + "px" 
// });

// element1.addEventListener("mouseenter", (event) => {
//     elementImg.style.opacity = 1;
// });

// element1.addEventListener("mouseleave", (event) => {
//     elementImg.style.opacity = 0;
// });
