const BtnCommander = document.querySelector(".btn-commande")

BtnCommander.addEventListener("click", () =>{
   const ProduitName = "Huile de Nila"
   const ImageURL = "https://github.com/MBOUTOU/test/blob/main/produit%20(2).jpg";
   const Message = `Boujour Clairwhy je souhaite commander l'${ProduitName}`;
   const Lienwhatsapp =`https://wa.me/242068718977?text=${encodeURIComponent(Message)}`;
   window.open(Lienwhatsapp, '_blank');
})
