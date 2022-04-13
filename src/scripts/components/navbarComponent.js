class PlatypusNavbar extends HTMLElement {
    connectedCallback(){
        this.innerHTML =
        `<nav class="nav" id="nav">
        <div class="nav__container">
            <!-- LOGO -->
            <img class="nav__logo " id="shadow-logo" src="../../images/platypus_adventures_logo.svg"  alt="platypus with walking stick in a rainbow gradient circle"/>
            <a class="nav__logo-link " id="logo" href="/">
                <img class="nav__logo" src="../../images/platypus_adventures_logo.svg"  alt="platypus with walking stick in a rainbow gradient circle"/>
            </a>
            <!-- MENU -->
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list" id="nav-list">
                    <li class="nav__list-item" onmouseover="calcShadow('work')">
                        <div class="nav__toggle-positioner">
                            <a href="/platypus-work/" class="nav__list-link ">Our Work</a> 
                            <div class="nav__dropdown-toggle" onclick="toggleMobileDropdown(this, 'work')">
                                <img class="nav__dropdown-toggle-icon"  src="../../images/open_menu_icon.png"  />
                            </div>
                        </div>
                        <ul class="nav__dropdown" id="work">
                            <li class="nav__dropdown-item"><a href="/platypus-work/tri-my-best" class="nav__dropdown-link">Tri My Best</a></li>
                            <li class="nav__dropdown-item"><a href="/platypus-work/platypus-yoga" class="nav__dropdown-link" >Yoga</a></li>
                        </ul>
                        <div class="nav__dropdown-shadow" id="work-shadow"></div>
                    </li>
                    <li class="nav__list-item ">
                        <div class="nav__toggle-positioner">
                            <a href="/platypus-stories/" class="nav__list-link ">Our Stories</a>
                            <div class="nav__dropdown-toggle" id="stories-toggle">
                                <img class="nav__dropdown-toggle-icon"  src="../../images/open_menu_icon.png"  />
                            </div>
                        </div>
                    </li>
                    <li class="nav__list-item" onmouseover="calcShadow('about')">
                        <div class="nav__toggle-positioner">
                            <a href="/about-platypus-adventures/" class="nav__list-link ">About Us</a>  
                            <div class="nav__dropdown-toggle"onclick="toggleMobileDropdown(this, 'about')">
                                <img class="nav__dropdown-toggle-icon"  src="../../images/open_menu_icon.png"  />
                            </div>
                        </div>
                        <ul class="nav__dropdown" id="about">
                            <li class="nav__dropdown-item"><a href="/about-platypus-adventures/mission-and-values" class="nav__dropdown-link ">Our Mission and Values</a></li>
                            <li class="nav__dropdown-item"><a href="/about-platypus-adventures/platypus-leadership" class="nav__dropdown-link ">Our Leadership</a></li> 
                        </ul>
                        <div class="nav__dropdown-shadow" id='about-shadow'></div>
                    </li>
                    <li class="nav__list-item" onmouseover="calcShadow('involved')">
                        <div class="nav__toggle-positioner">
                            <a href="/get-involved/" class="nav__list-link ">Get Involved</a>
                            <div class="nav__dropdown-toggle"onclick="toggleMobileDropdown(this, 'involved')">
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
                <a id="triggerId"><img class="nav__btn-access" src="../../images/webp/accessibility_icon.webp"></a>
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
    </nav>`
    }
};

customElements.define('platypus-navbar', PlatypusNavbar);