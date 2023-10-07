let textarea = document.querySelector('#textarea');
let avatar = document.querySelector('#avatar');
let inputFile = document.querySelector('#inputFile');
let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let loginProfil = document.querySelector('#loginProfil');
let btnEnvoyer = document.querySelector('#btnEnvoyer');
let modifphoto = document.querySelector('.modifphoto');
let supphoto = document.querySelector('.supphoto');


let users = JSON.parse(localStorage.getItem("compte"))
modifphoto.addEventListener('click',()=>{
    inputFile.click();
    
})
inputFile.addEventListener('change',()=>{
    let file = inputFile.files[0];
    avatar.src = URL.createObjectURL(file);
    loginProfil.src = URL.createObjectURL(file);
    users.profil= URL.createObjectURL(inputFile.files[0]);
    localStorage.setItem('compte',JSON.stringify(users))
})


let showavatar = ()=>{
    loginProfil.src = users.profil;
    avatar.profil = users.profil;
    console.log(users.profil)
}
showavatar();



//button modifier username email biographie
btnEnvoyer.addEventListener('click',()=>{
    
    users.userName = userName.value;
    users.email = email.value;
    users.biographie = textarea.value;
    localStorage.setItem('compte',JSON.stringify(users))

})