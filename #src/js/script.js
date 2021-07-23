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
  loop:true,
//    автопрокрутка
//   autoplay: {
//       delay: 2500,
//       disableOnInteraction: false
//   },
//       speed: 1000,
  
})

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



let btnsContainer = document.querySelector('.buttons-menu')

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
    if (btnId === 'Drinks') return;

    boxs 
        .filter(box => box.dataset.box !== btnId)
        .map(box => box.classList.add('hide'));
        
});

function removeClass(btnsArr, className) {
    btnsArr 
        .filter(item => item.classList.contains(className))
        .map(item => item.classList.remove(className));
}
