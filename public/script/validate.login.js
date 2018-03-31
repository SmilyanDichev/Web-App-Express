/* globals $ */
$(function() {
    const $email = $("#loginFormEmail");
    const $password = $("#loginFormPassword");
    const $submitBtn = $("#loginFormSubmit");
    const $clearBtn = $("#loginFormClose");


    const $emailError = $("#loginFormMailError");
    const $passwordError = $("#loginFormPasswordError");

    $clearBtn.on("click", function() {
        $email.val("");
        $password.val("");
        $passwordError.hide();
        $emailError.hide();
    });
    $submitBtn.on("click", function() {
        let isEmail = false;
        let isPass = false;
        if ($email.val() === "") {
            $emailError.show();
        } else {
            $emailError.hide();
            isEmail = true;
        }

        if ($password.val() === "") {
            $passwordError.show();
        } else {
            $passwordError.hide();
            isPass = true;
        }

        if (isEmail && isPass) {

            // send to server
            $email.val("");
            $password.val("");
        }
    });
});
