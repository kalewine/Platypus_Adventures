const toggleBtn=document.getElementById("toggle-btn"),logo=document.getElementById("logo"),arch=document.getElementById("small-arch"),navmenu=document.getElementById("nav-menu"),navlist=document.getElementById("nav-list"),toggleMenu=()=>{toggleBtn.classList.toggle("is-active"),logo.classList.toggle("is-active"),navmenu.classList.toggle("is-active"),navlist.classList.toggle("is-active"),arch.classList.toggle("is-active"),arch.classList.contains("is-active")?arch.setAttribute("d","M 0 0 H 640 V 125 C 125 125 125 125 0 125 V 0 Z"):arch.setAttribute("d","M 0 0 H 640 V 125 C 405 125 150 100 0 275 V 0 Z")};