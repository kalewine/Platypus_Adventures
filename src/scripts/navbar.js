const toggleBtn = document.getElementById('toggle-btn');
const target = document.getElementById('target');
const body = document.querySelector('body');
const logo = document.getElementById('logo');
const shadowLogo = document.getElementById('shadow-logo');
const desktopDonate = document.getElementById('desktop-donate-btn');
const nav = document.getElementById('nav');
const navmenu = document.getElementById('nav-menu');
const navlist = document.getElementById('nav-list');
const navListItem = document.getElementsByClassName('nav__list-item');
const navListLink = document.getElementsByClassName('nav__list-link');
const navDropdown = document.getElementsByClassName('nav__dropdown');
const navDropdownLink = document.getElementsByClassName('nav__dropdown-link');
const workShadow = document.getElementById('work-shadow');
const involvedShadow = document.getElementById('involved-shadow');
const aboutShadow = document.getElementById('about-shadow');

const dropdownToggle = document.getElementsByClassName('nav__dropdown-toggle-icon');

// navbar shink/grow on scroll
const addScrolled = [logo, shadowLogo, desktopDonate, workShadow, involvedShadow, aboutShadow]

const scrolledOptions = {
    threshold: 1.0
}

const resizeNavbar = new IntersectionObserver ((entries, resizeNavbar) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            addScrolled.forEach(element=> {
                element.classList.remove('scrolled')
            })
            Array.from(navListLink).forEach(element => {
                element.classList.remove('scrolled')
            })
            Array.from(navListItem).forEach(element => {
                element.classList.remove('scrolled')
            })
            Array.from(navDropdownLink).forEach(element => {
                element.classList.remove('scrolled')
            })
        }else if (!entry.isIntersecting){
            addScrolled.forEach(element=> {
                element.classList.add('scrolled')
            })
            Array.from(navListLink).forEach(element => {
                element.classList.add('scrolled')
            })
            Array.from(navListItem).forEach(element => {
                element.classList.add('scrolled')
            })
            Array.from(navDropdownLink).forEach(element => {
                element.classList.add('scrolled')
            })
        }
    })
}, scrolledOptions)

resizeNavbar.observe(target)

// close mobile menu dropdowns
const closeDropdowns = () => {
    Array.from(dropdownToggle).forEach(icon => icon.classList.remove('is-open'));
    Array.from(navDropdown).forEach(dropdown => dropdown.classList.remove('is-open'));
}

// mobile menu toggle
const addIsActive = [toggleBtn, logo, shadowLogo, navmenu, navlist, body, nav]

const toggleMenu = () => {
    closeDropdowns()
    Array.from(navListItem).forEach(item => item.classList.toggle('is-active')
    )
    Array.from(navDropdownLink).forEach(item => item.classList.toggle('is-active')
    )
    addIsActive.forEach(element => element.classList.toggle('is-active')
    )
}

// toggle mobile menu dropdowns
const toggleDropdown = (toggleIcon, id) => {
    toggleIcon.children[0].classList.toggle('is-open')
    document.getElementById(id ).classList.toggle('is-open')
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

