let tbodysuivi = document.querySelector('.tbodysuivi');
let searchsuivi = document.querySelector('#searchsuivi');

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
    
//button recherche
searchsuivi.addEventListener('input', () => {
  let search = '';
  search = suivis.filter((el) =>
      el.rapport.toUpperCase().includes(searchsuivi.value.toUpperCase().split(' '))
  );
  if(searchsuivi.value != ''){
        tbodysuivi.innerHTML = ''
        search.forEach(element => {
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
  }
  else{
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
  }
});

