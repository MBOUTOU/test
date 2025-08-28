const  survoleElement = document.querySelector(".survoleCategorie");
const Blockflotteant = document.querySelector(".flotant-block");
let timeoutrequest; 

survoleElement.addEventListener('mouseenter', () =>{
    clearTimeout(timeoutrequest);
    survoleElement.classList.add("active");
    Blockflotteant.classList.add("active");
})

survoleElement.addEventListener('mouseleave', () =>{
    timeoutrequest = setInterval(() =>{
       survoleElement.classList.remove("active");
       Blockflotteant.classList.remove("active");
    }, 100)
})

Blockflotteant.addEventListener("mouseenter", () =>{
     clearTimeout(timeoutrequest);
     Blockflotteant.classList.add("active");
})

Blockflotteant.addEventListener("mouseleave", () =>{
   timeoutrequest = setInterval(() =>{
        Blockflotteant.classList.remove("active");
   }, 100)
})