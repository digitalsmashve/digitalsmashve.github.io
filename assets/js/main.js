(function ($) {
    "use strict";
    

    // preloader
    $(window).on('load', function () {
        $('#preloader').delay(350).fadeOut('slow');
    })

    //--------------------------------------------------
    // Animation on Load Hero
    //--------------------------------------------------
    TweenMax.to('.overlay-start', 1, {
        delay: 1,
        opacity: '0',
        display: 'none',
    })
    TweenMax.to('.square-overlay', 2, {
        width: '0',
        delay: 2
    })

    TweenMax.from('.logo', 1, {
        y: '-100',
        delay: 2,
        autoAlpha: 0
    })
    TweenMax.from('.toggle-btn', 1, {
        y: '-100',
        delay: 2,
        autoAlpha: 0
    })
    TweenMax.from('.project-detail', 1, {
        y: '100',
        delay: 2,
        autoAlpha: 0
    })
    TweenMax.from('.line-single-page', 1, {
        height: '0',
        delay: 2,
        autoAlpha: 0
    })
    TweenMax.staggerFrom('.title-anim', 1, {
        y: '10',
        delay: 2,
        autoAlpha: 0
    }, '-0.25')



    //--------------------------------------------------
    // Animation on navbar scrolling background
    //--------------------------------------------------
    var wind = $(window);

    wind.on("scroll", function () {
        var bodyScroll = wind.scrollTop();

        if (bodyScroll > 200) {
            TweenMax.to('.toggle-btn', 0.4, {
                y: '-40'
            })

            TweenMax.to('.logo', 0.4, {
                y: '-35'
            })
            TweenMax.to('.bg-nav', 0.4, {
                y: '0'
            })
        } else {
            TweenMax.to('.logo', 0.4, {
                y: '0'
            })
            TweenMax.to('.toggle-btn', 0.4, {
                y: '0'
            })
            TweenMax.to('.bg-nav', 0.4, {
                y: '-70'
            })
        }
    });



    //--------------------------------------------------
    // Animation on Toggle button
    //--------------------------------------------------
    $(".toggle-btn").on('mouseenter', function () {
        TweenMax.to('.toggle-btn span', 0.2, {
            scale: '1.2'
        })
    })

    $(".toggle-btn").on('mouseleave', function () {
        TweenMax.to('.toggle-btn span', 0.2, {
            scale: '1'
        })
    })

    //--------------------------------------------------
    // Animation on Lines
    //--------------------------------------------------
    $(".between").each(function () {

        var controllerLine = new ScrollMagic.Controller();
        var lines = $(this).find(".line-between");

        var animateLine = new TimelineMax({
            repeat: false,
            paused: false,
            yoyo: false
        });

        animateLine
            .from(lines, 0.3, {
                height: '0',
                ease: Power4.easeOut
            });

        var LineScene = new ScrollMagic.Scene({
                offset: -150,
                triggerElement: this,
                reverse: false
            })
            .setTween(animateLine).addTo(controllerLine);
    });

    //--------------------------------------------------
    // Animation on Testimonial
    //--------------------------------------------------
    $(".fades").each(function () {

        var controllerFades = new ScrollMagic.Controller();

        var animateFades = new TimelineMax({
            repeat: false,
            paused: false,
            yoyo: false
        });

        animateFades
            .from(this, 0.3, {
                autoAlpha: 0,
                y: '90',
                ease: Power4.easeOut
            });

        var FadesScene = new ScrollMagic.Scene({
                offset: -150,
                triggerElement: this,
                reverse: false
            })
            .setTween(animateFades).addTo(controllerFades);
    });

    
    //--------------------------------------------------
    // Animation on About
    //--------------------------------------------------

    $(".about").each(function () {

        var controllerAbout = new ScrollMagic.Controller();
        var imgAbout = $(this).find(".about-img"),
            bgAbout = $(this).find(".right-bg"),
            titleAbout = $(this).find(".title"),
            subtitleAbout = $(this).find(".about-text .about-inner");

        var animateAbout = new TimelineMax({
            repeat: false,
            paused: false,
            yoyo: false
        });

        animateAbout
            .from(bgAbout, 0.3, {
                autoAlpha: 0,
                width: '0',
                ease: Power4.easeOut
            })
            .from(imgAbout, 0.3, {
                autoAlpha: 0,
                x: -100,
                ease: Power4.easeOut
            })
            .from(titleAbout, 0.3, {
                autoAlpha: 0,
                y: 100,
                ease: Power4.easeOut
            })

            .from(subtitleAbout, 0.3, {
                autoAlpha: 0,
                y: 100,
                ease: Power4.easeOut
            });



        var aboutScene = new ScrollMagic.Scene({
                offset: -150,
                triggerElement: this,
                reverse: false
            })

            .setTween(animateAbout).addTo(controllerAbout);

    });

    //--------------------------------------------------
    // Animation on Service
    //--------------------------------------------------

    $(".service").each(function () {

        var controllerService = new ScrollMagic.Controller();
        var itemService = $(this).find(".service-item"),
            titleService = $(this).find(".title"),
            iconService = $(this).find(".service-icon"),
            subtitleService = $(this).find(".service-text");

        var animateService = new TimelineMax({
            repeat: false,
            paused: false,
            yoyo: false
        });

        animateService
            .from(titleService, 0.3, {
                autoAlpha: 0,
                y: 100,
                ase: Power4.easeOut,
            })
            .from(itemService, 0.3, {
                autoAlpha: 0,
                y: 100,
                ease: Power4.easeOut,
            })
            .from(iconService, 0.3, {
                autoAlpha: 0,
                y: 100,
                ease: Power4.easeOut,
            })
            .from(subtitleService, 0.3, {
                x: -10,
                autoAlpha: 0,
                ease: Power4.easeOut,

            });



        var ServiceScene = new ScrollMagic.Scene({
                offset: -150,
                triggerElement: this,
                reverse: false
            })

            .setTween(animateService).addTo(controllerService);

    });


    //--------------------------------------------------
    // Animation on Contact
    //--------------------------------------------------
    $(".contact").each(function () {

        var controllerContact = new ScrollMagic.Controller();
        var itemContact = $(this).find(".contact-item"),
            titleContact = $(this).find(".title"),
            bgContact = $(this).find(".left-bg"),
            imgContact = $(this).find(".img-contact");

        var animateContact = new TimelineMax({
            repeat: false,
            paused: false,
            yoyo: false
        });

        animateContact
            .from(bgContact, 0.3, {

                width: '0',
                ease: Power4.easeOut
            })
            .from(titleContact, 0.3, {
                y: '100',
                autoAlpha: 0,
            })
            .from(itemContact, 0.3, {
                autoAlpha: 0,
            })
            .from(imgContact, 0.3, {
                y: '100',
                autoAlpha: 0,
            });

        var NewsScene = new ScrollMagic.Scene({
                offset: -150,
                triggerElement: this,
                reverse: false
            })

            .setTween(animateContact).addTo(controllerContact);

    });




    //--------------------------------------------------
    // Animation on Plans
    //--------------------------------------------------

    $(".parallax-scrl").each(function () {
        var controllera = new ScrollMagic.Controller();
        var tlLeftRight = new TimelineMax();
        var swipeSide = $(this).find(".plans-content");
        var swipeSide2 = $(this).find(".about-img");
        var front = $(this).find(".service-item");
        var team = $(this).find(".team-item");
        var news = $(this).find(".news-item");
        var detail = $(this).find(".plans-detail");

        tlLeftRight.add([
            TweenMax.fromTo(swipeSide, 3, {
                y: 40,
                delay: '1'
            }, {
                y: -60,
                ease: Linear.easeNone,
                delay: '1'
            }),
            TweenMax.fromTo(swipeSide2, 3, {
                y: 150,
                delay: '1'
            }, {
                y: -40,
                ease: Linear.easeNone,
                delay: '0'
            }),
            TweenMax.fromTo(front, 3, {
                y: 90,
                delay: '1',
                ease: Linear.easeNone,
            }, {
                y: -20,
                ease: Linear.easeNone,
                delay: '0'
            }),
            TweenMax.fromTo(team, 3, {
                y: 20,
                delay: '1'
            }, {
                y: -60,
                ease: Linear.easeNone,
                delay: '0'
            }),
            TweenMax.fromTo(news, 3, {
                y: 20,
                delay: '1'
            }, {
                y: -60,
                ease: Linear.easeNone,
                delay: '0'
            }),
            TweenMax.fromTo(detail, 3, {
                y: '0',
               
            }, {
                y: -100,
                ease: Linear.easeNone,
                
            }),

        ]);

        var Scrollscene = new ScrollMagic.Scene({
                offset: -100,
                triggerElement: this,
                // duration: $(window).height(), 
                duration: '140%'
            })
         
            .setTween(tlLeftRight).addTo(controllera);

    });





    //--------------------------------------------------
    // Tilt Setup
    //--------------------------------------------------
    VanillaTilt.init(document.querySelectorAll(".img-plans"), {
        max: 15,
        speed: 2000,
        scale: 1.05,
        perspective: 1500,
    });

    //--------------------------------------------------
    // Owl Carousel Setup
    //--------------------------------------------------

    // about slider
    testiSlider();

    function testiSlider() {
        var aboutSlide = $('.testimonial .owl-carousel');
        aboutSlide.owlCarousel({
            loop: true,
            margin: 30,
            mouseDrag: true,
            autoplay: true,
            center: false,
            dots: false,
            dragEndSpeed: 700,
            smartSpeed: 2000,
            responsiveClass: true,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                600: {
                    items: 1,
                    margin: 0,
                },
                1000: {
                    items: 1,
                    margin: 0,
                }
            }
        });
    }

    //team slider
    teamSlider();

    function teamSlider() {
        var teamSlide = $('.team-slider .owl-carousel');
        teamSlide.owlCarousel({
            loop: false,
            margin: 30,
            mouseDrag: true,
            autoplay: false,
            center: false,
            dots: false,
            dragEndSpeed: 700,
            smartSpeed: 2000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                600: {
                    items: 1,
                    margin: 0,
                },
                1000: {
                    items: 2,
                    margin: 10,
                }
            }
        });
        $('.arrow-right.-team').on("click",function () {
            teamSlide.trigger('next.owl.carousel');
        })
        $('.arrow-left.-team').on("click",function () {
            teamSlide.trigger('prev.owl.carousel');
        })

    }

    //news slider
    newsSlider();

    function newsSlider() {
        var newsSlide = $('.news-slider .owl-carousel');
        newsSlide.owlCarousel({
            loop: false,
            margin: 30,
            mouseDrag: true,
            autoplay: false,
            center: false,
            dots: false,
            dragEndSpeed: 700,
            smartSpeed: 2000,
            responsiveClass: true,

            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                },
                600: {
                    items: 1,
                    margin: 0,
                },
                1000: {
                    items: 2,
                    margin: 30,
                }
            }
        });
        $('.arrow-right.-news').on("click", function () {
            newsSlide.trigger('next.owl.carousel');
        })
        $('.arrow-left.-news').on("click", function () {
            newsSlide.trigger('prev.owl.carousel');
        })
    }

    //partner slider
    partnerSlider();

    function partnerSlider() {
        var aboutSlide = $('.partner .owl-carousel');
        aboutSlide.owlCarousel({
            loop: true,
            margin: 30,
            mouseDrag: true,
            autoplay: true,
            center: false,
            dots: true,
            dragEndSpeed: 700,
            smartSpeed: 2000,
            responsiveClass: true,
            autoplayHoverPause: true,
            autoplayTimeout: 3000,
            responsive: {
                0: {
                    items: 2,
                    margin: 0,
                },
                600: {
                    items: 3,
                    margin: 0,
                },
                1000: {
                    items: 4,
                    margin: 0,
                }
            }
        });
    }




    //--------------------------------------------------
    // Scrollit setup
    //--------------------------------------------------
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -100 // offste (in px) for fixed top navigation
    });



    //--------------------------------------------------
    // Animation on parallax scrolling
    //--------------------------------------------------
    var t1 = new TimelineMax({
        paused: true
    });

    t1.to(".one", 0.8, {
        y: 9,
        autoAlpha: 0,
        ease: Expo.easeInOut
    });
    t1.to(".two", 0.8, {
        ease: Expo.easeInOut,
        delay: -0.8
    });
    t1.to(".tre", 0.8, {
        y: -9,
        autoAlpha: 0,
        ease: Expo.easeInOut,
        delay: -0.8
    });

    t1.to(".menu", 1.5, {
        autoAlpha: 1,
        ease: Expo.easeOut,
        delay: '-1.5'
    })

    t1.staggerFrom(".menu ul li", 1, {
        x: 100,
        opacity: 0,
        ease: Power4.easeInOut,
    }, '0.1', '-0.01');

    t1.reverse();
    $(document).on("click", ".toggle-btn", function () {
        t1.reversed(!t1.reversed()); //toggles the orientation

    });
    $(document).on("click", ".menu-link", function () {
        t1.reversed(!t1.reversed()); //sets the orientation to reversed
    });


})(jQuery);