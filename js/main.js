$(document).ready(function(){
    $nav=$('.nav');
    $toggleCollapse=$('.toggle-collapse');

    /** click Event On Toggle Menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    //owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-nav-prev'), $('.owl-nav-next')]
    });

    $('.icon-left-right-ka-baap').css({background:'transparent'});

    //owl-carousel style left and right buttons
    $(".owl-prev").mouseover(function(){
        $(this).css({background:'transparent', color:'var(--text-gray)', outline:'none'});
    })

    $(".owl-next").mouseover(function(){
        $(this).css({background:'transparent', color:'var(--text-gray)', outline: 'none'})
    })
});