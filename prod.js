// je dois etudier ce cas concernant le moyen de payement via whatsapp 
// const BtnCommander = document.querySelector(".btn-commande");
// let pageUrl = window.location.href; // Déclaration ici

// // Si tu es en local, remplace par ton lien GitHub
// if (pageUrl.includes("localhost")) {
//   pageUrl = "https://mboutou.github.io/test/HuileNila.html";
// }

// const encodedUrl = encodeURIComponent(pageUrl);
// const messageCommande = encodeURIComponent("bonjour clairwhy, Je souhaite commander ce produit : ");

// function commanderWhatsApp() {
//   window.open(`https://api.whatsapp.com/send?text=${messageCommande}%20${encodedUrl}`, '_blank', 'noopener,noreferrer');
// }

// if (BtnCommander) {
//   BtnCommander.addEventListener("click", () => {
//     commanderWhatsApp();
//   });
// }

document.addEventListener("DOMContentLoaded", () =>{
   let pageUrl = window.location.href;
   if(pageUrl.includes("localhost")){
      pageUrl= "https://mboutou.github.io/test/HuileNila.html";
   }
   const encodedUrl = encodeURIComponent(pageUrl);
   const Produittitle = encodeURIComponent("Découvre le produit Huile Nila")
   
   console.log(encodedUrl)
   
  // Fonctions de partage
  function partagerSurFacebook() {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank', 'noopener,noreferrer');
  }

  function partagerSurWhatsApp() {
    window.open(`https://api.whatsapp.com/send?text=${Produittitle}%20${encodedUrl}`, '_blank', 'noopener,noreferrer');
  }

  function partagerSurLinkedIn() {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank', 'noopener,noreferrer');
  }

  function ouvrirInstagram() {
    window.open(`https://www.instagram.com/ton_nom_d_utilisateur/`, '_blank', 'noopener,noreferrer');
  }

  const btnFacebook = document.getElementById("fa-facebook-f");
  const btnWhatsApp = document.getElementById("fa-whatsapp");
  const btnLinkedIn = document.getElementById("fa-linkedin-in");
  const btnInstagram = document.getElementById("fa-instagram");

  if(btnFacebook){btnFacebook.addEventListener("click",partagerSurFacebook)}
  if(btnWhatsApp){btnWhatsApp.addEventListener("click",partagerSurWhatsApp)}
  if(btnInstagram){btnInstagram.addEventListener("click",ouvrirInstagram)}
  if(btnLinkedIn){btnLinkedIn.addEventListener("click",partagerSurLinkedIn)}
})