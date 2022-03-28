class PlatypusFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML =
        `  <footer class="footer">
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
                    <a class="footer__link" href="mailto: info@platypusadventures.org">info@platypusadventures.org</a>
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
</footer>`
 }
};

customElements.define('platypus-footer', PlatypusFooter);