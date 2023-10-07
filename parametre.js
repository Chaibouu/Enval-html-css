let textarea = document.querySelector('.textarea');
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
    users.profil= URL.createObjectURL(inputFile.files[0]);
    localStorage.setItem('compte',JSON.stringify(users))
})
inputFile.addEventListener('change',()=>{
    let file = inputFile.files[0];
    avatar.src = URL.createObjectURL(file);
    loginProfil.src = URL.createObjectURL(file);
})

showavatar();
let showavatar = ()=>{
    // avatar.src = URL.createObjectURL(inputFile.files[0]);
    console.log('xcvsdvsdwvgsfdgvsdwv sdvds')
}

//button modifier username email biographie
btnEnvoyer.addEventListener('click',()=>{
    let user = users.userName;
    let pass = users.password;
    let answer = users.answer;
    let email = users.email;
    let biographie = users.biographie;
    let profil = users.profil
    user={
        userName: userName.value,
        password: pass,
        email: email.value,
        answer: answer,
        profil: profil,
        biographie : biographie
    }
    users.push(user)

})


