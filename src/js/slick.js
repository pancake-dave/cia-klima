$(document).ready(function(){
    $('.header__hero__img-box').slick({
        adaptiveHeight: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        mobileFirst: true,
    });
    $('.projects__gallery__box').slick({
        pauseOnHover: true,
        pauseOnFocus: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        mobileFirst: true,
        centerMode: true,
        variableWidth: true,
    });

  });