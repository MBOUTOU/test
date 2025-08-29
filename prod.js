const BtnCommander = document.querySelector(".btn2")

BtnCommander.addEventListener("click", () =>{
  commanderWhatsApp();
})

// Si tu es en local, remplace par ton lien GitHub
if (pageUrl.includes("localhost")) {
  pageUrl = "https://mboutou.github.io/test/HuileNila.html";
}

const encodedUrl = encodeURIComponent(pageUrl);
const messageCommande = encodeURIComponent("Je souhaite commander ce produit : ");

// function commanderFacebook() {
//   window.open(`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${messageCommande}`, '_blank', 'noopener,noreferrer');
// }

// function commanderTwitter() {
//   window.open(`https://twitter.com/intent/tweet?url=${pageUrl}&text=${messageCommande}`, '_blank', 'noopener,noreferrer');
// }

function commanderWhatsApp() {
  window.open(`https://api.whatsapp.com/send?text=${messageCommande}%20${pageUrl}`, '_blank', 'noopener,noreferrer');
}