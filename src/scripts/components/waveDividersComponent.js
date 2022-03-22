class IntroWaves extends HTMLElement {
    constructor(){
        super();
        
        const introSection = document.createElement('section');
        introSection.setAttribute('class', 'waves__container');
        introSection.setAttribute('id', 'waves-intro');
        const wavesTopCrests = document.createElement('img');
        wavesTopCrests.setAttribute('class', 'waves__crests top-waves');
        wavesTopCrests.setAttribute('src', '../../images/purple-waves-top.svg');
        wavesTopCrests.setAttribute('alt', 'upward wave crests');
        const wavesBottomCrests = document.createElement('img');
        wavesBottomCrests.setAttribute('class', 'waves__crests bottom-waves');
        wavesBottomCrests.setAttribute('src', '../../images/purple-waves-bottom.svg');
        wavesBottomCrests.setAttribute('alt', 'downward wave crests');

        const wavesBody = document.createElement('div');
        wavesBody.setAttribute('class', 'waves__body waves__purple');
        const wavesContent = document.createElement('article');
        wavesContent.setAttribute('class', 'intro__content');
        
        const introTitle = document.createElement('h1');
        introTitle.setAttribute('class', 'intro__title');
        introTitle.textContent = this.getAttribute('intro-title')

        const introText = document.createElement('p');
        introText.setAttribute('class', 'intro__text');
        introText.textContent = this.getAttribute('intro-text')

        wavesContent.appendChild(introTitle);
        wavesContent.appendChild(introText);
        wavesBody.appendChild(wavesContent);
        introSection.appendChild(wavesTopCrests);
        introSection.appendChild(wavesBody);
        introSection.appendChild(wavesBottomCrests);
        this.appendChild(introSection)
    }
}


class WavesDivider extends HTMLElement {
    constructor(){
        super();
        const wavesSection = document.createElement('section');
        wavesSection.setAttribute('class','waves__container');
        const bkgdColor = this.getAttribute('background-color');
        const btnColor = this.getAttribute('button-color');
        const link = this.getAttribute('link');

        const wavesTopCrests = document.createElement('img');
        wavesTopCrests.setAttribute('class', 'waves__crests top-waves');
        wavesTopCrests.setAttribute('src', `../../images/${bkgdColor}-waves-top.svg`);
        wavesTopCrests.setAttribute('alt', 'upward wave crests');
        const wavesBottomCrests = document.createElement('img');
        wavesBottomCrests.setAttribute('class', 'waves__crests bottom-waves');
        wavesBottomCrests.setAttribute('src',`../../images/${bkgdColor}-waves-bottom.svg`);
        wavesBottomCrests.setAttribute('alt', 'downward wave crests');

        const wavesBody = document.createElement('div');
        wavesBody.setAttribute('class',`waves__body waves__${bkgdColor}`);

        const wavesContent = document.createElement('article');
        wavesContent.setAttribute('class', 'divider__content');
        
        const dividerText = document.createElement('h2');
        dividerText.setAttribute('class', 'divider__text');
        dividerText.textContent = this.getAttribute('divider-text')

        const dividerBtn = document.createElement('a');
        dividerBtn.setAttribute('href', `${link}`);
        dividerBtn.setAttribute('class', `button button__${btnColor}`);
        dividerBtn.textContent = this.getAttribute('btn-text')

        wavesContent.appendChild(dividerText);
        wavesContent.appendChild(dividerBtn);
        wavesBody.appendChild(wavesContent);
        wavesSection.appendChild(wavesTopCrests);
        wavesSection.appendChild(wavesBody);
        wavesSection.appendChild(wavesBottomCrests);
        this.appendChild(wavesSection)
    }
}



customElements.define('intro-waves', IntroWaves);
customElements.define('waves-divider', WavesDivider);