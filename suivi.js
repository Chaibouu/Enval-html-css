let tbodysuivi = document.querySelector('.tbodysuivi');
console.log(tbodysuivi);

// afficher les donées de suivi
suivis.forEach(element => {
    tbodysuivi.innerHTML += `<tr>
                              <td class="tr text">${element.lot}</td>
                              <td class="text">${element.etat}</td>
                              <td class="text">${element.date}</td>
                              <td class="text">${element.rapport}</td>
                              <td class="TR text">
                                <a href="suividetail.html"><button>voir</button></a>
                              </td>
                            </tr>`
});
    
