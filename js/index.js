let Bar = document.querySelector('.bar')
let Links = document.querySelector('nav ul')

Bar.onclick = function(){
    Links.classList.toggle('show-ul');
}
