const BtnCommander = document.querySelector(".btn-commande");

let pageUrl = window.location.href; // Déclaration ici

// Si tu es en local, remplace par ton lien GitHub
if (pageUrl.includes("localhost")) {
  pageUrl = "https://mboutou.github.io/test/HuileNila.html";
}

const encodedUrl = encodeURIComponent(pageUrl);
const messageCommande = encodeURIComponent("bonjour clairwhy, Je souhaite commander ce produit : ");

function commanderWhatsApp() {
  window.open(`https://api.whatsapp.com/send?text=${messageCommande}%20${encodedUrl}`, '_blank', 'noopener,noreferrer');
}

if (BtnCommander) {
  BtnCommander.addEventListener("click", () => {
    commanderWhatsApp();
  });
}

// // sur les petites interfaces, voici ce qui doit se faire

// const ParentNavbar = document.querySelector(".nav-links")
// const Elementflottant = document.querySelector(".flottant-block");
// let timeoutDelay;

// let VerificationMedia = window.matchMedia("(hover: none)").matches;

// if (VerificationMedia) {
//   ParentNavbar.addEventListener("click", (e) => {
//     e.stopPropagation(); // ← attention, il manque les parenthèses dans ton code original
//     ParentNavbar.classList.toggle("active");
//     Elementflottant.classList.toggle("active");
//   });
// }

// else{

//     ParentNavbar.addEventListener("mouseenter", () =>{
//         clearTimeout(timeoutDelay);
//         Elementflottant.classList.add("active");
//         ParentNavbar.classList.add("active");
//     });
//     ParentNavbar.addEventListener("mouseleave", () =>{
//       timeoutDelay = setTimeout(() =>{
//           ParentNavbar.classList.remove("active");
//           Elementflottant.classList.remove("active");
//       }, 100)
//     });

//     Elementflottant.addEventListener("mouseenter", ()=>{
//       clearTimeout(timeoutDelay);
//       Elementflottant.classList.add("active")  
//     });
//     Elementflottant.addEventListener("mouseleave", ()=>{
//       timeoutDelay = setTimeout(() =>{
//          Elementflottant.classList.remove("active");
//       },200);
//     })
// }