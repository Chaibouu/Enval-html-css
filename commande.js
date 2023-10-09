let tbodycommande = document.querySelector('.tbodycommande');
let triLaboratoire = document.querySelector('.triLaboratoire');
let triCommande = document.querySelector('.triCommande');
let triDate = document.querySelector('.triDate');
let triStatut = document.querySelector('.triStatut');
let searchcommande = document.querySelector('#searchcommande');
let loginProfil = document.querySelector('#loginProfil');

// afficher les donées de commande
commandes.forEach(el => {
    tbodycommande.innerHTML += `<tr>
                                  <td class="tr text">${el.commande}</td>
                                  <td class="text">${el.laboratoire}</td>
                                  <td class="text">${el.date}</td>
                                  <td class="text"><span class="statut text">${el.statut}</span></td>
                                  <td class="TR text"><button>voir</button></td>
                                </tr>`
  let statut = document.querySelectorAll('.statut')
   statut.forEach(element => {
    if (element.textContent === 'En cours') {
      element.style.color = 'red'
    }
    else if (element.textContent === 'Terminée') {
      element.style.color = 'green'
    }
   });
});

//button recherche
searchcommande.addEventListener('input', () => {
  let search = '';
  search = commandes.filter((el) =>
      el.laboratoire.toUpperCase().includes(searchcommande.value.toUpperCase().split(' ')));
      
  if(searchcommande.value != ''){
      if(search !=''){
        tbodycommande.innerHTML = ''
          search.forEach(el => {
            tbodycommande.innerHTML += `<tr>
                                          <td class="tr text">${el.commande}</td>
                                          <td class="text">${el.laboratoire}</td>
                                          <td class="text">${el.date}</td>
                                          <td class="text"><span class="statut text">${el.statut}</span></td>
                                          <td class="TR text"><button>voir</button></td>
                                        </tr>`
            let statut = document.querySelectorAll('.statut')
            statut.forEach(element => {
             if (element.textContent === 'En cours') {
               element.style.color = 'red'
             }
             else if (element.textContent === 'Terminée') {
               element.style.color = 'green'
             }
          });
        });
      }
      else{
          tbodycommande.innerHTML = ''
          tbodycommande.innerHTML = `<tr><td class="tr TR text"  colspan="5">Aucune donnée à afficher</td></tr>` 
      }
  }
  else{
    tbodycommande.innerHTML = ''
    commandes.forEach(el => {
      tbodycommande.innerHTML += `<tr>
                                    <td class="tr text">${el.commande}</td>
                                    <td class="text">${el.laboratoire}</td>
                                    <td class="text">${el.date}</td>
                                    <td class="text"><span class="statut text">${el.statut}</span></td>
                                    <td class="TR text"><button>voir</button></td>
                                  </tr>`
    let statut = document.querySelectorAll('.statut')
     statut.forEach(element => {
      if (element.textContent === 'En cours') {
        element.style.color = 'red'
      }
      else if (element.textContent === 'Terminée') {
        element.style.color = 'green'
      }
     });
  });
  }
});


// afficher la photo de profil
let users = JSON.parse(localStorage.getItem("compte"))
let showavatar = ()=>{
  loginProfil.src = users.profil;
}
showavatar();
// ========================================================


// button pour trier les facture
let fois = 0;
const affiContent = (aa)=>{
  tbodycommande.innerHTML ='';
    aa.forEach(el => {
      tbodycommande.innerHTML += `<tr>
                                    <td class="tr text">${el.commande}</td>
                                    <td class="text">${el.laboratoire}</td>
                                    <td class="text">${el.date}</td>
                                    <td class="text"><span class="statut text">${el.statut}</span></td>
                                    <td class="TR text"><button>voir</button></td>
                                  </tr>`
    let statut = document.querySelectorAll('.statut')
     statut.forEach(element => {
      if (element.textContent === 'En cours') {
        element.style.color = 'red'
      }
      else if (element.textContent === 'Terminée') {
        element.style.color = 'green'
      }
     });
  });
}

// button pour trier les commandes
triCommande.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'commande' de manière décroissante
    
    if (fois == 0) {
      triCommande.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
        let fact = '';
        commandes.sort((a, b) => {
            fact = b.commande.localeCompare(a.commande);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(commandes)
    }
    else{
      triCommande.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
      commandes.sort((a, b) => {
            return a.commande.localeCompare(b.commande);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(commandes)
    }
    
})
// button pour trier les laboratoitre
triLaboratoire.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'laboratoire' de manière décroissante
  
    if (fois == 0) {
      triLaboratoire.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
        let fact = '';
        commandes.sort((a, b) => {
            fact = b.laboratoire.localeCompare(a.laboratoire);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(commandes)
    }
    else{
      triLaboratoire.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
      commandes.sort((a, b) => {
            return a.laboratoire.localeCompare(b.laboratoire);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(commandes)
    }
    
})
// button pour trier les date
triDate.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'date' de manière décroissante
  
    if (fois == 0) {
      triDate.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
        let fact = '';
        commandes.sort((a, b) => {
            fact = b.date.localeCompare(a.date);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(commandes)
    }
    else{
      triDate.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
      commandes.sort((a, b) => {
            return a.date.localeCompare(b.date);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(commandes)
    }
    
})
// button pour trier les statut
triStatut.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'statut' de manière décroissante
  
    if (fois == 0) {
      triStatut.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
      triStatut.lastElementChild=`<i class="fa-solid fa-arrow-down-z-a"></i>`
      console.log(triStatut.lastElementChild);
        let fact = '';
        commandes.sort((a, b) => {
            fact = b.statut.localeCompare(a.statut);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(commandes)
    }
    else{
      triStatut.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
      commandes.sort((a, b) => {
            return a.statut.localeCompare(b.statut);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(commandes)
    }
    
})
