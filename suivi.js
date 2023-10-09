let tbodysuivi = document.querySelector('.tbodysuivi');
let searchsuivi = document.querySelector('#searchsuivi');
let loginProfil = document.querySelector('#loginProfil');
let triLot = document.querySelector('.triLot');
let triEtat = document.querySelector('.triEtat');
let triDate = document.querySelector('.triDate');
let triRapport = document.querySelector('.triRapport');

let titrerapport = ''
// afficher les donées de suivi
suivis.forEach(element => {
    tbodysuivi.innerHTML += `<tr>
                              <td class="tr text">${element.lot}</td>
                              <td class="text">${element.etat}</td>
                              <td class="text">${element.date}</td>
                              <td class="text rap">${element.rapport}</td>
                              <td class="TR text">
                                <a href="suividetail.html" class="voir"><button>voir</button></a>
                              </td>
                            </tr>`
      
});
let voir = document.querySelectorAll('.voir');
//button voir page suivi details
voir.forEach(element => {
  element.addEventListener('click', () =>{
    let rapp = element.parentElement.parentElement.querySelector('.rap').textContent;
    if (rapp === "Disponnible") {
      let tiitre =element.parentElement.parentElement.firstElementChild.textContent;
      titrerapport = tiitre;
      localStorage.setItem('cles',JSON.stringify(titrerapport))
    }
    else{
      alert('Rapport Non Disponnible');
      titrerapport = "Non Disponnible";
      localStorage.setItem('cles',JSON.stringify(titrerapport))
    }
  }) 
});
 


//button recherche
searchsuivi.addEventListener('input', () => {
  let search = '';
  search = suivis.filter((el) =>
      el.rapport.toUpperCase().includes(searchsuivi.value.toUpperCase().split(' '))
  );
  if(searchsuivi.value != ''){
        if(search != ''){
          tbodysuivi.innerHTML = ''
          search.forEach(element => {
            tbodysuivi.innerHTML += `<tr>
                                    <td class="tr text">${element.lot}</td>
                                    <td class="text">${element.etat}</td>
                                    <td class="text">${element.date}</td>
                                    <td class="text">${element.rapport}</td>
                                    <td class="TR text">
                                      <a href="suividetail.html" class="voir"><button>voir</button></a>
                                    </td>
                                  </tr>`
           });
        }
        else{
          tbodysuivi.innerHTML = ''
          tbodysuivi.innerHTML = `<tr><td class="tr TR text"  colspan="5">Aucune donnée à afficher</td></tr>` 
        }
  }
  else{
    tbodysuivi.innerHTML = ''
    suivis.forEach(element => {
      tbodysuivi.innerHTML += `<tr>
                                <td class="tr text">${element.lot}</td>
                                <td class="text">${element.etat}</td>
                                <td class="text">${element.date}</td>
                                <td class="text">${element.rapport}</td>
                                <td class="TR text">
                                  <a href="suividetail.html" class="voir"><button>voir</button></a>
                                </td>
                              </tr>`
  });
  }
});

// afficher la photo de profil
let users = JSON.parse(localStorage.getItem("compte"))
let showavatar = ()=>{
  loginProfil.src = users.profil;
  console.log(users.profil)
}
showavatar();



// ========================================================


// button pour trier les facture
let fois = 0;
const affiContent = (aa)=>{
  tbodysuivi.innerHTML ='';
  aa.forEach(element => {
    tbodysuivi.innerHTML += `<tr>
                              <td class="tr text">${element.lot}</td>
                              <td class="text">${element.etat}</td>
                              <td class="text">${element.date}</td>
                              <td class="text rap">${element.rapport}</td>
                              <td class="TR text">
                                <a href="suividetail.html" class="voir"><button>voir</button></a>
                              </td>
                            </tr>`
      
});
}

// button pour trier les lots
triLot.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'lot' de manière décroissante
    
    if (fois == 0) {
      triLot.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
        let fact = '';
        suivis.sort((a, b) => {
            fact = b.lot.localeCompare(a.lot);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(suivis)
    }
    else{
      triLot.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
      suivis.sort((a, b) => {
            return a.lot.localeCompare(b.lot);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(suivis)
    }
    
})
// button pour trier les etats
triEtat.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'etat' de manière décroissante
    
    if (fois == 0) {
      triEtat.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
        let fact = '';
        suivis.sort((a, b) => {
            fact = b.etat.localeCompare(a.etat);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(suivis)
    }
    else{
      triEtat.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
      suivis.sort((a, b) => {
            return a.etat.localeCompare(b.etat);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(suivis)
    }
    
})
// button pour trier les date
triDate.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'date' de manière décroissante
    
    if (fois == 0) {
      triDate.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
        let fact = '';
        suivis.sort((a, b) => {
            fact = b.date.localeCompare(a.date);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(suivis)
    }
    else{
      triDate.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
      suivis.sort((a, b) => {
            return a.date.localeCompare(b.date);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(suivis)
    }
    
})
// button pour trier les rapport
triRapport.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'rapport' de manière décroissante
    
    if (fois == 0) {
      triRapport.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
        let fact = '';
        suivis.sort((a, b) => {
            fact = b.rapport.localeCompare(a.rapport);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(suivis)
    }
    else{
      triRapport.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
      suivis.sort((a, b) => {
            return a.rapport.localeCompare(b.rapport);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(suivis)
    }
    
})