const toggleBtn = document.getElementById('toggle-btn');
const logo = document.getElementById('logo');
const arch = document.getElementById('small-arch');
const navmenu = document.getElementById('nav-menu');
const navlist = document.getElementById('nav-list')

const toggleMenu = () => {
    toggleBtn.classList.toggle('is-active');
    logo.classList.toggle('is-active');
    navmenu.classList.toggle('is-active')
    navlist.classList.toggle('is-active')
    arch.classList.toggle('is-active');
    if(arch.classList.contains("is-active")){
        arch.setAttribute('d','M 0 0 H 640 V 125 C 125 125 125 125 0 125 V 0 Z')
    }else {
        arch.setAttribute('d','M 0 0 H 640 V 125 C 405 125 150 100 0 275 V 0 Z')
    }
}


