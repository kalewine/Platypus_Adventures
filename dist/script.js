const stories=document.getElementsByClassName("story__slider-card"),storyContainer=document.getElementById("story-slider"),storyScreen=document.getElementById("story-screen"),dots=document.getElementsByClassName("story__indicators-dot");let shiftBy,width=storyScreen.getBoundingClientRect().width,currentIndex=1;const changeStory=e=>{let t;var o=stories.length;1==(t=-1==e?currentIndex==o?1:currentIndex+1:1<currentIndex?currentIndex-1:o)?shiftBy=0:t==o?shiftBy=-(o-1)*width:1<t&&(shiftBy=-width*(t-1)),dots[t-1].classList.add("filled"),dots[currentIndex-1].classList.remove("filled"),storyContainer.style.transform=`translateX(${shiftBy}px)`,currentIndex=t},changeDot=e=>{Array.from(dots).forEach(e=>e.classList.remove("filled"));var t=Array.from(dots).indexOf(e);e.classList.add("filled"),shiftBy=0==t?0:-width*t,storyContainer.style.transform=`translateX(${shiftBy}px)`},toggleBtn=document.getElementById("toggle-btn"),target=document.getElementById("target"),body=document.querySelector("body"),logo=document.getElementById("logo"),shadowLogo=document.getElementById("shadow-logo"),desktopDonate=document.getElementById("desktop-donate-btn"),navmenu=document.getElementById("nav-menu"),navlist=document.getElementById("nav-list"),navListItem=document.getElementsByClassName("nav__list-item"),navListLink=document.getElementsByClassName("nav__list-link"),navDropdown=document.getElementsByClassName("nav__dropdown"),navDropdownLink=document.getElementsByClassName("nav__dropdown-link"),workShadow=document.getElementById("work-shadow"),involvedShadow=document.getElementById("involved-shadow"),aboutShadow=document.getElementById("about-shadow"),dropdownToggle=document.getElementsByClassName("nav__dropdown-toggle-icon"),addScrolled=[logo,shadowLogo,desktopDonate,workShadow,involvedShadow,aboutShadow],scrolledOptions={threshold:1},resizeNavbar=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting?(addScrolled.forEach(e=>{e.classList.remove("scrolled")}),Array.from(navListLink).forEach(e=>{e.classList.remove("scrolled")}),Array.from(navListItem).forEach(e=>{e.classList.remove("scrolled")}),Array.from(navDropdownLink).forEach(e=>{e.classList.remove("scrolled")})):e.isIntersecting||(addScrolled.forEach(e=>{e.classList.add("scrolled")}),Array.from(navListLink).forEach(e=>{e.classList.add("scrolled")}),Array.from(navListItem).forEach(e=>{e.classList.add("scrolled")}),Array.from(navDropdownLink).forEach(e=>{e.classList.add("scrolled")}))})},scrolledOptions),closeDropdowns=(resizeNavbar.observe(target),()=>{Array.from(dropdownToggle).forEach(e=>e.classList.remove("is-open")),Array.from(navDropdown).forEach(e=>e.classList.remove("is-open"))}),toggleMenu=()=>{closeDropdowns(),Array.from(navListItem).forEach(e=>e.classList.toggle("is-active")),toggleBtn.classList.toggle("is-active"),logo.classList.toggle("is-active"),shadowLogo.classList.toggle("is-active"),navmenu.classList.toggle("is-active"),navlist.classList.toggle("is-active"),body.classList.toggle("is-active")},toggleDropdown=(t,o)=>{t.children[0].classList.toggle("is-open"),document.getElementById(o).classList.toggle("is-open"),Array.from(navDropdown).forEach(e=>{e.id!==o&&e.classList.remove("is-open")}),Array.from(dropdownToggle).forEach(e=>{e!==t.children[0]&&e.classList.remove("is-open")})};