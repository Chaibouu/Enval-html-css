let textarea = document.querySelector('#textarea');
let avatar = document.querySelector('#avatar');
let inputFile = document.querySelector('#inputFile');
let userName = document.querySelector('#userName');
let email = document.querySelector('#email');
let loginProfil = document.querySelector('#loginProfil');
let btnEnvoyer = document.querySelector('#btnEnvoyer');
let btnretour = document.querySelector('.btnretour');
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

    const reader =  new FileReader();
    reader.addEventListener('load',()=>{
        users.profil = reader.result
        localStorage.setItem('compte',JSON.stringify(users))
    })

    // users.profil= URL.createObjectURL(inputFile.files[0]);
    reader.readAsDataURL(file)

})

let showavatar = ()=>{
    loginProfil.src = users.profil;
    avatar.src = users.profil;
    console.log(users.profil)
}
showavatar();



//button modifier username email biographie
btnEnvoyer.addEventListener('click',()=>{
    if (userName !='') {
        if (email.value !='') {
            users.userName = userName.value;
            users.email = email.value;
            users.biographie = textarea.value;
            localStorage.setItem('compte',JSON.stringify(users))

            userName.value='';
            email.value='';
            textarea.value='';
        }
        else{
            alert('Veuillez entrer un Email')
        }
    }
    else{
        alert('Veuillez entrer un Nom')
    }
    
})
// button supprimer la photo de profil
supphoto.addEventListener('click',()=>{
    users.profil= "avatar.jpg";
    localStorage.setItem('compte',JSON.stringify(users))
    showavatar();
})


// button renvoyer a la page d'acceuil
btnretour.addEventListener("click", ()=> {
    //la méthode window.location.href pour rediriger vers la page d'accueil
    window.location.href = "http://127.0.0.1:5502/dashboard.html";
    
});

