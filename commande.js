let tbodycommande = document.querySelector('.tbodycommande');
let searchcommande = document.querySelector('#searchcommande');

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
