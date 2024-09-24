// video-slide
const videoSlide = new Swiper('.video-slide', {
    loop: true,
    autoplay : {
        delay: 3000
    },
    speed: 1000,
    // touchRatio:0,
    // allowSlidePrev: false,
    // allowSlideNext: false
})
// videoSlide.on('slideChangeTransitionEnd', function () {
//     currentSlide = videoSlide.slides[videoSlide.activeIndex];
//     fadeText = $(currentSlide).find('.text');
//     fadeText.css('opacity', 1);
// });

// videoSlide.on('slideChangeTransitionStart', function () {
//     currentSlide = videoSlide.slides[videoSlide.activeIndex];
//     fadeText = $(currentSlide).find('.text');
//     fadeText.css('opacity', 0);
// });




// 사이드메뉴 (햄버거버튼)
$('.header .btn-menu').click(function(){
    $('.header .side-menu, .header .btn-menu').toggleClass('on')
})
$('.side-list.language .side-item').click(function(){
    if ($(this).find('button').hasClass('on')) {
        $(this).find('button').removeClass('on');
    } else {
        $('.header .side-menu .side-list.language button').removeClass('on');
        $(this).find('button').addClass('on');
    }
})
$('.side-list .side-item.more').click(function(){
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
    } else {
        $(this).addClass('on');
    }
})




// select-option
 $('.select').change(function(){
    $(this).css('color', '#000');
 })


// popup-search
$('.sc-search .inputForm2').click(function(){
    $('.pop-search').addClass('on');
})
$('.pop-search .close-btn').click(function() {
    $('.pop-search').removeClass('on');
})



 // people-slide
peopleSlide = new Swiper('.people-slide', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    navigation: {
        prevEl: '.sc-people .prev',
        nextEl: '.sc-people .next',
    },
    breakpoints:{
        768:{
            slidesPerView: 1.1,
        },
    }
})



// company-slide 
companySlide = new Swiper('.company-slide', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        prevEl: '.prev',
        nextEl: '.next',
    },
    breakpoints:{
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },

    }
})



// header sub-menu
$('.gnb .nav-item').hover(function(){   // nav-item(li) hover 하면
    child = $(this).find('.sub');

    // li의 자식이 존재하면
    if(child.length){
        $('.gnb').addClass('on')    // 전체 nav가 on이 된다
        child.addClass('on');       // sub(ul)도 on이 된다
    }
}, function(){
    $('.gnb').removeClass('on')
    child.removeClass('on');
})


// footer site-btn
$('.footer .site-btn').click(function(){
    $('.footer .site-area').toggleClass('on');
})


// language-sub 
$('.language-link-first').click(function(e){
    e.preventDefault();
    $('.language-sub').toggleClass('on');
})

// 라디오버튼의 toggle 기능 (잘 안된다..)
// $('.pop-search .form input[type="radio"]').click(function(e) {
//    var prevValue = $(this).data('storedValue');
   
//    if (prevValue) {
//     $(this).prop('checked', !previousValue);
//     $(this).data('storedValue', !previousValue);
//    } else {
//     $(this).data('storedValue', true);
//       $("input[type=radio]:not(:checked)").data("storedValue", false);
//    }
// });



// 모바일팝업 서브메뉴 

$('.list-area li span').click(function(){
    if ($(this).siblings('.sub-list').hasClass('on')) {
        $(this).siblings('.sub-list').removeClass('on');
    } else {
        $(this).siblings('.sub-list').addClass('on');
    }
})

$('.sub-btn-all').click(function(){
    if ($(this).hasClass('on')) {
        $(this).removeClass('on');
    } else {
        $(this).addClass('on');
    }
})