let tbodycommande = document.querySelector('.tbodycommande');

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
