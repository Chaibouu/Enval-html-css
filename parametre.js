let textarea = document.querySelector('.textarea');
let avatar = document.querySelector('#avatar');
let modifphoto = document.querySelector('.modifphoto');
let supphoto = document.querySelector('.supphoto');


modifphoto.addEventListener('click',()=>{
    avatar.src = URL.createObjectURL(modifphoto.file);
})
