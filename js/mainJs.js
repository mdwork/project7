$(document).ready(function(){
    /*ie8*/
    $(".list-actions li:nth-child(2) img").width(660);
    $('.list-countries li:nth-child(5n)').css('margin-right', 0);
    /*end*/

    var formTelValid = $('.form-box-contact'),
        formTelValidOnline = $('.form-box-online');

    function validForm(formName) {
        formName.submit(function (e) {
            var telValidInput = $('.tel-valid_js'),
                btnSubmit = $('.btn-submit_js');

            if (telValidInput.val().length < 6) {
                e.preventDefault();

                btnSubmit.addClass('btn-disable_js');
                telValidInput.addClass('no-valid-email_js');

                telValidInput.blur(function () {
                    if (telValidInput.val().length > 5) {
                        btnSubmit.removeClass('btn-disable_js');
                        telValidInput.removeClass('no-valid-email_js');
                    }
                    else {
                        btnSubmit.css('backgroundColor', '#ccc');
                    }
                });
            }
        });
    }
    validForm(formTelValid);
    validForm(formTelValidOnline);

    function popupWindow(targetClick, showCurrentForm) {
        targetClick.on('click', function (e) {
            e.preventDefault();

            var bgPopup = $('#bg-popup'),
                fotoPopup = $('#wrap-popup');

            bgPopup.addClass('show_js');
            fotoPopup.prepend('<span class="icon-close_js"></span>')
                .animate({'opacity': 1}, 500);
            showCurrentForm.addClass('show_js');

            bgPopup.height($(document).height());

            var fotoInPopupW = fotoPopup.width(),
                scrollTop = window.pageYOffset;

            fotoPopup.css({
                'top': scrollTop + 100,
                'left': '50%',
                'margin-left': - (fotoInPopupW / 2)
            });

            $('.icon-close_js, #bg-popup').on('click', function() {
                bgPopup.removeClass('show_js');
                $('.icon-close_js').remove();
                $('.header-form-callback').remove();
                showCurrentForm.removeClass('show_js');

                $(showCurrentForm).find('.show_js').removeClass('show_js');

                fotoPopup.css({
                    'opacity' : 0,
                    'left': 0,
                    'top': 0,
                    'margin-left': 0
                });
            });

            $("#wrap-popup").click(function(e) {
                e.stopPropagation();
            });
        });
    }
    var callForm = $('.form-box-contact_js'),
        btnPopupCall = $('.popup-call_js'),
        popupTourPage = $('.popup-tour_js'),
        callPage = $('.tour-page-popup_js');

    popupWindow(btnPopupCall, callForm);
    popupWindow(popupTourPage, callPage);
});
