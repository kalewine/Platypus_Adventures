const leftArrow=document.getElementById("story-arrow-left"),rightArrow=document.getElementById("story-arrow-right"),stories=document.getElementById("story-slider"),toggleBtn=(leftArrow.addEventListener("click",()=>{console.log("click");stories.style.transform="translateX()"}),document.getElementById("toggle-btn")),logo=document.getElementById("logo"),arch=document.getElementById("small-arch"),navmenu=document.getElementById("nav-menu"),navlist=document.getElementById("nav-list"),navListItem=document.getElementsByClassName("nav__list-item"),navListLink=document.getElementsByClassName("nav__list-link"),navDropdown=document.getElementsByClassName("nav__dropdown"),dropdownToggle=document.getElementsByClassName("nav__dropdown-toggle-icon"),closeDropdowns=()=>{Array.from(dropdownToggle).forEach(e=>e.classList.remove("is-open")),Array.from(navDropdown).forEach(e=>e.classList.remove("is-open"))},toggleMenu=()=>{closeDropdowns(),Array.from(navListItem).forEach(e=>e.classList.toggle("is-active")),toggleBtn.classList.toggle("is-active"),logo.classList.toggle("is-active"),navmenu.classList.toggle("is-active"),navlist.classList.toggle("is-active"),arch.classList.toggle("is-active"),arch.classList.contains("is-active")?arch.setAttribute("d","M 0 0 H 640 V 125 C 125 125 125 125 0 125 V 0 Z"):arch.setAttribute("d","M 0 0 H 640 V 125 C 405 125 150 100 0 275 V 0 Z")},toggleDropdown=(t,o)=>{t.children[0].classList.toggle("is-open"),document.getElementById(o).classList.toggle("is-open"),Array.from(navDropdown).forEach(e=>{e.id!==o&&e.classList.remove("is-open")}),Array.from(dropdownToggle).forEach(e=>{e!==t.children[0]&&e.classList.remove("is-open")})};