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
let notification = document.querySelector('.notification');
let btnModifierlecompte = document.querySelector('.btnModifierlecompte');
let btnSupprimerlecompte = document.querySelector('.btnSupprimerlecompte');
let notificationPassword = document.querySelector('.notificationPassword');
let arriereTransparent = document.querySelector('.arriereTransparent');
let ancienMotDePasse = document.querySelector('#ancienMotDePasse');
let nouveauMotDePasse = document.querySelector('#nouveauMotDePasse');
let confirmation = document.querySelector('#confirmation');
let btnEnvoyerPassword = document.querySelector('#btnEnvoyerPassword');


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
        localStorage.setItem('compte',JSON.stringify(users));
        updateCompte()
    })
    // users.profil= URL.createObjectURL(inputFile.files[0]);
    reader.readAsDataURL(file)

    // notification de confirmation de suppression de la photo de profil
    notification.style.display = 'block';
    notification.firstElementChild.style.backgroundColor = '#4A96A6'
    notification.firstElementChild.textContent = 'Photo de profil modifier';
    notification.lastElementChild.textContent = 'Votre photo de profil à été modifier avec succès';
    setTimeout(()=>{
        notification.style.display = 'none';
    },3000)

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

            // notification de confirmation de la modification du profil
            notification.style.display = 'block';
            notification.firstElementChild.style.backgroundColor = '#4A96A6'
            notification.firstElementChild.textContent = 'Profil modifier';
            notification.lastElementChild.textContent = 'Votre profil à été modifier avec succès';
            setTimeout(()=>{
                notification.style.display = 'none';
            },3000)
            updateCompte()
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
    // notification de confirmation de suppression de la photo de profil
    notification.style.display = 'block';notification.firstElementChild.textContent = 'Photo de profil supprimer';
    notification.lastElementChild.textContent = 'Votre photo de profil à été supprimer avec succès';
    setTimeout(()=>{
        notification.style.display = 'none';
    },3000)
    updateCompte()
})


// button renvoyer a la page d'acceuil
btnretour.addEventListener("click", ()=> {
    //la méthode window.location.href pour rediriger vers la page d'accueil
    window.location.href = "dashboard.html";
    
});

// button modifier mot de passe
btnModifierlecompte.addEventListener('click',()=>{
    notificationPassword.style.display = "block";
    arriereTransparent.style.display = "block";
})
// button envoyer mot de passe modifier
btnEnvoyerPassword.addEventListener('click',()=>{
    if(ancienMotDePasse.value != ''){
        if(nouveauMotDePasse.value != ''){
            if(confirmation.value != ''){
                if (users.password === ancienMotDePasse.value) {
                    if(nouveauMotDePasse.value === confirmation.value){
                        users.password = confirmation.value;
                        localStorage.setItem('compte',JSON.stringify(users));
    
                        nouveauMotDePasse.value ='';
                        confirmation.value = '';
                        ancienMotDePasse.value = '';
    
                        notificationPassword.style.display = "none";
                        arriereTransparent.style.display = "none";
    
                        // notification de confirmation de modification de mot de passe
                        notification.style.display = 'block';
                        notification.firstElementChild.style.backgroundColor = '#4A96A6'
                        notification.firstElementChild.textContent = 'Mot de passe modifier';
                        notification.lastElementChild.textContent = 'Votre mot de passe à été modifier avec succès';
                        setTimeout(()=>{
                            notification.style.display = 'none';
                        },3000)
                        updateCompte()
                    }
                    else{
                        // Entrer le nouveau mot de passe
                        notification.style.display = 'block';
                        notification.firstElementChild.textContent = 'Modifier mot de passe';
                        notification.lastElementChild.textContent = "Veuillez entrer le même mot de passe";
                        setTimeout(()=>{
                            notification.style.display = 'none';
                        },3000)
                    }
                }
                else{
                    // Entrer le nouveau mot de passe
                    notification.style.display = 'block';
                    notification.firstElementChild.textContent = 'Modifier mot de passe';
                    notification.lastElementChild.textContent = "Votre ancien mot de passe est incorrect";
                    setTimeout(()=>{
                        notification.style.display = 'none';
                    },3000)
                }
                
            }
            else{
                // Entrer le nouveau mot de passe
                notification.style.display = 'block';
                notification.firstElementChild.textContent = 'Modifier mot de passe';
                notification.lastElementChild.textContent = "Veuillez confirmer le nouveau mot de passe";
                setTimeout(()=>{
                    notification.style.display = 'none';
                },3000)
            }
            
        }
        else{
            // Entrer le nouveau mot de passe
            notification.style.display = 'block';
            notification.firstElementChild.textContent = 'Modifier mot de passe';
            notification.lastElementChild.textContent = "Veuillez entrer le nouveau mot de passe";
            setTimeout(()=>{
                notification.style.display = 'none';
            },3000)
        }
        
    }
    else{
        // Entrer l'ancien mot de passe
        notification.style.display = 'block';
        notification.firstElementChild.textContent = 'Modifier mot de passe';
        notification.lastElementChild.textContent = "Veuillez entrer l'ancien mot de passe";
        setTimeout(()=>{
            notification.style.display = 'none';
        },3000)
    }
})

// button supprimer le compte
btnSupprimerlecompte.addEventListener('click',()=>{
    let tabCompte = JSON.parse(localStorage.getItem("key"))
    let result = tabCompte.filter(el=>el.id !== users.id);
    tabCompte = result;
    localStorage.setItem('key',JSON.stringify(tabCompte));
    window.location.href = "index.html";
})



// ===============================================

const updateCompte = ()=>{
    let tabCompte = JSON.parse(localStorage.getItem("key"))

    let result = tabCompte.filter(el=>el.id !== users.id);
    result.push(users);
    tabCompte = result;
    localStorage.setItem('key',JSON.stringify(tabCompte))
}
updateCompte()