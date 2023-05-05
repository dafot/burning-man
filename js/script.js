

'use strict';

const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.header__nav')
console.log(nav);


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})
