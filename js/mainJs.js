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

    $(".calendar_js").datepicker();

    var textOption2 = $('.test2 option:first-child').text(),
        textOption1 = $('.test1 option:first-child').text();

    //тут превращаем select в input
    var id = "test",
        $id = $('#' + id),
        choices = $id.find('option').map(function (n, e) {
            var $e = $(e);
            return {
                id: $e.val(),
                text: $e.text()
            };
        }),
        width = $id.width(),
        realClass = $id.get(0).className,
        realId = $id.get(0).id,


        $input = $('<input>',{width: width});
    $id.after($input);
    $id.hide();
    $id.find('option').remove();
    //превратили

    $input.select2({
        query: function (query) {
            var data = {}, i;
            data.results = [];

            // подтставим то что искали

            if (query.term !== "") {
                data.results.push({
                    id: query.term,
                    text: query.term
                });
            }

            // добавим остальное

            for (i = 0; i < choices.length; i++) {
                if (choices[i].text.match(query.term) || choices[i].id.match(query.term)) data.results.push(choices[i]);
            }

            query.callback(data);
        }
    }).on('change',function()
        {
            var value=$input.val();
            $id.empty();
            $id.append($('<option>').val(value))
            $id.val(value);
        }
    );

    var id2 = "test2",
        $id2 = $('#' + id2),
        choices2 = $id2.find('option').map(function (n, e) {
            var $e = $(e);
            return {
                id: $e.val(),
                text: $e.text()
            };
        }),
        width2 = $id2.width(),
        realClass2 = $id2.get(0).className,
        realId2 = $id2.get(0).id,


        $input2 = $('<input>',{width: width2});
    $id2.after($input2);
    $id2.hide();
    $id2.find('option').remove();
    //превратили

    $input2.select2({
        query: function (query) {
            var data2 = {}, i;
            data2.results = [];

            // подтставим то что искали

            if (query.term !== "") {
                data2.results.push({
                    id: query.term,
                    text: query.term
                });
            }

            // добавим остальное

            for (i = 0; i < choices2.length; i++) {
                if (choices2[i].text.match(query.term) || choices2[i].id.match(query.term)) data2.results.push(choices2[i]);
            }

            query.callback(data2);
        }
    }).on('change',function()
        {
            var value2=$input2.val();
            $id2.empty();
            $id2.append($('<option>').val(value2))
            $id2.val(value2);
        }
    );

    $("#s2id_autogen1 .select2-chosen").text(textOption1);
    $("#s2id_autogen3 .select2-chosen").text(textOption2);
    $('.select2-container').addClass('custom-icon-select')
});
