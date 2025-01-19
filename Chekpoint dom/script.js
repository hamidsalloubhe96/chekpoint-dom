var produit=document.getElementsByClassName("box")
for(let i=0;i<produit.length;i++){
    let btnPlus=produit[i].children[4].children[2]
    let nombre=produit[i].children[4].children[1]
    let total=produit[i].children[3].children[1]
    let prix=produit[i].children[2].children[1]
    
  let prixUnitaire=parseInt(prix.innerText)
  let qty=parseInt(nombre.innerText)

btnPlus.addEventListener("click",function(){
    qty++
    nombre.innerText=qty
    total.innerText=prixUnitaire*qty
})
  }

  

 
  