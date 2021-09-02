new Swiper('.image-slider', {
    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // навигация
    // буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // буллеты
        clickable: true,
        dinamicbullets: true,
    },
    autoHeight: true,
    loop: true,
    //    автопрокрутка
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
        speed: 1000,

});

let swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        // буллеты
        clickable: true,
        dinamicbullets: true,
    },
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
        speed: 1000,
    
});



let btnsContainer = document.querySelector('.btns-container')

btnsContainer.addEventListener('click', function(e) {
	if (!e.target.closest("button")) return;
	let btn = e.target.closest("button");
	if (btn.classList.contains('active')) return;

    let btns = Array.from(this.querySelectorAll('button'));

    removeClass(btns, 'active');
    btn.classList.add('active');

    let btnId = btn.id;
    
    let boxs = Array.from(document.querySelectorAll('.box'));
    removeClass(boxs, 'hide');
    if (btnId === 'Coffee & Drink') return;

    boxs 
        .filter(box => box.dataset.box !== btnId)
        .map(box => box.classList.add('hide'));
        
});

function removeClass(btnsArr, className) {
    btnsArr 
        .filter(item => item.classList.contains(className))
        .map(item => item.classList.remove(className));
}



let btnsFood = document.querySelector('.food__menu')

btnsFood.addEventListener('click', function(e) {
	if (!e.target.closest("button")) return;
	let btn = e.target.closest("button");
	if (btn.classList.contains('food__btn_active')) return;

    let btns = Array.from(this.querySelectorAll('button'));

    removeClass(btns, 'food__btn_active');
    btn.classList.add('food__btn_active');

    let btnId = btn.id;
    
    let boxs = Array.from(document.querySelectorAll('.food-box'));
    removeClass(boxs, 'hidden');
    if (btnId === 'drinks') return;

    boxs 
        .filter(box => box.dataset.food !== btnId)
        .map(box => box.classList.add('hidden'));
        
});

function removeClass(btnsArr, className) {
    btnsArr 
        .filter(item => item.classList.contains(className))
        .map(item => item.classList.remove(className));
}

// function Food() {
//     let bindAll = function() {
//       let menuElements = document.querySelectorAll('[data-food]');
//       for(let i = 0; i < menuElements.length ; i++) {
//         menuElements[i].addEventListener('click', change, false);
//       }
//     }
  
//     let clear = function() {
//       let menuElements = document.querySelectorAll('[data-food]');
//       for(let i = 0; i < menuElements.length ; i++) {
//         menuElements[i].classList.remove('food__btn_active');
//         let id = menuElements[i].getAttribute('data-food');
//         document.getElementById(id).classList.remove('food__btn_active');
//       }
//     }
  
//     let change = function(e) {
//       clear();
//       e.target.classList.add('food__btn_active');
//       let id = e.currentTarget.getAttribute('data-food');
//       document.getElementById(id).classList.add('food__btn_active');
//     }
  
//     bindAll();
//   }
  
//   let connectTabs = new Food();