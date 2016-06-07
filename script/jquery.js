$('.cartex-checkbox').on('click', function(){
   $('.cartex-point').toggleClass('cartex-point-active');
});
$('#login').on('click', function(){
   $('.login-popup').toggleClass('jquery-show');
});
$('#register').on('click', function(){
   $('.register-popup').toggleClass('jquery-show');
});
$('.close-popup').on('click', function(){
   $('.register-popup').removeClass('jquery-show');
   $('.login-popup').removeClass('jquery-show');
   $('.cart-popup').removeClass('jquery-show');
});

$('.main-slick').slick({
   infinite: true,
   speed: 300,
   slidesToShow: 1,
   centerMode: true,
   variableWidth: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 1000,
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.shopdetail-thumb-div'
});
$('.shopdetail-thumb-div').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
});
$(document).ready(function(){
   $('.shopdetail-big-img').zoom();
});
