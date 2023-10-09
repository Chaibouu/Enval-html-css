let tbodyfacture = document.querySelector('.tbodyfacture');
let triFacture = document.querySelector('.triFacture');
let triLaboratoire = document.querySelector('.triLaboratoire');
let triDate = document.querySelector('.triDate');
let triRapport = document.querySelector('.triRapport');
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
let xxxx = 0;
triFacture.addEventListener('click',()=>{
    // function compareNumbers(a, b) {
    //     return a - b;
    // }
    // factures.forEach(element => {
    //     let fact = element.map(el=> element.facture)
    //     console.log(fact);
    // });
    // let fact = factures.map((el,index)=> el.facture)
    //      console.log(fact.sort(compareNumbers));

    // Triez le tableau en fonction de la propriété 'facture' de manière décroissante
  
    if (xxxx=1) {
        factures.sort((a, b) => {
            return b.facture.localeCompare(a.facture);
        });
        
        // Affichez le tableau trié
        console.log(factures);
        console.log(xxxx);
    }
    else{
        factures.sort((a, b) => {
            return a.facture.localeCompare(b.facture);
        });
        
        // Affichez le tableau trié
        console.log(factures);
        console.log(x);
    }
    
})