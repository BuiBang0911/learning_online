(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });


    // Hero Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // International carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        items: 1,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    // let box = document.querySelectorAll(".partner");
    // console.log(window.innerWidth);
    // let position = [0,0,0,0,0,0,-256];
    // let speed = 1;

    // function move() {
    //     for (let i = 0; i < box.length; i++) {
    //         position[i] += speed;
    //         //console.log(box[i].getBoundingClientRect().left);
    //         console.log(window.innerWidth);
    //         if(box[i].getBoundingClientRect().left < 0) {
    //             box[i].style.right = - window.innerWidth + i*256;
    //             //console.log(position[i]);
    //         }
    //         box[i].style.right = position[i] + "px";
    //     }
    // }

    // setInterval(move, 10);
    let a = document.querySelectorAll('.dropdown-submenu > .dropdown-item');

    for (let i=0; i < a.length; i++) {
        a[i].addEventListener("click", function (e) {
            console.log(1111);
            e.preventDefault();
            let nextMenu = this.nextElementSibling;
            if (nextMenu && nextMenu.classList.contains("dropdown-menu")) {
                console.log(1111);
                // Đóng tất cả các menu con khác trước khi mở menu mới
                document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function (menu) {
                    if (menu !== nextMenu) {
                        menu.style.display = "none";
                    }
                });
                // Toggle trạng thái menu con
                nextMenu.style.display = nextMenu.style.display === "block" ? "none" : "block";
            }
        });
    }
        document.querySelectorAll('.dropdown-submenu > .dropdown-item').forEach(function (submenu) {
            console.log(submenu);
            submenu.addEventListener("click", function (e) {
                console.log(1111);
                e.preventDefault();
                let nextMenu = this.nextElementSibling;
                if (nextMenu && nextMenu.classList.contains("dropdown-menu")) {
                    console.log(1111);
                    // Đóng tất cả các menu con khác trước khi mở menu mới
                    document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function (menu) {
                        // if (menu !== nextMenu) {
                        //     menu.style.display = "none";
                        // }
                    });
                    // Toggle trạng thái menu con
                    nextMenu.style.display = nextMenu.style.display === "block" ? "none" : "block";
                }
            });
        });

})(jQuery);

