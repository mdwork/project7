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
});
