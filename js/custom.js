$(document).ready(function () {




    //  skd slider

    $('#demo1').skdslider({
        slideSelector: '.slide',
        delay: 5000,
        animationSpeed: 2000,
        showNextPrev: true,
        showPlayButton: true,
        autoSlide: true,
        animationType: 'fading'
    });


    //  counter up start




    //   fixed-nav start

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();


        if (scrolling > 250) {


            $(".menu-bg").addClass("fixed-menu-bg");

        } else {

            $(".menu-bg").removeClass("fixed-menu-bg");

        }

        //        nav end

        if (scrolling > 500) {


            $(".scroll-btn").fadeIn(1000)

        } else {

            $(".scroll-btn").fadeOut(1000)

        }


    });

    //    scroll btn start


    $(".scroll-btn").click(function () {


        $("html,body").animate({
            scrollTop: "0"
        }, 1500);

    });


    //    scroll btn end

    //    counter plugin


    $('.counter').counterUp({

        time: 1800,
    });



});
