let tiiitre = document.querySelectorAll('.tiiitre');
let titrerapport = JSON.parse(localStorage.getItem('cles'));
tiiitre.forEach(element => {
    element.textContent = titrerapport;
});