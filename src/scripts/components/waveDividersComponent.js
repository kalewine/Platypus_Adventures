class DonateGreenPurple extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        `<section class="waves__container">
        <img class="waves__crests top-waves" src="../../images/green-waves-top.svg" alt="upward wave crests"> 
        <div class="waves__body waves__green">
            <div class="divider__content">
                <h2 class="divider__text">Help Make the Adventures Happen</h2>
                <a class="button button__purple" href="https://paypal.me/platypusadventures?country.x=US&locale.x=en_US">Donate</a>   
            </div>
        </div>
        <img class="waves__crests bottom-waves" src="../../images/green-waves-bottom.svg" alt="downward wave crests"> 
    </section>`
    }
}

class DonateYellowPurple extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        `<section class="waves__container">
        <img class="waves__crests top-waves" src="../../images/yellow-waves-top.svg" alt="upward wave crests"> 
        <div class="waves__body waves__yellow">
            <div class="divider__content">
                <h2 class="divider__text">Help Make the Adventures Happen</h2>
                <a class="button button__purple" href="https://paypal.me/platypusadventures?country.x=US&locale.x=en_US">Donate</a>   
            </div>
        </div>
        <img class="waves__crests bottom-waves" src="../../images/yellow-waves-bottom.svg" alt="downward wave crests"> 
    </section>`
    }
}

class VolunteerBlueYellow extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        `<section class="waves__container">
        <img class="waves__crests top-waves" src="../../images/blue-waves-top.svg" alt="upward wave crests"> 
        <div class="waves__body waves__blue">
            <div class="divider__content">
                <h2 class="divider__text">Become Part of the Adventure</h2>
                <a class="button button__yellow" href="/get-involved/volunteering">Volunteer</a>   
            </div>
        </div>
        <img class="waves__crests bottom-waves" src="../../images/blue-waves-bottom.svg" alt="downward wave crests"> 
    </section>`
    }
}

class ReadGreenPurple extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        `<section class="waves__container">
        <img class="waves__crests top-waves" src="../../images/green-waves-top.svg" alt="upward wave crests"> 
        <div class="waves__body waves__green">
            <div class="divider__content">
                <h2 class="divider__text">A Story with Every Adventure</h2>
                <a class="button button__purple" href="/platypus-stories">Read Ours</a>   
            </div>
        </div>
        <img class="waves__crests bottom-waves" src="../../images/green-waves-bottom.svg" alt="downward wave crests"> 
    </section>`
    }
}

class ReadPurpleGreen extends HTMLElement {
    connectedCallback(){
        this.innerHTML = 
        `<section class="waves__container">
        <img class="waves__crests top-waves" src="../../images/purple-waves-top.svg" alt="upward wave crests"> 
        <div class="waves__body waves__purple">
            <div class="divider__content">
                <h2 class="divider__text">A Story with Every Adventure</h2>
                <a class="button button__green" href="/platypus-stories">Read Ours</a>   
            </div>
        </div>
        <img class="waves__crests bottom-waves" src="../../images/purple-waves-bottom.svg" alt="downward wave crests"> 
    </section>`
    }
}



customElements.define('donate-green-purple', DonateGreenPurple);
customElements.define('donate-yellow-purple', DonateYellowPurple);
customElements.define('volunteer-blue-yellow', VolunteerBlueYellow);
customElements.define('read-green-purple', ReadGreenPurple);
customElements.define('read-purple-green', ReadPurpleGreen);