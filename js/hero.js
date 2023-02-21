

// hero slider
const heroToLeft = document.getElementById('hero_toLeft');
const heroToRight = document.getElementById('hero_toRight');
const heroSlider = document.querySelectorAll('.hero-carousel picture');
const heroBullets = document.querySelectorAll('.hero__bullets span');
let heroImgs = 0;

function changeHeroImg(heroImgs) {
    heroSlider.forEach((img)=>{
        img.classList.remove('active')
    })
    heroSlider[heroImgs].classList.add('active');
    changeHeroBullets(heroImgs);
};


function changeHeroBullets(heroImgs) {
    heroBullets.forEach((bullet)=>{
        bullet.classList.remove('active');
        if (+heroImgs === +bullet.dataset.index) {
            bullet.classList.add('active');
        };
    })
};

heroToLeft.addEventListener('click', ()=>{
    heroImgs--,
    heroImgs < 0 ? heroImgs = (heroSlider.length -1): null;
    changeHeroImg(heroImgs);
});

heroToRight.addEventListener('click', ()=>{
    heroImgs++,
    heroImgs >= heroSlider.length ? heroImgs = 0: null;
    changeHeroImg(heroImgs);
});

heroBullets.forEach((element)=>{
    element.addEventListener('click', ()=>{
        changeHeroImg(element.dataset.index);
    });
});