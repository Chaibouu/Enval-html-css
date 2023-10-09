let tiiitre = document.querySelectorAll('.tiiitre');
let loginProfil = document.querySelector('#loginProfil');

// afficher le titre de sache rapport
let titrerapport = JSON.parse(localStorage.getItem('cles'));
tiiitre.forEach(element => {
    element.textContent = titrerapport;
});

// afficher la photo de profil
let users = JSON.parse(localStorage.getItem("compte"))
let showavatar = ()=>{
  loginProfil.src = users.profil;
  console.log(users.profil)
}
showavatar();


