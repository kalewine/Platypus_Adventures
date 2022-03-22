class PlatypusFooter extends HTMLElement{connectedCallback(){this.innerHTML=`<footer class="footer">
        <div class="footer__flex">
            <div class="footer__mobile-flex">
                <div class="footer__col">
                    <h3 class="footer__title">Connect with Us</h3>
                    <div class="footer__social-btns">
                        <a href="https://www.instagram.com/platypusadventuresgvl/" target="_blank" rel="noopener"  class="social-btn footer__social-btn" id="left-social-btn">
                            <img src="../../images/instagram_icon.png" alt="multi-colored instagram camera icon" class="footer__social-btn-icon" id="footer-instagram-icon"/>
                        Instagram
                        </a>
                        <a href="https://www.facebook.com/PlatypusAdventuresGVL/" target="_blank" rel="noopener" class="social-btn footer__social-btn">
                            <img src="../../images/facebook_icon.png" alt="purple facebook 'f' icon" class="footer__social-btn-icon" id="footer-facebook-icon"/>
                            Facebook
                        </a>
                    </div>
                </div>
                <div class="footer__col" id="footer-contact">
                    <h3 class="footer__title">Contact Us</h3>
                    <a class="footer__link" href="mailto: info@platypusadventures.org">info@platypusadventures.org</a>
                </div>
            </div>
        <div class="footer__col">
            <p class="footer__policy">Platypus Adventures is a nonprofit, tax-exempt charitable organization under Section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible as allowed by law.  </p>
            <a class="footer__link" id="privacy-link" href="#">Privacy Policy</a>
        </div>
        <div class="footer__col">
            <a class="footer__logo-link" href="/">
                <img class="footer__logo" src="../../images/platypus_adventures_logo.svg"  alt="platypus with walking stick in a rainbow gradient circle"/>
            </a> 
        </div>
    </div>
</footer>`}}customElements.define("platypus-footer",PlatypusFooter);class PlatypusNavbar extends HTMLElement{connectedCallback(){this.innerHTML=`<nav class="nav" id="nav">
        <div class="nav__container">
            <!-- LOGO -->
            <img class="nav__logo " id="shadow-logo" src="../../images/platypus_adventures_logo.svg"  alt="platypus with walking stick in a rainbow gradient circle"/>
            <a class="nav__logo-link " id="logo" href="/">
                <img class="nav__logo" src="../../images/platypus_adventures_logo.svg"  alt="platypus with walking stick in a rainbow gradient circle"/>
            </a>
            <!-- MENU -->
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list" id="nav-list">
                    <li class="nav__list-item ">
                        <div class="nav__toggle-positioner">
                            <a href="/platypus-work" class="nav__list-link ">Our Work</a> 
                            <div class="nav__dropdown-toggle" onclick="toggleDropdown(this, 'work')">
                                <img class="nav__dropdown-toggle-icon"  src="../../images/open_menu_icon.png"  />
                            </div>
                        </div>
                        <ul class="nav__dropdown" id="work">
                            <li class="nav__dropdown-item"><a href="/platypus-work/tri-my-best" class="nav__dropdown-link">Tri My Best</a></li>
                            <li class="nav__dropdown-item"><a href="/platypus-work/platypus-yoga" class="nav__dropdown-link">Yoga</a></li>
                        </ul>
                        <div class="nav__dropdown-shadow" id="work-shadow"></div>
                    </li>
                    <li class="nav__list-item ">
                        <div class="nav__toggle-positioner">
                            <a href="/platypus-stories" class="nav__list-link ">Our Stories</a>
                            <div class="nav__dropdown-toggle" id="stories-toggle">
                                <img class="nav__dropdown-toggle-icon"  src="../../images/open_menu_icon.png"  />
                            </div>
                        </div>
                    </li>
                    <li class="nav__list-item ">
                        <div class="nav__toggle-positioner">
                            <a href="/about-platypus-adventures" class="nav__list-link ">About Us</a>  
                            <div class="nav__dropdown-toggle"onclick="toggleDropdown(this, 'about')">
                                <img class="nav__dropdown-toggle-icon"  src="../../images/open_menu_icon.png"  />
                            </div>
                        </div>
                        <ul class="nav__dropdown" id="about">
                            <li class="nav__dropdown-item"><a href="/about-platypus-adventures/mission-and-values" class="nav__dropdown-link ">Our Mission and Values</a></li>
                            <li class="nav__dropdown-item"><a href="/about-platypus-adventures/platypus-leadership" class="nav__dropdown-link ">Our Leadership</a></li> 
                        </ul>
                        <div class="nav__dropdown-shadow" id="about-shadow"></div>
                    </li>
                    <li class="nav__list-item ">
                        <div class="nav__toggle-positioner">
                            <a href="/get-involved" class="nav__list-link ">Get Involved</a>
                            <div class="nav__dropdown-toggle"onclick="toggleDropdown(this, 'involved')">
                                <img class="nav__dropdown-toggle-icon" src="../../images/open_menu_icon.png"  />
                            </div>
                        </div>
                        <ul class="nav__dropdown" id="involved">
                            <li class="nav__dropdown-item"><a href="/get-involved/volunteering" class="nav__dropdown-link ">Volunteering</a></li> 
                            <li class="nav__dropdown-item"><a href="/get-involved/fundraising" class="nav__dropdown-link ">Fundraising</a></li> 
                            <li class="nav__dropdown-item"><a href="/get-involved/donating" class="nav__dropdown-link ">Donating</a></li> 
                        </ul>
                        <div class="nav__dropdown-shadow" id="involved-shadow"></div>
                    </li>
                    <!-- MOBILE BUTTONS -->
                    <li class="nav__list-item mobile-nav__list-item" id="list-item-donate">
                        <a href="https://paypal.me/platypusadventures?country.x=US&locale.x=en_US" class="button" id="mobile-donate-btn">Donate</a>
                    </li>
                    <li class="nav__list-item mobile-nav__list-item" id="mobile-social-btns">
                            <a href="https://www.instagram.com/platypusadventuresgvl/" target="_blank" rel="noopener" class="social-btn social-btn__mobile">
                            <img src="images/instagram_icon.png" alt="multi-colored instagram camera icon" class="social-btn__icon" id="instagram -icon"/>
                            Instagram
                        </a>
                        <a href="https://www.facebook.com/PlatypusAdventuresGVL/" target="_blank" rel="noopener" class="social-btn social-btn__mobile">
                            <img src="images/facebook_icon.png" alt="purple facebook 'f' icon" class="social-btn__icon" id="facebook-icon"/>
                            Facebook
                        </a>
                    </li>
                </ul>
                
                
            </div>
            <!-- DESKTOP BUTTONS -->
            <div class="nav__buttons">
                <a href="https://paypal.me/platypusadventures?country.x=US&locale.x=en_US" class="button " id="desktop-donate-btn">Donate</a>
                <a id="triggerId"><img class="nav__btn-access" src="../../images/webp/accessibility_icon.webp"></a>
                <script>
                    (function(d){
                    var s = d.createElement("script");
                    s.setAttribute("data-trigger", "triggerId")
                    s.setAttribute("data-account", "9DBXMzwRHL");
                    s.setAttribute("src", "https://cdn.userway.org/widget.js");
                    (d.body || d.head).appendChild(s);})(document)
                </script>
            <noscript>
            Please ensure Javascript is enabled for purposes of 
            <a href="https://userway.org">website accessibility</a>
            </noscript>
                <!-- MOBILE MENU -->
                <div class="mobile-nav__toggle" onclick="toggleMenu()" id="toggle-btn">
                    <span class="mobile-nav__toggle-bar"></span>
                    <span class="mobile-nav__toggle-bar"></span>
                    <span class="mobile-nav__toggle-bar"></span>
                </div>  
            </div>
        </div>
    </nav>`}}customElements.define("platypus-navbar",PlatypusNavbar);class PlatypusSponsors extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="supporters">
            <p class="supporters__text">We can only do what we do thanks to
                the life changing support of these partners.</p>
            <div class="supporters__flex">
               
                <a class="supporters__link" href="https://thelittlewhitehouse.org/" target="_blank" rel="noopener"><picture>
                    <source type="image/webp"
                        srcset="../../images/webp/the-little-white-house-logo@1x.webp 360w,
                        ../../images/webp/the-little-white-house-logo@2x.webp 480w"
                        sizes="(max-width: 481px) 50vw, 20vw">
                        
                    <img 
                        srcset="../../images/the-little-white-house-logo@1x.png 360w,
                        ../../images/the-little-white-house-logo@2x.png 480w" 
                        sizes="(max-width: 481px) 50vw,20vw"
                        src="../../images/the-little-white-house-logo.png"  alt="The Little White House logo - house with puzzle piece shadow" >
                </picture></a>
                 <a class="supporters__link" href="https://gflenv.com/" target="_blank" rel="noopener"><picture>
                    <source type="image/webp"
                        srcset="../../images/webp/gfl-env-logo@1x.webp 360w, 
                        ../../images/webp/gfl-env-logo@2x.webp 480w"
                        sizes="(max-width: 481px) 50vw,20vw">
                    <img 
                        id="bottom-sponsor"
                        srcset="../../images/gfl-env-logo@1x.png 360w,
                        ../../images/gfl-env-logo@2x.png 480w"
                        sizes="(max-width: 481px) 50vw,20vw"
                        src="../../images/gfl-env-logo.png" alt="GFL environmental logo" >
                </picture></a>
            </div>
        </section>`}}customElements.define("platypus-sponsors",PlatypusSponsors);class DonateGreenPurple extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="waves__container">
        <img class="waves__crests top-waves" src="../../images/green-waves-top.svg" alt="upward wave crests"> 
        <div class="waves__body waves__green">
            <div class="divider__content">
                <h2 class="divider__text">Help Make the Adventures Happen</h2>
                <a class="button button__purple" href="https://paypal.me/platypusadventures?country.x=US&locale.x=en_US">Donate</a>   
            </div>
        </div>
        <img class="waves__crests bottom-waves" src="../../images/green-waves-bottom.svg" alt="downward wave crests"> 
    </section>`}}class DonateYellowPurple extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="waves__container">
        <img class="waves__crests top-waves" src="../../images/yellow-waves-top.svg" alt="upward wave crests"> 
        <div class="waves__body waves__yellow">
            <div class="divider__content">
                <h2 class="divider__text">Help Make the Adventures Happen</h2>
                <a class="button button__purple" href="https://paypal.me/platypusadventures?country.x=US&locale.x=en_US">Donate</a>   
            </div>
        </div>
        <img class="waves__crests bottom-waves" src="../../images/yellow-waves-bottom.svg" alt="downward wave crests"> 
    </section>`}}class VolunteerBlueYellow extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="waves__container">
        <img class="waves__crests top-waves" src="../../images/blue-waves-top.svg" alt="upward wave crests"> 
        <div class="waves__body waves__blue">
            <div class="divider__content">
                <h2 class="divider__text">Become Part of the Adventure</h2>
                <a class="button button__yellow" href="/get-involved/volunteering">Volunteer</a>   
            </div>
        </div>
        <img class="waves__crests bottom-waves" src="../../images/blue-waves-bottom.svg" alt="downward wave crests"> 
    </section>`}}class ReadGreenPurple extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="waves__container">
        <img class="waves__crests top-waves" src="../../images/green-waves-top.svg" alt="upward wave crests"> 
        <div class="waves__body waves__green">
            <div class="divider__content">
                <h2 class="divider__text">A Story with Every Adventure</h2>
                <a class="button button__purple" href="/platypus-stories">Read Ours</a>   
            </div>
        </div>
        <img class="waves__crests bottom-waves" src="../../images/green-waves-bottom.svg" alt="downward wave crests"> 
    </section>`}}class ReadPurpleGreen extends HTMLElement{connectedCallback(){this.innerHTML=`<section class="waves__container">
        <img class="waves__crests top-waves" src="../../images/purple-waves-top.svg" alt="upward wave crests"> 
        <div class="waves__body waves__purple">
            <div class="divider__content">
                <h2 class="divider__text">A Story with Every Adventure</h2>
                <a class="button button__green" href="/platypus-stories">Read Ours</a>   
            </div>
        </div>
        <img class="waves__crests bottom-waves" src="../../images/purple-waves-bottom.svg" alt="downward wave crests"> 
    </section>`}}customElements.define("donate-green-purple",DonateGreenPurple),customElements.define("donate-yellow-purple",DonateYellowPurple),customElements.define("volunteer-blue-yellow",VolunteerBlueYellow),customElements.define("read-green-purple",ReadGreenPurple),customElements.define("read-purple-green",ReadPurpleGreen);const stories=document.getElementsByClassName("story__slider-card"),storyContainer=document.getElementById("story-slider"),storyScreen=document.getElementById("story-screen"),dots=document.getElementsByClassName("story__indicators-dot");let shiftBy,currentIndex=1;const changeStory=e=>{var s=storyScreen.getBoundingClientRect().width;let a;var t=stories.length;1==(a=-1==e?currentIndex==t?1:currentIndex+1:1<currentIndex?currentIndex-1:t)?shiftBy=0:a==t?shiftBy=-(t-1)*s:1<a&&(shiftBy=-s*(a-1)),dots[a-1].classList.add("filled"),dots[currentIndex-1].classList.remove("filled"),storyContainer.style.transform=`translateX(${shiftBy}px)`,currentIndex=a},changeDot=e=>{var s=storyScreen.getBoundingClientRect().width,a=(Array.from(dots).forEach(e=>e.classList.remove("filled")),Array.from(dots).indexOf(e));e.classList.add("filled"),shiftBy=0==a?0:-s*a,currentIndex=a+1,storyContainer.style.transform=`translateX(${shiftBy}px)`},toggleBtn=document.getElementById("toggle-btn"),target=document.getElementById("target"),body=document.querySelector("body"),logo=document.getElementById("logo"),shadowLogo=document.getElementById("shadow-logo"),desktopDonate=document.getElementById("desktop-donate-btn"),nav=document.getElementById("nav"),navmenu=document.getElementById("nav-menu"),navlist=document.getElementById("nav-list"),navListItem=document.getElementsByClassName("nav__list-item"),navListLink=document.getElementsByClassName("nav__list-link"),navDropdown=document.getElementsByClassName("nav__dropdown"),navDropdownLink=document.getElementsByClassName("nav__dropdown-link"),workShadow=document.getElementById("work-shadow"),involvedShadow=document.getElementById("involved-shadow"),aboutShadow=document.getElementById("about-shadow"),dropdownToggle=document.getElementsByClassName("nav__dropdown-toggle-icon"),addScrolled=[logo,shadowLogo,desktopDonate,workShadow,involvedShadow,aboutShadow],scrolledOptions={threshold:1},resizeNavbar=new IntersectionObserver((e,s)=>{e.forEach(e=>{e.isIntersecting?(addScrolled.forEach(e=>{e.classList.remove("scrolled")}),Array.from(navListLink).forEach(e=>{e.classList.remove("scrolled")}),Array.from(navListItem).forEach(e=>{e.classList.remove("scrolled")}),Array.from(navDropdownLink).forEach(e=>{e.classList.remove("scrolled")})):e.isIntersecting||(addScrolled.forEach(e=>{e.classList.add("scrolled")}),Array.from(navListLink).forEach(e=>{e.classList.add("scrolled")}),Array.from(navListItem).forEach(e=>{e.classList.add("scrolled")}),Array.from(navDropdownLink).forEach(e=>{e.classList.add("scrolled")}))})},scrolledOptions),closeDropdowns=(resizeNavbar.observe(target),()=>{Array.from(dropdownToggle).forEach(e=>e.classList.remove("is-open")),Array.from(navDropdown).forEach(e=>e.classList.remove("is-open"))}),addIsActive=[toggleBtn,logo,shadowLogo,navmenu,navlist,body,nav],toggleMenu=()=>{closeDropdowns(),Array.from(navListItem).forEach(e=>e.classList.toggle("is-active")),Array.from(navDropdownLink).forEach(e=>e.classList.toggle("is-active")),addIsActive.forEach(e=>e.classList.toggle("is-active"))},toggleDropdown=(s,a)=>{s.children[0].classList.toggle("is-open"),document.getElementById(a).classList.toggle("is-open"),Array.from(navDropdown).forEach(e=>{e.id!==a&&e.classList.remove("is-open")}),Array.from(dropdownToggle).forEach(e=>{e!==s.children[0]&&e.classList.remove("is-open")})};