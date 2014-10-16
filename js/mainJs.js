$(document).ready(function(){
    $(".list-actions li:nth-child(2) img").width(660);
    $('.list-countries li:nth-child(5n)').css('margin-right', 0);
});

$(function() {
    $(".any-class").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev"
    });
});
