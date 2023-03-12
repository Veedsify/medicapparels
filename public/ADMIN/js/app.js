/**
 * Theme: Metrica - 
 * Author: Mannatthemes
 * Module/App: Main Js
 */


(function ($) {

    'use strict';

    function initSlimscroll() {
        $('.slimscroll').slimscroll({
            height: 'auto',
            position: 'right',
            size: "7px",
            color: '#ebf0f6',
            wheelStep: 5,
            opacity: 1,
            touchScrollStep: 50
        });
    }


    function initEnlarge() {
        if ($(window).width() < 1025) {
            $('body').addClass('enlarge-menu');
        } else {
            if ($('body').data('keep-enlarged') != true)
                $('body').removeClass('enlarge-menu');
        }
    }


    function initMainIconMenu() {
        $(".navigation-menu a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
            }
        });
    }

    function initTopbarMenu() {
        $('.navbar-toggle').on('click', function (event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });

        $('.navigation-menu>li').slice(-2).addClass('last-elements');

        $('.navigation-menu li.has-submenu a[href="#"]').on('click', function (e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    }


    function init() {
        initSlimscroll();
        initEnlarge();
        initMainIconMenu();
        initTopbarMenu();
        Waves.init();
    }

    init();

})(jQuery)

// Get all option buttons and bind a click event listener to each one
document.querySelectorAll('.variation .option').forEach(function (option) {
    option.addEventListener('click', function () {
        // Remove active class from all siblings
        this.parentNode.querySelectorAll('.option').forEach(function (sibling) {
            sibling.classList.remove('active');
        });
        // Add active class to clicked button
        this.classList.add('active');
        // Update hidden input value
        var input = this.closest('.variation').querySelector('input[type="hidden"]');
        input.value = this.getAttribute('data-value');
    });
});


let prevFile = document.querySelectorAll('#prev-file')

prevFile.forEach(input => {
    input.addEventListener('change', (e) => {
        let parent = input.closest('label')
        let image = parent.querySelector('img')
        let url = URL.createObjectURL(input.files[0])
        image.src = url
    })
})

const videoInput = document.querySelector('#video');
const myVideo = document.querySelector('#video-source, #my-video');

videoInput?.addEventListener('change', ({ target: { files } }) => {
    const url = URL.createObjectURL(files[0]);
    myVideo.src = url;
    console.log(myVideo)
});
