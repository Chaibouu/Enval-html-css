let tbodyfacture = document.querySelector('.tbodyfacture');
let triFacture = document.querySelector('.triFacture');
let triLaboratoire = document.querySelector('.triLaboratoire');
let triDate = document.querySelector('.triDate');
let searchfacture = document.querySelector('#searchfacture');
let loginProfil = document.querySelector('#loginProfil');

// afficher les donées de facture
factures.forEach(element => {
    tbodyfacture.innerHTML += `<tr  >
                                    <td class="tr text">${element.facture}</td>
                                    <td class="text">${element.laboratoire}</td>
                                    <td class="text">${element.date}</td>
                                    <td class="TR text"><button>voir</button></td>
                                </tr>`
});
//button recherche
searchfacture.addEventListener('input', () => {
    let search = '';
    search = factures.filter((el) =>
        el.laboratoire.toUpperCase().includes(searchfacture.value.toUpperCase().split(' '))
    );
    console.log(search)
    if(searchfacture.value != ''){
        
        if(search !='' ){
            tbodyfacture.innerHTML = ''
            search.forEach(element => {
            tbodyfacture.innerHTML += `<tr  >
                                           <td class="tr text">${element.facture}</td>
                                           <td class="text">${element.laboratoire}</td>
                                           <td class="text">${element.date}</td>
                                           <td class="TR text"><button>voir</button></td>
                                       </tr>`
            });
        }
        else{
            tbodyfacture.innerHTML = ''
            tbodyfacture.innerHTML = `<tr><td class="tr TR text"  colspan="4">Aucune donnée à afficher</td></tr>` 
        }
        
    }
    else{
        tbodyfacture.innerHTML = ''
        factures.forEach(element => {
            tbodyfacture.innerHTML += `<tr  >
                                            <td class="tr text">${element.facture}</td>
                                            <td class="text">${element.laboratoire}</td>
                                            <td class="text">${element.date}</td>
                                            <td class="TR text"><button>voir</button></td>
                                        </tr>`
        }); 
    }
});




// // Écoutez l'événement "input" sur l'élément
// searchfacture.addEventListener('input', () => {
//     console.log(searchfacture.value);
//     let search = '';
//     search = factures.filter((el) =>
//         el.laboratoire.toUpperCase().split(' ') // Split par espace
//         .some(word => word == searchfacture.value.toUpperCase()) // Vérifie si au moins un mot correspond
//     );
//     console.log(search);
// });





// afficher la photo de profil
let users = JSON.parse(localStorage.getItem("compte"))
let showavatar = ()=>{
  loginProfil.src = users.profil;
}
showavatar();
// ================================


// button pour trier les facture
let fois = 0;
const affiContent = (aa)=>{
    tbodyfacture.innerHTML ='';
        aa.forEach(element => {
            tbodyfacture.innerHTML += `<tr  >
                                            <td class="tr text">${element.facture}</td>
                                            <td class="text">${element.laboratoire}</td>
                                            <td class="text">${element.date}</td>
                                            <td class="TR text"><button>voir</button></td>
                                        </tr>`
        });
}

// button pour trier les facture
triFacture.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'facture' de manière décroissante
  
    if (fois == 0) {
        let fact = '';
        factures.sort((a, b) => {
            triFacture.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
            fact = b.facture.localeCompare(a.facture);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(factures)
    }
    else{
        triFacture.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
        factures.sort((a, b) => {
            return a.facture.localeCompare(b.facture);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(factures)
    }
    
})
// button pour trier les laboratoire
triLaboratoire.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'facture' de manière décroissante
  
    if (fois == 0) {
        triLaboratoire.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
        let fact = '';
        factures.sort((a, b) => {
            fact = b.laboratoire.localeCompare(a.laboratoire);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(factures)
    }
    else{
        triLaboratoire.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
        factures.sort((a, b) => {
            return a.laboratoire.localeCompare(b.laboratoire);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(factures)
    }
    
})
// button pour trier les date
triDate.addEventListener('click',()=>{
// Triez le tableau en fonction de la propriété 'facture' de manière décroissante
  
    if (fois == 0) {
        triDate.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-z-a iconfiltre"></i>`
        let fact = '';
        factures.sort((a, b) => {
            fact = b.date.localeCompare(a.date);
            return fact
        });
        fois=1;
        // fonction pour afficher le contenue
        affiContent(factures)
    }
    else{
        triDate.innerHTML = 'Commande'+`<i class="fa-solid fa-arrow-down-a-z iconfiltre"></i>`
        factures.sort((a, b) => {
            return a.date.localeCompare(b.date);
        });
        
        fois=0;
        // fonction pour afficher le contenue
        affiContent(factures)
    }
    
})