$(document).ready(function() {

  $('#form-submit').click(function(e) {

    $("#contactForm").validate({
      ignore: ':hidden:not(.captcha-control)',
        rules: {
            'entry.122701191': {
                required: true
            },
            emailAddress: {
                required: true,
                email: true
            },
            'entry.560386344': {
                required: true
            },
            reCaptchaControl: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }  
        },
        messages: {
            'entry.122701191': {
                required: "Proszę wpisać Imię"
            },
            emailAddress: {
                required: "Proszę wpisać Email",
                email: "Musisz wpisać email w formacie nazwa@domena"
            },
            'entry.560386344': {
                required: "Proszę napisać wiadomość"
            },
            reCaptchaControl: {
                required: "Proszę zaznaczyć Nie jestem robotem"
            }
        },
        submitHandler: function(form) {
                form.submit();
        }
    });
    
            });

});
