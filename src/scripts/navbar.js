const toggleBtn = document.getElementById('toggle-btn');
const logo = document.getElementById('logo');
const arch = document.getElementById('small-arch');
const navmenu = document.getElementById('nav-menu');
const navlist = document.getElementById('nav-list');
const navListItem = document.getElementsByClassName('nav__list-item');
const navListLink = document.getElementsByClassName('nav__list-link');
const navDropdown = document.getElementsByClassName('nav__dropdown');
const dropdownToggle = document.getElementsByClassName('nav__dropdown-toggle-icon');

const closeDropdowns = () => {
    Array.from(dropdownToggle).forEach(icon => icon.classList.remove('is-open'));
    Array.from(navDropdown).forEach(dropdown => dropdown.classList.remove('is-open'));
}

const toggleMenu = () => {
    closeDropdowns()
    Array.from(navListItem).forEach(item => item.classList.toggle('is-active'))
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


const toggleDropdown = (toggleIcon, id) => {
    toggleIcon.children[0].classList.toggle('is-open')
    document.getElementById(id).classList.toggle('is-open');
    Array.from(navDropdown).forEach(item => {
        if(item.id !== id){
            item.classList.remove('is-open')
        }
    })
    Array.from(dropdownToggle).forEach(icon => {
        if(icon !== toggleIcon.children[0]){
            icon.classList.remove('is-open')
        }
    })
}

