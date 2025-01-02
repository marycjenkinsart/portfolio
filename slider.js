const hero = document.getElementById('top');
const slider = document.querySelector('#top .slider');
const left = document.querySelector('#top .left');
const right = document.querySelector('#top .right');

const sliderItemCount = slider.children.length;
let sliderPosition = 0;
left.addEventListener('click', () => {
    sliderPosition += sliderItemCount;
    sliderPosition -= 1;
    sliderPosition %= sliderItemCount;
    slider.style.left = -100*sliderPosition + '%';
});
right.addEventListener('click', () => {
    sliderPosition += 1;
    sliderPosition %= sliderItemCount;
    slider.style.left = -100*sliderPosition + '%';
});

