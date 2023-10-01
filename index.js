let email = document.querySelector('#email');
let password = document.querySelector('#password');
let connexion = document.querySelector('#connexion');
let notification = document.querySelector('.notification');

if (!localStorage.getItem('key')) {
    localStorage.setItem('key',JSON.stringify([]))
}
let users = JSON.parse(localStorage.getItem('key'));
let a = 0;
let seconde = 0;
let minute = 0;

// fonction pour le minuteur
const chronos = ()=> {
    
}

// button ce connecter 
connexion.addEventListener('click',()=>{
   if (email.value !=='') {
        if (password.value !=='') {
            let verifUser = users.find((el)=> el.username === email.value);
            let verifPassword = users.find((el)=> el.password === password.value);
            if(verifUser && verifPassword){
                connexion.parentElement.href = "dashboard.html"
            }
            
            if(!verifUser){
                a++;
                notification.style.display = 'block';
                notification.lastElementChild.textContent = 'Veuillez entrer un User Name correct';
                setTimeout(()=>{
                    notification.style.display = 'none';
                },3000)
            }
            else if(!verifPassword){
                a++;
                notification.style.display = 'block';
                notification.lastElementChild.textContent = 'Veuillez entrer un mot de passe correct';
                setTimeout(()=>{
                    notification.style.display = 'none';
                },3000)
            }
            if(a>=3){
                let answer = prompt('La question secret quel est votre jeux préféré : ')
                let result = users.find((el)=> el.answer === answer)
                if (result) {
                    connexion.parentElement.href = "dashboard.html"
                }
                else{
                    email.disabled=true;
                    password.disabled=true;

                   setTimeout(()=>{
                    notification.style.display = 'block';
                    notification.firstElementChild.textContent = 'Compte bloqué';
                    notification.lastElementChild.textContent = 'Votre compte est bloqué';
                    setTimeout(()=>{
                        notification.style.display = 'none';
                    },4000)
                   },2000)
                    
                    setTimeout(()=>{
                        notification.style.display = 'block';
                        notification.firstElementChild.style.backgroundColor = 'green'
                        notification.firstElementChild.textContent = 'Timer déblockage';
                        notification.lastElementChild.textContent = 'Veuillez patient après le temp';
                        setTimeout(()=>{
                            email.disabled = false;
                            password.disabled = false;
                            notification.style.display = 'none';
                            
                        },300000)
                        a = 0
                    },7000)
                }
                
            }
            
        }
        else{
         alert('veuillez entrer votre mot de mot passe ')
        }
   }
   else{
    alert('veuillez entrer un utilisateur')
   }
})

