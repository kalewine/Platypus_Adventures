class PlatypusSponsors extends HTMLElement {
    connectedCallback(){
        this.innerHTML =
`<section class="supporters">
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
        </section>`
    }
}

customElements.define('platypus-sponsors', PlatypusSponsors);