

// deal offer slider
const dealGllary = document.querySelector('.deal__gallary');
const dealToRight = document.getElementById('deal_toRight');
const dealToLeft = document.getElementById('deal_toLeft');

const photos = document.querySelectorAll('.deal__gallary img');

let width;
let imgCount = 0;

findPhotoWidth();
setTimeout(()=>{
    findPhotoWidth(); 
    // for Firefox delay;
}, 100)

function findPhotoWidth() {
    width = photos[0].offsetWidth;
}

function moveSlider(count) {
    dealGllary.style = `transform: translateX(-${width * count}px);`
}

window.addEventListener('resize', ()=>{
    findPhotoWidth();
})

dealToRight.addEventListener('click', ()=>{
    toNext()
    
})
dealToLeft.addEventListener('click', ()=>{
    toPrev()
})

function toPrev() {
    imgCount--,
    imgCount < 0? imgCount = (photos.length -1): null;
    moveSlider(imgCount);
}

function toNext() {
    imgCount++,
    imgCount >= photos.length? imgCount = 0: null;
    moveSlider(imgCount)
}

// swape settings for slider for mobile
let x1;
let y1;

photos.forEach((img)=>{
    img.addEventListener('touchstart', (e)=>{
        x1 = e.touches[0].clientX;
        y1 = e.touches[0].clientY;
    }, {passive: true});

    img.addEventListener('touchmove', (e)=>{
        if (x1 || y1) {
            let x2 = e.touches[0].clientX;
            let y2 = e.touches[0].clientY;
            
            let diffX = x2 - x1;
            let difY = y2 - y1;
        
            if (Math.abs(diffX) > Math.abs(difY)) {
                if (diffX > 0) {
                    toPrev();
        
                } else if (diffX < 0) {
                    toNext();
                }
            };
        
            x1 = null;
            y1 = null;
        }
    }, {passive: true});
});


// count down for events
// every time you open the page it will show that 12 hours only left for the offer

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let nextDay = new Date().getDate()+1;
let thisMonth = new Date().getMonth();
let thisYear = new Date().getFullYear();

let endDate = new Date(thisYear, thisMonth, nextDay, 12, 59, 59).getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let distance = (endDate - dateNow) / 1000; // in seconds
    if (distance > 0) {
        let hoursNum = Math.floor(distance % (60 * 60 * 24) / (60 * 60));
        let minutesNum = Math.floor(distance % (60 * 60 ) / (60));
        let secondsNum = Math.floor(distance % (60 ));

        hours.innerHTML = hoursNum < 10 ? `0${hoursNum}`: hoursNum;
        minutes.innerHTML = minutesNum < 10 ? `0${minutesNum}`: minutesNum;
        seconds.innerHTML = secondsNum < 10 ? `0${secondsNum}`: secondsNum;
    } else if (distance <= 0) {
        window.clearInterval(counter);
    }
}, 1000);



// like btn logic

const likeBtns = document.querySelectorAll('.like-btn');

likeBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('active');
    })
})

// tooltips logic for small screens

const sizeTooltipsIcon = document.getElementById('size__tooltips_icon');

sizeTooltipsIcon.addEventListener('click', ()=>{
    sizeTooltipsIcon.firstElementChild.classList.toggle('show');

    if (sizeTooltipsIcon.firstElementChild.classList.contains('show')) {
        document.addEventListener('click', function closeTooltips(e) {
            if (e.target !== sizeTooltipsIcon.firstElementChild && e.target !== sizeTooltipsIcon) {
                sizeTooltipsIcon.firstElementChild.classList.remove('show');
                document.removeEventListener('click', closeTooltips);
            }
            
        })
    }
})