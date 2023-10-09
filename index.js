let email = document.querySelector('#email');
let password = document.querySelector('#password');
let connexion = document.querySelector('#connexion');
let notification = document.querySelector('.notification');
let timerr = document.querySelector('.timerr');


let user={
    id:0,
    userName:'',
    password:'',
    email:'',
    answer:'',
    profil:'',
    biographie:'',
}
let lesutilisateur = ()=>{
    let userss =[
        {
            id: 1,
            userName:'chaibou',
            password:'chaibou',
            email:'chaibouabdoulwahab@gmail.com',
            answer:'metal',
            profil:"blob:http://127.0.0.1:5502/4413d9d7-9e95-4df2-9c4f-52187ad829f1",
            biographie:'dev junior',
        },
        {
            id: 2,
            userName:'admin',
            password:'admin',
            email:'admin@gmail.com',
            answer:'admin',
            profil:'',
            biographie:'admin',
        },
        {
            id: 3,
            userName:'tt',
            password:'tt',
            email:'tt@gmail.com',
            answer:'tt',
            profil:'',
            biographie:'tt',
        }
    ]
}


if (!localStorage.getItem('key')) {
    localStorage.setItem('key',JSON.stringify(userss))
}
if (!localStorage.getItem('compte')) {
    localStorage.setItem('compte',JSON.stringify(user))
}
let users = JSON.parse(localStorage.getItem('key'));
let a = 0;
let seconde = 1;
let minute = 5;
let time = 0;
let timeout;



// button ce connecter 
connexion.addEventListener('click',()=>{
   if (email.value !=='') {
        if (password.value !=='') {
            let verifUser = users.find((el)=> el.userName === email.value);
            let verifPassword = users.find((el)=> el.password === password.value);
            let verifCompte = users.find((el)=> el.password === password.value && el.userName === email.value);
            if(verifUser && verifPassword){
                connexion.parentElement.href = "dashboard.html";
                user={
                    id: verifCompte.id,
                    userName: verifCompte.userName,
                    password: verifCompte.password,
                    email: verifCompte.email,
                    answer: verifCompte.answer,
                    profil: verifCompte.profil,
                    biographie: verifCompte.biographie,
                }
                localStorage.setItem('compte',JSON.stringify(user))
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
                    // fonction pour le minuteur
                    const chronos = ()=>{
                        if (minute == 0 && seconde == 0) {
                          clearTimeout(timeout);
                        }
                        else{
                          minute = parseInt(minute);
                          seconde = parseInt(seconde);
                        
                          if (seconde > 0) {
                            seconde--;
                          } else {
                            if (minute > 0) {
                              minute--;
                              seconde = 59;
                            } else {
                                clearTimeout(timeout);
                                return;
                            }
                          }
                      
                           if (seconde < 10) {
                            seconde = "0" + seconde;
                           }
                           if (minute < 10) {
                            minute = "0" + minute;
                           }
                       
                           notification.lastElementChild.textContent = `${minute}:${seconde}`
                           timeout = setTimeout(chronos,1000);
                        }
                    };
                    // ==================================
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
                        chronos();
                        notification.firstElementChild.style.backgroundColor = '#4A96A6'
                        notification.firstElementChild.textContent = 'Timer déblockage';
                        notification.lastElementChild.style.fontSize = '30px'

                        setTimeout(()=>{
                            email.disabled = false;
                            password.disabled = false;
                            notification.style.display = 'none';
                            
                        },360000)
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

