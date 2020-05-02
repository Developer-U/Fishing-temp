jQuery (function($) {
    $('.special-articles__slider').slick ({
        initialSlide: 0,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        prevArrow: '<button class="slick-prevDark" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-nextDark" aria-label="Next" type="button">Next</button>',
        dotsClass: 'slick-dots',        
    });

    $('.bestsellers__slider').slick ({
        initialSlide: 0,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        dotsClass: 'slick-dots',        
    });

    $('.bestsellers-news__slider').slick ({
        initialSlide: 0,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        dotsClass: 'slick-dots',        
    });

    $('.last-news__slider').slick ({
        initialSlide: 0,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        dotsClass: 'slick-dots',        
    });
});