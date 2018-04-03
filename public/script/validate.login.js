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

    $email.focusout(function () {
        if (validateEmail($email.val())) {
            $emailError.text("");
        } else if ($email.val() === "") {
            $emailError.text("Email required!");
        } else {
            $emailError.text("Invalid email!");
        }
    });
    $password.focusout(function () {
        if ($password.val() !== "") {
            $passwordError.text("");
        } else {
            $passwordError.text("Password required!");
        }
        return false;
    });
});
