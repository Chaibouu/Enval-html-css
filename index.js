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
                console.log(answer);
                email.disabled=true;
                password.disabled=true;
                a = 0
            }
           
console.log(a);
            
        }
        else{
         alert('veuillez entrer votre mot de mot passe ')
        }
   }
   else{
    alert('veuillez entrer un utilisateur')
   }
})
