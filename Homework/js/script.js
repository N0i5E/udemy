$(document).ready(function () {
    let modal = $('.modal'),
        overlay = $('.overlay'),
        close = $('.close'),
        btnConsult = $('.main_btn'),
        btnChoose = $('.main_btna'),
        btnSchedule = $('.main_nav nav>ul li a:eq(1)');

    let showModal = function () {
        overlay.fadeIn(800);
        modal.fadeIn()
            .css({
                top: -600,
            }).animate({
                top: '-20',
            });
    };

    let closeModal = function () {
        modal.fadeIn("slow")
            .css({
                top: -20,
            }).animate({
                top: '-600',
            }, 800);
        overlay.fadeOut(1500);
    }

    btnConsult.on('click', showModal);
    btnChoose.on('click', showModal);
    btnSchedule.on('click', showModal);

    close.on('click', closeModal);
});
