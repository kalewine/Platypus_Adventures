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
        const disabled = this.getAttribute('disabled') ?? false;

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
        dividerText.textContent = this.getAttribute('divider-text');

        

        const dividerBtn = document.createElement('a');
        dividerBtn.setAttribute('href', `${link}`);
        if (disabled) {
            dividerBtn.setAttribute('class', `button button__${btnColor}`);
        } else {
            dividerBtn.setAttribute('class', `button disabled`);
        }
        dividerBtn.setAttribute('class', `button button__${btnColor}`);
        dividerBtn.textContent = this.getAttribute('btn-text');
       

        wavesContent.appendChild(dividerText);
        if(this.hasAttribute('divider-paragraph')){
            const dividerParagraph = document.createElement('p');
            dividerParagraph.setAttribute('class', 'waves__paragraph')
            dividerParagraph.textContent = this.getAttribute('divider-paragraph');
            wavesContent.appendChild(dividerParagraph);
        }
        wavesContent.appendChild(dividerBtn);
        wavesBody.appendChild(wavesContent);
        wavesSection.appendChild(wavesTopCrests);
        wavesSection.appendChild(wavesBody);
        wavesSection.appendChild(wavesBottomCrests);
        this.appendChild(wavesSection)
    }
}

class HeaderWaves extends HTMLElement {
    constructor(){
        super();
        const headerWaves = document.createElement('section');
        headerWaves.setAttribute('class','header__waves');
        
        const wavesBottomCrests = document.createElement('img');
        wavesBottomCrests.setAttribute('class', 'waves__crests bottom-waves');
        wavesBottomCrests.setAttribute('src', '../../images/purple-waves-bottom.svg');
        wavesBottomCrests.setAttribute('alt', 'downward wave crests');
        
        const wavesBody = document.createElement('div');
        wavesBody.setAttribute('class', 'waves__body waves__purple');
        wavesBody.setAttribute('id','header-waves');
        
        const wavesContent = document.createElement('article');
        wavesContent.setAttribute('class', 'intro__content');
        
        const introTitle = document.createElement('h1');
        introTitle.setAttribute('class', 'intro__title');
        introTitle.textContent = this.getAttribute('intro-title')

        const introText = document.createElement('p');
        introText.setAttribute('class', 'intro__text');
        introText.textContent = this.getAttribute('intro-text');

        wavesContent.appendChild(introTitle);
        wavesContent.appendChild(introText);
        wavesBody.appendChild(wavesContent);
        headerWaves.appendChild(wavesBody);
        headerWaves.appendChild(wavesBottomCrests);
        this.appendChild(headerWaves)
    }
}


customElements.define('intro-waves', IntroWaves);
customElements.define('waves-divider', WavesDivider);
customElements.define('header-waves', HeaderWaves);