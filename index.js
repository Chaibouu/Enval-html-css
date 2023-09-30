let email = document.querySelector('#email');
let password = document.querySelector('#password');
let connexion = document.querySelector('#connexion');

if (!localStorage.getItem('key')) {
    localStorage.setItem('key',JSON.stringify([]))
}
let users = JSON.parse(localStorage.getItem('key'));

let user = {
    username : '',
    password : '',
}


// button ce connecter 
connexion.addEventListener('click',()=>{
   if (email.value !=='') {
        if (password.value !=='') {
            
        }
        else{
         alert('veuillez entrer votre mot de mot passe ')
        }
   }
   else{
    alert('veuillez entrer un utilisateur')
   }
})

