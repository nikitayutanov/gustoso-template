'use strict';

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
let navVisible = false;

nav.addEventListener('click', (e) => {
    if (e.target.closest('.hamburger') && !navVisible) {
        nav.classList.add('navigation--visible');
        navVisible = true;
    } else if (!e.target.closest('.main-nav') && navVisible) {
        nav.classList.remove('navigation--visible');
        navVisible = false;
    }
});
