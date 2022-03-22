const stories = document.getElementsByClassName("story__slider-card");
const storyContainer = document.getElementById('story-slider');
const storyScreen = document.getElementById('story-screen');
const dots = document.getElementsByClassName('story__indicators-dot')

let shiftBy;
let width = storyScreen.getBoundingClientRect().width;
let currentIndex = 1;

const changeStory = (direction) => {
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