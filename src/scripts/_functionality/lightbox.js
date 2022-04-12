const srcset = {
    0: {
        src: 'tri-my-best-buddies-celebrate-as-runner-crosses-finishline',
        alt: 'tri my best buddies celebrate as runner crosses finishline'
    }, 
    1: {
        src: 'tri-my-best-biker-red-helmet-smiles', 
        alt: 'tri my best biker in red helmet smiles'
    }, 
    2: {
        src: 'tri-my-best-partcipant-holds-finish-strong-sign', 
        alt: 'tri my best participant holds finish strong sign'
    }, 
    3: {
        src: 'tri-my-best-biker-in-tutu-bikes-with-buddies',
        alt: 'tri my best biker in tutu bikes as buddies jog alongside'
    }, 
    4: {
        src: 'tri-my-best-swimmer-smiles-at-camera',
        alt: 'tri my best swimmer smiles at the camera'
    },
    5: {
        src: 'tri-my-best-runner-breaks-finishline-tape',
        alt: 'tri my best runner breaks yellow finishline tape'
    },
    6: {
        src: 'tri-my-best-swimmer-holds-onto-pool-wall',
        alt: 'tri my best swimmer holds onto pool wall'
    },
    7: {
        src: 'tri-my-best-participant-poses-with-mom-and-dad',
        alt: 'tri my best participant poses with mom and dad'
    },
    8: {
        src: 'tri-my-best-swimmer-in-red-innertube-with-swim-helper',
        alt: 'tri my best swimmer in red innertube with swim helper'
    },
    9: {
        src: 'tri-my-best-buddies-assist-participant-to-finishline',
        alt: 'tri my best buddies assist participant to finishline'
    },
    10: {
        src: 'tri-my-best-runner-triumphantly-crosses-finishline',
        alt: 'tri my best runner triumphantly crosses finishline'
    },
    11: {
        src: 'tri-my-best-biker-bikes-beside-buddy',
        alt: 'tri my best biker bikes beside buddy'
    },
    12: {
        src: 'tri-my-best-participant-receiving-medal',
        alt: 'tri my best participant receives medal from volunteer'
    },
    13: {
        src: 'tri-my-best-swimmer',
        alt: 'tri my best swimmer in mid stroke'
    },
    14: {
        src: 'tri-my-best-participant-holds-certificate',
        alt: 'tri my best participant poses holding certificate'
    },
    15: {
        src: 'tri-my-best-swimmer-with-pink-pool-noodle-smiles',
        alt: 'tri my best swimmer with pink pool noodle smiles at the camera'
    },
    16: {
        src: 'tri-my-best-partcipant-holds-the-hand-of-volunteer',
        alt: 'tri my best partcipant hold the hand of volunteer'
    },
    17: {
        src: 'tri-my-best-runner-crosses-finishline-buddies-behind',
        alt: 'tri my best runner crosses finishline with buddies behind'
    },
    18: {
        src: 'tri-my-best-swimmer-touches-wall',
        alt: 'tri my best swimmer touches wall'
    },
    19: {
        src: 'tri-my-best-runner-runs-with-family',
        alt: 'tri my best runner runs with family'
    },
    20: {
        src: 'tri-my-best-runner-proudly-crosses-finishline',
        alt: 'tri my best runner proudly crosses finishline'
    },
    21: {
        src: 'tri-my-best-participant-Ellie-poses-with-family',
        alt: 'tri my best participant Ellie poses with family'
    },
    22: {
        src: 'tri-my-best-swimmer-delighted-while-swimming',
        alt: 'tri my best swimmer delighted while swimming'
    },
    23: {
        src: 'tri-my-best-particpant-rides-on-buddys-back',
        alt: 'tri my best participant rides on buddy\'s back'
    }
}

let length = Object.keys(srcset).length;
let currentImage; 

const openLightbox = (n) => {
    let newPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${newPosition}px`;
    document.getElementById('lightbox').classList.toggle('is-open');
    document.getElementById('lightbox').style.top = `${newPosition}px`;
    displayImg(n)
}

const changeImage = (dir) => {
    let newImage = (currentImage) + dir;
    if(newImage == 0){
        newImage = length
    }else if(newImage == length + 1){
        newImage = 1
    }
    displayImg(newImage-1)
}

const displayImg = (n) => {
    let lightboxSrc = document.getElementById("lightbox-source")
    let lightboxImg = document.getElementById("lightbox-img")
    lightboxSrc.setAttribute('srcset', `../../images/webp/${srcset[n].src}@2x.webp 480w, ../../images/webp/${srcset[n].src}@3x.webp 700w, ../../images/webp/${srcset[n].src}@4x.webp 1400w`);
    lightboxImg.setAttribute('srcset', `../../images/webp/${srcset[n].src}@2x.jpg 480w, ../../images/${srcset[n].src}@3x.jpg 700w, ../../images/webp/${srcset[n].src}@4x.jpg 1400w`);
    lightboxImg.setAttribute('src', `../../images/webp/${srcset[n].src}@2x.jpg`);
    lightboxImg.setAttribute('alt', srcset[n].alt)
    // display index
    currentImage = n + 1;
    let index = document.getElementById('lightbox-index');
    index.textContent = `${currentImage}\/${length}`;
}

const closeLightbox = () => {
    const scrollY = document.body.style.top;
    document.getElementById('lightbox').classList.toggle('is-open');
    document.body.style.position = '';
    document.body.style.top =``;
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}
