
// SLIDER ABOUT
const slider = document.querySelector ('.slider');
const prevBtn = document.querySelector ('.carret_left');
const nextBtn = document.querySelector ('.carret_right');
const dots = document.querySelectorAll ('.circle1');

let position = 0;
let dotIndex = 0;

const nextSlide = () => {
    if (position < (dots.length - 1) * 475) {
        position = position + 475;
        dotIndex++;
    }
    slider.style.right = position + 'px';
    thisSlide (dotIndex);
}
const prevSlide = () => {
    if (position > 0) {
        position = position - 475;
        dotIndex--;
    } else {
        position = 0;
        dotIndex = 0;
    }
    slider.style.right = position + 'px';
    thisSlide (dotIndex);
}
const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove ('active');
    }
    dots[index].classList.add ('active');
}
nextBtn.addEventListener ('click', nextSlide);
prevBtn.addEventListener ('click', prevSlide);

dots.forEach ((dot, index) => {
    dot.addEventListener ('click', () => {
        position = 475 * index;
        slider.style.right = position + 'px';
        dotIndex = index;
        thisSlide (dotIndex);
    })
})