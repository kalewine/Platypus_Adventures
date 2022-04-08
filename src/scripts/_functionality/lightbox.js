const srcset = {
    0: {
        src: 'tri-my-best-runner-smiles-runs-with-buddies',
        alt: 'smiling athlete in wheelchair wheeled across finish line'
    }, 
    1: {
        src: 'athlete-rides-red-bike-helped-by-buddies', 
        alt: 'tri my best athlete rides assisted bike with support of buddies'
    }, 
    2: {
        src: 'tri-my-best-biker-green-helmet', 
        alt: 'tri my best athlete rides assisted bike with support of buddies'
    }, 
    3: {
        src: '',
        alt: ''
    }, 
    4: {
        src: '',
        alt: ''
    },
    5: {
        src: '',
        alt: ''
    },
    6: {
        src: '',
        alt: ''
    }
}

let length = Object.keys(srcset).length;
let currentImage; 

const openLightbox = (n) => {
    document.querySelector("body").classList.toggle('is-active')
    document.getElementById('lightbox').classList.toggle('is-open');
    displayImg(n)
}

const changeImage = (dir) => {
    console.log(dir)
    console.log(currentImage)
    let newImage = (currentImage) + dir;
    if(newImage == 0){
        newImage = length
    }else if(newImage == length + 1){
        newImage = 1
    }
    console.log(newImage)
    displayImg(newImage-1)
}

const displayImg = (n) => {
    let lightboxSrc = document.getElementById("lightbox-source")
    let lightboxImg = document.getElementById("lightbox-img")
    lightboxSrc.setAttribute('srcset', `../../images/webp/${srcset[n].src}@1x.webp 500w, ../../images/webp/${srcset[n].src}@2x.webp 768w, ../../images/webp/${srcset[n].src}@3x.webp 1400w`);
    lightboxImg.setAttribute('srcset', `../../images/webp/${srcset[n].src}@1x.jpg 500w, ../../images/${srcset[n].src}@2x.jpg 768w, ../../images/webp/${srcset[n].src}@3x.jpg 1400w`);
    lightboxImg.setAttribute('src', `../../images/webp/${srcset[n].src}@2x.jpg`);
    lightboxImg.setAttribute('alt', srcset[n].alt)
    // display index
    currentImage = n + 1;
    let index = document.getElementById('lightbox-index');
    index.textContent = `${currentImage}\/${length}`;
}

const closeLightbox = () => {
    document.getElementById('lightbox').classList.toggle('is-open');
    document.querySelector("body").classList.toggle('is-active');
}
