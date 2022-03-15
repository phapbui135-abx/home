// $(document).ready(function() {
//     $(window).scroll(function(event) {
//         var pos_body = $('html,body').scrollTop();
//         console.log(pos_body);
//         if (pos_body > 200) {
//             $('.site-header').addClass('co-dinh-menu');
//         } else {
//             $('.site-header').removeClass('co-dinh-menu');
//         }
//         if (pos_body > 2200) {
//             $('.back-to-top').addClass('hien-ra');
//         } else {
//             $('.back-to-top').removeClass('hien-ra');
//         }
//     });
//     $('.back-to-top').click(function(event) {
//         $('html,body').animate({
//             scrollTop: 0,
//         }, 500);
//     });
// });
function showmenu() {
    var x = document.getElementById('an-menu');
    if (x.style.display === 'none') {
        x.style.display = "block";
    } else {
        x.style.display = 'none';
    }

}

function chuyentab() {
    var y = document.getElementById('page-title');
    if (y.style.backgroundImage === Url('./image/bgr-2.jpg')) {
        y.style.backgroundImage = Url('./image/bgr-1.jpg');
    } else {
        element.style.backgroundImage = Url('./image/bgr-2.jpg');
    }
};
$(function() {
    $("#datepicker").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

$(document).ready(function() {
    $('.slick-header').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        cssEase: 'linear',
        // nextArrow: document.getElementById('left-bgr'),
        // prevArrow: document.getElementById('right-bgr'),
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
$(document).ready(function() {
    $('.slick-2').slick({
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: false,
        prevArrow: false,
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 578,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});
$(document).ready(function() {
    $('.slick-4').slick({
        infinite: true,
        speed: 5,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,

        autoplaySpeed: 2000,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 578,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});



$(document).ready(function() {
    $('.slick-6').slick({

        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});
$(document).ready(function() {
    $('.slick-8').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: document.getElementById('left'),
        prevArrow: document.getElementById('right'),
        autoplaySpeed: 2000,
        padding: 10,

        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});
$(document).ready(function() {
    $('.slick-9').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        padding: 10,
        nextArrow: false,
        prevArrow: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});
$(document).ready(function() {
    $('.slick-10').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false,
        padding: 10,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});