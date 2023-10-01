let email = document.querySelector('#email');
let password = document.querySelector('#password');
let connexion = document.querySelector('#connexion');
let notification = document.querySelector('.notification');

if (!localStorage.getItem('key')) {
    localStorage.setItem('key',JSON.stringify([]))
}
let users = JSON.parse(localStorage.getItem('key'));
let a = 0


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
                    
                    notification.style.display = 'block';
                    notification.firstElementChild.textContent = 'Compte bloqué';
                    notification.lastElementChild.textContent = 'Votre compte est bloqué';
                    setTimeout(()=>{
                        notification.style.display = 'none';
                    },3000)

                    email.disabled=true;
                    password.disabled=true;
                    setTimeout(()=>{
                        email.disabled = false;
                        password.disabled = false;
                    },300000)
                    a = 0
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
