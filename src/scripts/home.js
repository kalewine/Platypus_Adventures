const leftArrow = document.getElementById("story-arrow-left");
const rightArrow = document.getElementById("story-arrow-right");
const stories = document.getElementById("story-slider");


leftArrow.addEventListener('click', () => {
    console.log("click")
    let width = 700;
    stories.style.transform =`translateX()`;

}) 