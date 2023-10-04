let tbodyfacture = document.querySelector('.tbodyfacture');
let searchfacture = document.querySelector('#searchfacture');


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
    if(searchfacture.value != ''){
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


