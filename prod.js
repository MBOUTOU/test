const BtnCommander = document.querySelector(".btn-commande");

let pageUrl = window.location.href; // Déclaration ici

// Si tu es en local, remplace par ton lien GitHub
if (pageUrl.includes("localhost")) {
  pageUrl = "https://mboutou.github.io/test/HuileNila.html";
}

const encodedUrl = encodeURIComponent(pageUrl);
const messageCommande = encodeURIComponent("Je souhaite commander ce produit : ");

function commanderWhatsApp() {
  window.open(`https://api.whatsapp.com/send?text=${messageCommande}%20${encodedUrl}`, '_blank', 'noopener,noreferrer');
}

if (BtnCommander) {
  BtnCommander.addEventListener("click", () => {
    commanderWhatsApp();
  });
}
