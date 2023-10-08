let tbodysuivi = document.querySelector('.tbodysuivi');
let searchsuivi = document.querySelector('#searchsuivi');

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

