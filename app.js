// la partie du sorvole de la categorie 

const elementNavbar =  document.querySelector(".survoleCategorie");
const popupBlock =  elementNavbar.querySelector(".flotant-block");
let timeoutid; 

// cette ligne permet de detecter si l'apparail  est tactile ou pas !
let detecteMedia =  window.matchMedia("(hover: none)").matches;
    
   //  if(detecteMedia){
   //    console.log("Appareil tectile detecté")
   //  }else{
   //    console.log("Souris detecté !")
   //  }
if(detecteMedia){
    let IsOpen = false;

   elementNavbar.addEventListener("click", (e)=>{
      e.stopPropagation;
      IsOpen = ! IsOpen;
      elementNavbar.classList.toggle("active", IsOpen)
      popupBlock.classList.toggle("active", IsOpen)
   })
}
else{
    
  elementNavbar.addEventListener("mouseenter", () =>{
   // le cleartimeout va annuler le timeout precedent pour ne qu'il est plusieurs timeout 
   clearTimeout(timeoutid);
      popupBlock.classList.add("active");
      elementNavbar.classList.add("active");
  });
  elementNavbar.addEventListener("mouseleave", () =>{
      timeoutid = setTimeout(() =>{
         popupBlock.classList.remove("active");
         elementNavbar.classList.remove("active");
      },100);
  });
  popupBlock.addEventListener("mouseenter", () =>{
     clearTimeout(timeoutid);
     popupBlock.classList.add('active')
  });
  
  popupBlock.addEventListener("mouseleave", () =>{
     timeoutid= setTimeout(() =>{
      popupBlock.classList.remove('active')
     }, 200)
  })

}











// --------------------------------------------------

const Navigation = document.querySelector(".btn-navigation");
const linksElement = document.querySelector(".nav-links");
const bodyStyle = document.querySelector("body")

  Navigation.addEventListener("click", () =>{
      Navigation.classList.toggle("active");
      linksElement.classList.toggle("active")
      bodyStyle.classList.toggle("active");
  })

//   ------------------------------------------------

const Allbox = document.querySelectorAll(".boite-image");
const Allheader = document.querySelectorAll(".header-box-element");
const Allfooter = document.querySelectorAll(".footer-box-element");

Allbox.forEach((box) =>{
   box.addEventListener("mouseenter", () =>{
    const header = box.querySelector(".header-box-element");
    const Second = box.querySelector(".footer-box-element");
     
    const Idheader = header.classList.contains("active");
    const IdSecond = Second.classList.contains("active");

    Allbox.forEach((b) =>{b.classList.remove("active")});
    Allheader.forEach((h) =>{h.classList.remove("active")});
    Allfooter.forEach((f) =>{f.classList.remove("active")});
   
   if(!Idheader || !IdSecond){
      header.classList.add("active");
      Second.classList.add("active");
   }  

    box.classList.add("active");
   }) 
})


// ------------------------------------------

const buttonTest = document.querySelector(".btn_cash")
let timeoutrequest;
 buttonTest.addEventListener("click", ()=>{
     clearTimeout(timeoutrequest);
     timeoutrequest = setTimeout(() =>{
      console.log("je suis là");
     }, 2000)
 })
 