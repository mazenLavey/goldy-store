

// sales slider
const salesSlider = document.querySelectorAll('.sales__img img');
const salesBullets = document.querySelectorAll('.sales__bullets span');
let salesImgs = 0;

function changeSalesImg(imgIndex, parentBox) {
    let allImgs = Array.from(parentBox.getElementsByTagName('img'));
    allImgs.forEach((img)=>{
        img.classList.remove('active')
    })
    allImgs[imgIndex].classList.add('active');
    changeSalesBullets(imgIndex, parentBox);
};


function changeSalesBullets(imgIndex, parentBox) {
    let allBullets = Array.from(parentBox.querySelectorAll('.sales__bullets span'));
    allBullets.forEach((bullet)=>{
        bullet.classList.remove('active');
        if (+imgIndex === +bullet.dataset.index) {
            bullet.classList.add('active');
        };
    })
};

function toPrevSalesPhoto(parentBox) {
    salesImgs--,
    salesImgs < 0? salesImgs = (Array.from(parentBox.getElementsByTagName('img')).length -1): null;
    changeSalesImg(salesImgs, parentBox);
}

function toNextSalesPhoto(parentBox) {
    salesImgs++,
    salesImgs >= Array.from(parentBox.getElementsByTagName('img')).length? salesImgs = 0: null;
    changeSalesImg(salesImgs, parentBox)
}

salesBullets.forEach((element)=>{
    element.addEventListener('click', ()=>{
        // define parent element
        let parentBox = element.parentElement.parentElement;
        changeSalesImg(element.dataset.index, parentBox);
    });
});

// swape settings for slider for mobile
let salesX1;
let salesY1;

salesSlider.forEach((img)=>{
    img.addEventListener('touchstart', (e)=>{
        salesX1 = e.touches[0].clientX;
        salesY1 = e.touches[0].clientY;
    }, {passive: true});

    img.addEventListener('touchmove', (e)=>{
        if (salesX1 || salesY1) {
            let x2 = e.touches[0].clientX;
            let y2 = e.touches[0].clientY;
            
            let diffX = x2 - salesX1;
            let difY = y2 - salesY1;
        
            if (Math.abs(diffX) > Math.abs(difY)) {
                if (diffX > 0) {
                    toPrevSalesPhoto(e.target.parentElement);
        
                } else if (diffX < 0) {
                    toNextSalesPhoto(e.target.parentElement);
                }
            };
        
            salesX1 = null;
            salesY1 = null;
        }
    }, {passive: true});
});


// select input logic
const selectBox = document.querySelectorAll('.select__input');
const salesCards = document.querySelectorAll('.sales__card');

selectBox.forEach((box)=>{
    box.addEventListener('click', ()=>{
        box.firstElementChild.classList.toggle('active');

        // for region select component
        if (box.classList.contains('region')) {
            box.classList.toggle('rotate');
        }

        // select only list elements from this box (sale card)
        const selectList = Array.from(box.firstElementChild.getElementsByTagName('li'));

        selectList.forEach((li)=>{
            li.addEventListener('click', function chooseListElement(e) {
                let liArray = Array.from(li.parentElement.getElementsByTagName('li'));

                liArray.forEach((li)=>{
                    li.classList.remove('selected');
                });

                e.target.classList.add('selected');
                e.target.parentElement.nextElementSibling.innerText = `${e.target.innerText}`;
                e.stopPropagation();
                li.removeEventListener('click', chooseListElement);
            })
            
            
        })



        // close dropdown menu and events
        if (box.firstElementChild.classList.contains('active')) {
            box.firstElementChild.addEventListener('mouseleave', ()=>{
                box.firstElementChild.classList.remove('active');
                box.classList.remove('rotate');
            });

            salesCards.forEach((card)=>{
                card.addEventListener('mouseleave', ()=>{
                    box.firstElementChild.classList.remove('active');
                    box.classList.remove('rotate');
                })
            });

            document.addEventListener('click', (e)=>{
                if (e.target !== box && e.target !== box.firstElementChild) {
                    box.firstElementChild.classList.remove('active');
                    box.classList.remove('rotate');
                }
            });
        }

    });
    
});

// show dropdown on mobile

const mobileDropdownBtn = document.querySelectorAll('.mobile__dropdown-btn');

mobileDropdownBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.parentElement.getElementsByClassName('sales__card-options')[0].classList.toggle('active');

        // adding shadow to the box
        btn.parentElement.classList.add('shadow');
        
        if (!btn.parentElement.getElementsByClassName('sales__card-options')[0].classList.contains('active')) {
            btn.parentElement.classList.remove('shadow');
        }
    });

    // remove dropdown menu when resizing screen
    window.addEventListener('resize', ()=>{
        btn.parentElement.getElementsByClassName('sales__card-options')[0].classList.remove('active');

        // removing shadow from the box
        btn.parentElement.classList.remove('shadow');
    })
})



// btns logic

const actionBtns = document.querySelectorAll('.action-btn i');

actionBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btn.classList.toggle('active');
    })
})

// catalog btn class toggle

const catalogBtn = document.querySelectorAll('.catalog__btn');

catalogBtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        catalogBtn.forEach((element)=>{
            element.classList.remove('active');
        })
        btn.classList.add('active');
    })
})