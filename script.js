function togglemenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}


const track = document.querySelector('.testimonial-track');
const dots = document.querySelectorAll('.testimonial-dot');
const originalCards = Array.from(document.querySelectorAll('.testimonial-card'));
const totalOriginal = originalCards.length;

let currentIndex = 0;
let isTransitioning = false;
let autoScrollInterval;
let isPaused = false;


