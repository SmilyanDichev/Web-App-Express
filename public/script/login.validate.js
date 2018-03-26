// TO DO: 
//      WHEN SUCCESS: if data => redirect to home with loggedin user
//                     if no data => display error message in input fields
//                      and leave Login form open
// WHEN ERROR: when there is error from the server
$(function() {
const $loginFormSubmit = $("#loginFormSubmit");
const $signinFormSubmit = $("#signinFormSubmit");

$loginFormSubmit.on("click", function(e) {
    const $ValidationError = $("#loginFormUserValidationError");
    ajaxCall($ValidationError);
});

// $signinFormSubmit.on('click', function(e) {
//     let $ValidationError = $('#signInFormUserValidationError');
//     ajaxCall($ValidationError);
// });


const ajaxCall = function (messageSpan) {
    $.ajax({
        type: "POST",
        url: "/login",
        data: {
            email: $("#loginEmail").val(),
            password: $("#loginPassword").val()
        },
        success: function (data) {
            if (data) {
                // console.log('THERE IS DATA');
            } else {
                // console.log('NO DATA');
            }
            // console.log(data);
        },
        error: function (e) {
            messageSpan.val("Incorect!");
            e.preventDefault();
        }
    });
};
});
