

// show mobile menu
const navMenuBtn = document.getElementById('header__menu-mobile');
const navMenu = document.querySelector('.nav__mobile');
const navMenuOverlay = document.querySelector('.nav__mobile-overlay');
const navMenuLinks = document.getElementById('nav__menu__mobile');

const offcanvasMobileMenu = ()=>{
    navMenuOverlay.classList.toggle('active');
    navMenu.classList.toggle('active');
}

navMenuBtn.addEventListener('click', ()=>{
    offcanvasMobileMenu();
})

navMenuOverlay.addEventListener('click', ()=>{
    offcanvasMobileMenu();
})

navMenuLinks.addEventListener('click', ()=>{
    offcanvasMobileMenu();
})

// header shadow for mobile
const headerMobile = document.querySelector('.header__mobile');
window.addEventListener('scroll', ()=>{
    if (headerMobile.offsetTop > 0 ) {
        headerMobile.style = 'box-shadow: 0 0 10px 2px #C9C9C9;';
    } else {
        headerMobile.style = 'box-shadow: unset;';
    }
})


