

// deal offer slider
const offerGallary = document.querySelector('.offers__wrapper');
const offerPhotos = document.querySelectorAll('.offers__wrapper img');


let offerPhotowidth = offerPhotos[0].offsetWidth;
let offerImgCount = 0;

// for Firefox delay;
setTimeout(()=>{
    offerPhotowidth = offerPhotos[0].offsetWidth;
}, 100)


function moveOfferSlider(count) {
    offerGallary.style = `transform: translateX(-${offerPhotowidth * count}px);`
}

window.addEventListener('resize', ()=>{
    offerPhotowidth = offerPhotos[0].offsetWidth;
})

function toPrevOfferPhoto() {
    offerImgCount--,
    offerImgCount < 0? offerImgCount = (offerPhotos.length -1): null;
    moveOfferSlider(offerImgCount);
}

function toNextOfferPhoto() {
    offerImgCount++,
    offerImgCount >= offerPhotos.length? offerImgCount = 0: null;
    moveOfferSlider(offerImgCount)
}

// swape settings for slider for mobile
let offerX1;
let offerY1;

offerPhotos.forEach((img)=>{
    img.addEventListener('touchstart', (e)=>{
        offerX1 = e.touches[0].clientX;
        offerY1 = e.touches[0].clientY;
    }, {passive: true});

    img.addEventListener('touchmove', (e)=>{
        if (offerX1 || offerY1) {
            let x2 = e.touches[0].clientX;
            let y2 = e.touches[0].clientY;
            
            let diffX = x2 - offerX1;
            let difY = y2 - offerY1;
        
            if (Math.abs(diffX) > Math.abs(difY)) {
                if (diffX > 0) {
                    toPrevOfferPhoto();
        
                } else if (diffX < 0) {
                    toNextOfferPhoto();
                }
            };
        
            offerX1 = null;
            offerY1 = null;
        }
    }, {passive: true});
});
