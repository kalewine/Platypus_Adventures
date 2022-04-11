// Hero image carousel 
// const heroSrcset = {
//     0: {
//         src: '',
//         alt: ''
//     }, 
//     1: {
//         src: '',
//         alt: ''
//     }
// }

// const webpHomeImg = document.getElementById('home-img-webp');
// const homeImg = document.getElementById('home-img');

// const changeHero = () => {
//     webpHomeImg.setAttribute('srcset', `images/webp/athlete-rides-red-bike-helped-by-buddies@1x.webp 500w,
//         images/webp/athlete-rides-red-bike-helped-by-buddies@2x.webp 768w,
//         images/webp/athlete-rides-red-bike-helped-by-buddies@3x.webp 1400w,
//         images/webp/athlete-rides-red-bike-helped-by-buddies@4x.webp 1920w`);
//     homeImg.setAttribute('srcset', `images/athlete-rides-red-bike-helped-by-buddies@1x.jpg 500w,
//     images/athlete-rides-red-bike-helped-by-buddies@2x.jpg 768w,
//     images/athlete-rides-red-bike-helped-by-buddies@3x.jpg 1400w,
//     images/athlete-rides-red-bike-helped-by-buddies@4x.jpg 1920w`)
//     homeImg.setAttribute('src', 'images/athlete-in-wheelchair-finishes-race@4x.jpg')
//     setTimeout(changeHero, 3000);
// }

// setTimeout(changeHero, 3000);

// Story slider
const stories = document.getElementsByClassName("story__slider-card");
const storyContainer = document.getElementById('story-slider');
const storyScreen = document.getElementById('story-screen');
const dots = document.getElementsByClassName('story__indicators-dot')

let shiftBy;
let currentIndex = 1;

const changeStory = (direction) => {
    let width = storyScreen.getBoundingClientRect().width;
    let newIndex;
    let maxIndex = stories.length; 
   
   
    // Set current index
    if(direction == -1){
        currentIndex == maxIndex ? newIndex = 1 : newIndex = (currentIndex+1);
    }else {
        currentIndex > 1 ? newIndex = (currentIndex-1): newIndex = maxIndex;
    }

    if(newIndex == 1){
        shiftBy = 0;
    }else if(newIndex == maxIndex){
        shiftBy = -(maxIndex-1) * width; 
    }else if(newIndex > 1){
        shiftBy = -width * (newIndex-1)
    }

    dots[newIndex-1].classList.add('filled');
    dots[currentIndex-1].classList.remove('filled');
    storyContainer.style.transform = `translateX(${shiftBy}px)`;
    currentIndex = newIndex;
}
    

const changeDot = (selectedDot) => {
    let width = storyScreen.getBoundingClientRect().width;
    Array.from(dots).forEach(dot => dot.classList.remove('filled'));
    let dotNumber = Array.from(dots).indexOf(selectedDot);
    selectedDot.classList.add('filled');
    if(dotNumber == 0){
        shiftBy = 0
    }else{
        shiftBy = -width * dotNumber
    }

    currentIndex = dotNumber + 1;
    storyContainer.style.transform = `translateX(${shiftBy}px)`;
}