var produit = document.getElementsByClassName("box");
let totalCommande = 0;

for (let i = 0; i < produit.length; i++) {
  let btnPlus = produit[i].children[4].children[2];
  let nombre = produit[i].children[4].children[1];
  let total = produit[i].children[3].children[1];
  let prix = produit[i].children[2].children[1];

  let prixUnitaire = parseInt(prix.innerText);
  let qty = parseInt(nombre.innerText);
  total.innerText = prixUnitaire * qty;
  totalCommande += parseInt(total.innerText);
  document.getElementById('tyu').innerText = totalCommande;

  let btnmoin = produit[i].children[4].children[0];
  let bntlike = produit[i].children[5].children[0].children[0];
  let btndelete = produit[i].children[5].children[1].children[0];

  btnPlus.addEventListener("click", function () {
    qty++;
    nombre.innerText = qty;
    total.innerText = prixUnitaire * qty;
    totalCommande = 0;
    for (let j = 0; j < produit.length; j++) {
      let totalProduit = parseInt(produit[j].children[3].children[1].innerText);
      totalCommande += totalProduit;
    }
    document.getElementById('tyu').innerText = totalCommande;
  });

  btnmoin.addEventListener("click", function () {
    if (qty > 0) {
      qty--;
      nombre.innerText = qty;
      total.innerText = prixUnitaire * qty;
    }
    totalCommande = 0;
    for (let j = 0; j < produit.length; j++) {
      let totalProduit = parseInt(produit[j].children[3].children[1].innerText);
      totalCommande += totalProduit;
    }
    document.getElementById('tyu').innerText = totalCommande;
  });

  bntlike.addEventListener("click", function () {
    if (bntlike.style.color === 'red') {
      bntlike.style.color = 'black';
    } else {
      bntlike.style.color = 'red';
    }
  });

  let box = produit[i];
  if (box) {
    btndelete.addEventListener("click", function () {
      box.remove();
      totalCommande = 0;
      for (let j = 0; j < produit.length; j++) {
        let totalProduit = parseInt(produit[j].children[3].children[1].innerText);
        totalCommande += totalProduit;
      }
      document.getElementById('tyu').innerText = totalCommande;
    });
  }
}