class PlatypusFooter extends HTMLElement{connectedCallback(){this.innerHTML=`  <footer class="footer">
        <div class="footer__flex">
            <div class="footer__mobile-flex">
                <div id="footer-connect">
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
                <div id="footer-contact">
                    <h3 class="footer__title">Contact Us</h3>
                    <a class="footer__link" href="mailto: platypusadventuresgvl@gmail.com">platypusadventuresgvl@gmail.com</a>
                </div>
            </div>
        <div class="footer__col">
            <div class="footer__privacy">
                <p class="footer__policy">Platypus Adventures is a nonprofit, tax-exempt charitable organization under Section 501(c)(3) of the Internal Revenue Code. Donations are tax-deductible as allowed by law.  </p>
                <a class="footer__link" id="privacy-link" href="#">Privacy Policy</a>
            </div>
                
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
                <ul  class="nav__list" id="nav-list">
                    <li class="nav__list-item" id="work-list" 
                        onmouseover="calcShadow('work')"
                        onfocus="calcShadow('work')"
                        onmouseleave="closeSubMenu('work')"
                    >
                        <div class="nav__toggle-positioner">
                            <a href="/platypus-work/" class="nav__list-link "
                            onmouseover= "openSubMenu('work')"  
                            onfocus="openSubMenu('work')" 
                            >Our Work</a> 
                            <div class="nav__dropdown-toggle" onclick="toggleMobileDropdown(this, 'work')">
                                <img class="nav__dropdown-toggle-icon"  src="../../images/open_menu_icon.png" alt="purple arrow down toggle icon" />
                            </div>
                        </div>
                        <ul class="nav__dropdown" id="work">
                            <li  class="nav__dropdown-item"><a href="/platypus-work/tri-my-best" class="nav__dropdown-link">Tri My Best</a></li>
                            <li  class="nav__dropdown-item" onfocusout="closeSubMenu('work')"><a href="/platypus-work/platypus-yoga" class="nav__dropdown-link" >Yoga</a></li>
                        </ul>
                        <div class="nav__dropdown-shadow" id="work-shadow"></div>
                    </li>
                    <li class="nav__list-item ">
                        <div class="nav__toggle-positioner">
                            <a href="/platypus-stories/" class="nav__list-link ">Our Stories</a>
                            <div class="nav__dropdown-toggle" id="stories-toggle">
                                <img class="nav__dropdown-toggle-icon"  src="../../images/open_menu_icon.png" alt="purple arrow down toggle icon"/>
                            </div>
                        </div>
                    </li>
                    <li class="nav__list-item" 
                        onmouseover="calcShadow('about')"
                        onfocus="calcShadow('about')"
                        onmouseleave="closeSubMenu('about')">
                        <div class="nav__toggle-positioner">
                            <a href="/about-platypus-adventures/" class="nav__list-link "
                            onmouseover= "openSubMenu('about')"  
                            onfocus="openSubMenu('about')" 
                            >
                            About Us</a>  
                            <div class="nav__dropdown-toggle"onclick="toggleMobileDropdown(this, 'about')">
                                <img class="nav__dropdown-toggle-icon"  src="../../images/open_menu_icon.png"  alt="purple arrow down toggle icon"/>
                            </div>
                        </div>
                        <ul class="nav__dropdown" id="about">
                            <li class="nav__dropdown-item"><a href="/about-platypus-adventures/mission-and-values" class="nav__dropdown-link ">Our Mission and Values</a></li>
                            <li class="nav__dropdown-item" onfocusout="closeSubMenu('about')"><a href="/about-platypus-adventures/platypus-leadership" class="nav__dropdown-link ">Our Leadership</a></li> 
                        </ul>
                        <div class="nav__dropdown-shadow" id='about-shadow'></div>
                    </li>
                    <li class="nav__list-item" 
                        onmouseover="calcShadow('involved')" 
                        onfocus="calcShadow('involved')"
                        onmouseleave="closeSubMenu('involved')">
                        <div class="nav__toggle-positioner">
                            <a href="/get-involved/" class="nav__list-link"
                            onmouseover= "openSubMenu('involved')"  
                            onfocus="openSubMenu('involved')"
                            >Get Involved</a>
                            <div class="nav__dropdown-toggle"onclick="toggleMobileDropdown(this, 'involved')">
                                <img class="nav__dropdown-toggle-icon" src="../../images/open_menu_icon.png"  alt="purple arrow down toggle icon"/>
                            </div>
                        </div>
                        <ul class="nav__dropdown" id="involved">
                            <li class="nav__dropdown-item"><a href="/get-involved/volunteering" class="nav__dropdown-link ">Volunteering</a></li> 
                            <li class="nav__dropdown-item"><a href="/get-involved/fundraising" class="nav__dropdown-link ">Fundraising</a></li> 
                            <li class="nav__dropdown-item" onfocusout="closeSubMenu('involved')"><a href="/get-involved/donating" class="nav__dropdown-link ">Donating</a></li> 
                        </ul>
                        <div class="nav__dropdown-shadow" id="involved-shadow"></div>
                    </li>
                    <!-- MOBILE BUTTONS -->
                    <li class="nav__list-item mobile-nav__list-item" id="list-item-donate">
                        <a href="https://paypal.me/platypusadventures?country.x=US&locale.x=en_US" class="button" id="mobile-donate-btn">Donate</a>
                    </li>
                    <li class="nav__list-item mobile-nav__list-item" id="mobile-social-btns">
                            <a href="https://www.instagram.com/platypusadventuresgvl/" target="_blank" rel="noopener" class="social-btn social-btn__mobile">
                            <img src="../../images/instagram_icon.png" alt="multi-colored instagram camera icon" class="social-btn__icon" id="instagram -icon"/>
                            Instagram
                        </a>
                        <a href="https://www.facebook.com/PlatypusAdventuresGVL/" target="_blank" rel="noopener" class="social-btn social-btn__mobile">
                            <img src="../../images/facebook_icon.png" alt="purple facebook 'f' icon" class="social-btn__icon" id="facebook-icon"/>
                            Facebook
                        </a>
                    </li>
                </ul>
                
                
            </div>
            <!-- DESKTOP BUTTONS -->
            <div class="nav__buttons">
                <a href="https://paypal.me/platypusadventures?country.x=US&locale.x=en_US" class="button " id="desktop-donate-btn">Donate</a>
                <a id="triggerId" tabindex="0"><img class="nav__btn-access" src="../../images/webp/accessibility_icon.webp" alt="userway accessibility icon"></a>
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
        </section>`}}customElements.define("platypus-sponsors",PlatypusSponsors);class IntroWaves extends HTMLElement{constructor(){super();const e=document.createElement("section"),t=(e.setAttribute("class","waves__container"),e.setAttribute("id","waves-intro"),document.createElement("img")),s=(t.setAttribute("class","waves__crests top-waves"),t.setAttribute("src","../../images/purple-waves-top.svg"),t.setAttribute("alt","upward wave crests"),document.createElement("img")),o=(s.setAttribute("class","waves__crests bottom-waves"),s.setAttribute("src","../../images/purple-waves-bottom.svg"),s.setAttribute("alt","downward wave crests"),document.createElement("div")),a=(o.setAttribute("class","waves__body waves__purple"),document.createElement("article")),i=(a.setAttribute("class","intro__content"),document.createElement("h1")),n=(i.setAttribute("class","intro__title"),i.textContent=this.getAttribute("intro-title"),document.createElement("p"));n.setAttribute("class","intro__text"),n.textContent=this.getAttribute("intro-text"),a.appendChild(i),a.appendChild(n),o.appendChild(a),e.appendChild(t),e.appendChild(o),e.appendChild(s),this.appendChild(e)}}class WavesDivider extends HTMLElement{constructor(){super();const e=document.createElement("section");e.setAttribute("class","waves__container");var t=this.getAttribute("background-color"),s=this.getAttribute("button-color"),d=this.getAttribute("link");const o=document.createElement("img"),a=(o.setAttribute("class","waves__crests top-waves"),o.setAttribute("src",`../../images/${t}-waves-top.svg`),o.setAttribute("alt","upward wave crests"),document.createElement("img")),i=(a.setAttribute("class","waves__crests bottom-waves"),a.setAttribute("src",`../../images/${t}-waves-bottom.svg`),a.setAttribute("alt","downward wave crests"),document.createElement("div")),n=(i.setAttribute("class","waves__body waves__"+t),document.createElement("article")),r=(n.setAttribute("class","divider__content"),document.createElement("h2")),l=(r.setAttribute("class","divider__text"),r.textContent=this.getAttribute("divider-text"),document.createElement("a"));if(l.setAttribute("href",""+d),l.setAttribute("class","button button__"+s),l.textContent=this.getAttribute("btn-text"),n.appendChild(r),this.hasAttribute("divider-paragraph")){const c=document.createElement("p");c.setAttribute("class","waves__paragraph"),c.textContent=this.getAttribute("divider-paragraph"),n.appendChild(c)}n.appendChild(l),i.appendChild(n),e.appendChild(o),e.appendChild(i),e.appendChild(a),this.appendChild(e)}}class HeaderWaves extends HTMLElement{constructor(){super();const e=document.createElement("section"),t=(e.setAttribute("class","header__waves"),document.createElement("img")),s=(t.setAttribute("class","waves__crests bottom-waves"),t.setAttribute("src","../../images/purple-waves-bottom.svg"),t.setAttribute("alt","downward wave crests"),document.createElement("div")),o=(s.setAttribute("class","waves__body waves__purple"),s.setAttribute("id","header-waves"),document.createElement("article")),a=(o.setAttribute("class","intro__content"),document.createElement("h1")),i=(a.setAttribute("class","intro__title"),a.textContent=this.getAttribute("intro-title"),document.createElement("p"));i.setAttribute("class","intro__text"),i.textContent=this.getAttribute("intro-text"),o.appendChild(a),o.appendChild(i),s.appendChild(o),e.appendChild(s),e.appendChild(t),this.appendChild(e)}}customElements.define("intro-waves",IntroWaves),customElements.define("waves-divider",WavesDivider),customElements.define("header-waves",HeaderWaves);const stories=document.getElementsByClassName("story__slider-card"),storyContainer=document.getElementById("story-slider"),storyScreen=document.getElementById("story-screen"),dots=document.getElementsByClassName("story__indicators-dot");let shiftBy,currentIndex=1;const changeStory=e=>{var t=storyScreen.getBoundingClientRect().width;let s;var o=stories.length;1==(s=-1==e?currentIndex==o?1:currentIndex+1:1<currentIndex?currentIndex-1:o)?shiftBy=0:s==o?shiftBy=-(o-1)*t:1<s&&(shiftBy=-t*(s-1)),dots[s-1].classList.add("filled"),dots[currentIndex-1].classList.remove("filled"),storyContainer.style.transform=`translateX(${shiftBy}px)`,currentIndex=s},changeDot=e=>{var t=storyScreen.getBoundingClientRect().width,s=(Array.from(dots).forEach(e=>e.classList.remove("filled")),Array.from(dots).indexOf(e));e.classList.add("filled"),shiftBy=0==s?0:-t*s,currentIndex=s+1,storyContainer.style.transform=`translateX(${shiftBy}px)`},adventures=document.querySelectorAll(".adventure"),fromLeft=document.querySelectorAll("from-left"),slideInOptions={threshold:0,rootMargin:"0px 0px -50px 0px"},slideInObserver=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.isIntersecting&&e.target.classList.add("slide-in"),t.unobserve(e.target))})},slideInOptions),srcset=(adventures.forEach(e=>{slideInObserver.observe(e)}),{0:{src:"tri-my-best-buddies-celebrate-as-runner-crosses-finishline",alt:"tri my best buddies celebrate as runner crosses finishline"},1:{src:"tri-my-best-biker-red-helmet-smiles",alt:"tri my best biker in red helmet smiles"},2:{src:"tri-my-best-partcipant-holds-finish-strong-sign",alt:"tri my best participant holds finish strong sign"},3:{src:"tri-my-best-biker-in-tutu-bikes-with-buddies",alt:"tri my best biker in tutu bikes as buddies jog alongside"},4:{src:"tri-my-best-swimmer-smiles-at-camera",alt:"tri my best swimmer smiles at the camera"},5:{src:"tri-my-best-runner-breaks-finishline-tape",alt:"tri my best runner breaks yellow finishline tape"},6:{src:"tri-my-best-swimmer-holds-onto-pool-wall",alt:"tri my best swimmer holds onto pool wall"},7:{src:"tri-my-best-participant-poses-with-mom-and-dad",alt:"tri my best participant poses with mom and dad"},8:{src:"tri-my-best-swimmer-in-red-innertube-with-swim-helper",alt:"tri my best swimmer in red innertube with swim helper"},9:{src:"tri-my-best-buddies-assist-participant-to-finishline",alt:"tri my best buddies assist participant to finishline"},10:{src:"tri-my-best-runner-triumphantly-crosses-finishline",alt:"tri my best runner triumphantly crosses finishline"},11:{src:"tri-my-best-biker-bikes-beside-buddy",alt:"tri my best biker bikes beside buddy"},12:{src:"tri-my-best-participant-receiving-medal",alt:"tri my best participant receives medal from volunteer"},13:{src:"tri-my-best-swimmer",alt:"tri my best swimmer in mid stroke"},14:{src:"tri-my-best-participant-holds-certificate",alt:"tri my best participant poses holding certificate"},15:{src:"tri-my-best-swimmer-with-pink-pool-noodle-smiles",alt:"tri my best swimmer with pink pool noodle smiles at the camera"},16:{src:"tri-my-best-partcipant-holds-the-hand-of-volunteer",alt:"tri my best partcipant hold the hand of volunteer"},17:{src:"tri-my-best-runner-crosses-finishline-buddies-behind",alt:"tri my best runner crosses finishline with buddies behind"},18:{src:"tri-my-best-swimmer-touches-wall",alt:"tri my best swimmer touches wall"},19:{src:"tri-my-best-runner-runs-with-family",alt:"tri my best runner runs with family"},20:{src:"tri-my-best-runner-proudly-crosses-finishline",alt:"tri my best runner proudly crosses finishline"},21:{src:"tri-my-best-participant-Ellie-poses-with-family",alt:"tri my best participant Ellie poses with family"},22:{src:"tri-my-best-swimmer-delighted-while-swimming",alt:"tri my best swimmer delighted while swimming"},23:{src:"tri-my-best-particpant-rides-on-buddys-back",alt:"tri my best participant rides on buddy's back"}});let length=Object.keys(srcset).length,currentImage;const openLightbox=e=>{var t=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${t}px`,document.getElementById("lightbox").classList.toggle("is-open"),document.getElementById("lightbox").style.top=t+"px",displayImg(e)},changeImage=e=>{let t=currentImage+e;0==t?t=length:t==length+1&&(t=1),displayImg(t-1)},displayImg=e=>{let t=document.getElementById("lightbox-source"),s=document.getElementById("lightbox-img"),o=(t.setAttribute("srcset",`../../images/webp/${srcset[e].src}@2x.webp 480w, ../../images/webp/${srcset[e].src}@3x.webp 700w, ../../images/webp/${srcset[e].src}@4x.webp 1400w`),s.setAttribute("srcset",`../../images/webp/${srcset[e].src}@2x.jpg 480w, ../../images/${srcset[e].src}@3x.jpg 700w, ../../images/webp/${srcset[e].src}@4x.jpg 1400w`),s.setAttribute("src",`../../images/webp/${srcset[e].src}@2x.jpg`),s.setAttribute("alt",srcset[e].alt),currentImage=e+1,document.getElementById("lightbox-index"));o.textContent=currentImage+"/"+length},closeLightbox=()=>{var e=document.body.style.top;document.getElementById("lightbox").classList.toggle("is-open"),document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))},listenToClose=e=>{e.target.closest(".lightbox__arrow")&&!e.target.matches("#close-lightbox")||closeLightbox()},toggleBtn=document.getElementById("toggle-btn"),target=document.getElementById("target"),body=document.querySelector("body"),logo=document.getElementById("logo"),shadowLogo=document.getElementById("shadow-logo"),desktopDonate=document.getElementById("desktop-donate-btn"),nav=document.getElementById("nav"),navmenu=document.getElementById("nav-menu"),navlist=document.getElementById("nav-list"),navListItem=document.getElementsByClassName("nav__list-item"),navListLink=document.getElementsByClassName("nav__list-link"),navDropdown=document.getElementsByClassName("nav__dropdown"),navDropdownLink=document.getElementsByClassName("nav__dropdown-link"),workShadow=document.getElementById("work-shadow"),involvedShadow=document.getElementById("involved-shadow"),aboutShadow=document.getElementById("about-shadow"),dropdownToggle=document.getElementsByClassName("nav__dropdown-toggle-icon"),openSubMenu=e=>{let t=document.getElementById(e),s=document.getElementById(e+"-shadow");t.classList.add("openSubMenu"),s.classList.add("openSubMenu")},closeSubMenu=e=>{let t=document.getElementById(e),s=document.getElementById(e+"-shadow");t.classList.remove("openSubMenu"),s.classList.remove("openSubMenu")},addScrolled=[logo,shadowLogo,desktopDonate,workShadow,involvedShadow,aboutShadow],scrolledOptions={threshold:1},resizeNavbar=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting?(addScrolled.forEach(e=>{e.classList.remove("scrolled")}),Array.from(navListLink).forEach(e=>{e.classList.remove("scrolled")}),Array.from(navListItem).forEach(e=>{e.classList.remove("scrolled")}),Array.from(navDropdownLink).forEach(e=>{e.classList.remove("scrolled")})):e.isIntersecting||(addScrolled.forEach(e=>{e.classList.add("scrolled")}),Array.from(navListLink).forEach(e=>{e.classList.add("scrolled")}),Array.from(navListItem).forEach(e=>{e.classList.add("scrolled")}),Array.from(navDropdownLink).forEach(e=>{e.classList.add("scrolled")}))})},scrolledOptions),closeDropdowns=(resizeNavbar.observe(target),()=>{Array.from(dropdownToggle).forEach(e=>e.classList.remove("is-open")),Array.from(navDropdown).forEach(e=>e.classList.remove("is-open"))}),addIsActive=[toggleBtn,logo,shadowLogo,navmenu,navlist,body,nav],toggleMenu=()=>{closeDropdowns(),Array.from(navListItem).forEach(e=>e.classList.toggle("is-active")),Array.from(navDropdownLink).forEach(e=>e.classList.toggle("is-active")),addIsActive.forEach(e=>e.classList.toggle("is-active"))},toggleMobileDropdown=(t,s)=>{t.children[0].classList.toggle("is-open"),document.getElementById(s).classList.toggle("is-open"),Array.from(navDropdown).forEach(e=>{e.id!==s&&e.classList.remove("is-open")}),Array.from(dropdownToggle).forEach(e=>{e!==t.children[0]&&e.classList.remove("is-open")})},calcShadow=(!function(e){var t=e.createElement("script");t.setAttribute("data-trigger","triggerId"),t.setAttribute("data-account","9DBXMzwRHL"),t.setAttribute("src","https://cdn.userway.org/widget.js"),(e.body||e.head).appendChild(t)}(document),e=>{var t=document.getElementById(e);const s=document.getElementById(e+"-shadow");e=t.offsetHeight;s.style.height=e+"px"});