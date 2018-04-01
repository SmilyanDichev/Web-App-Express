/* globals $ */
$(function() {
    const $email = $("#loginEmail");
    const $password = $("#loginPassword");
    const $clearBtn = $("#loginFormClose");
    const $loginAnchor = $("#loginAnchor");

    const $emailError = $("#loginFormMailError");
    const $passwordError = $("#loginFormPasswordError");


    $loginAnchor.click(function() {
        $email.val("");
        $password.val("");
        $passwordError.text("");
        $emailError.text("");
        $("#loginFormUserValidationError").text("");
    });

    $clearBtn.on("click", function() {
        $email.val("");
        $password.val("");
        $passwordError.text("");
        $emailError.text("");
        $("#loginFormUserValidationError").text("");
    });

    const validateEmail = (mail) => {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return true;
      }
        return false;
    };

    let isEmail = false;
    let isPass = false;

    $email.focusout(function () {
        if (validateEmail($email.val())) {
            $emailError.text("");
            isEmail = true;
        } else if ($email.val() === "") {
            $emailError.text("Email required!");
            isEmail = false;
        } else {
            $emailError.text("Invalid email!");
            isEmail = false;
        }
    });
    $password.focusout(function () {
        if ($password.val() !== "") {
            $passwordError.text("");
            isPass = true;
        } else {
            $passwordError.text("Password required!");
            isPass = false;
        }
    });

    const isValidLogin = function() {
        if (isEmail && isPass) {
            return true;
        }
        return false;
    };

    module.exports = {
        isValidLogin
    };
});
