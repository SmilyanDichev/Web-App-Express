/* globals $ */
$(function () {
    const $name = $("#regFormName");
    const $email = $("#regFormEmail");
    const $password = $("#regFormPassword");
    const $confirmPassword = $("#regFormPasswordConfirm");
    const $line1 = $("#regFormLine1");
    const $line2 = $("#regFormLine2");
    const $line3 = $("#regFormLine3");
    const $signUpAnchor = $("#signUpAnchor");
    const $signUpBtn = $("regButtonloginSign");

    // const $submitBtn = $("#signinFormSubmit");
    const $clearBtn = $("#signinFormClose");

    const $nameError = $("#regFormNameError");
    const $emailError = $("#regFormEmailError");
    const $passwordError = $("#regFormPasswordError");
    const $confirmPasswordError = $("#regFormPasswordConfirmError");
    const $line1Error = $("#regFormLine1Error");
    const $line2Error = $("#regFormLine2Error");
    const $line3Error = $("#regFormLine3Error");

    $signUpBtn.click(function() {
        $name.val("");
        $email.val("");
        $password.val("");
        $confirmPassword.val("");
        $line1.val("");
        $line2.val("");
        $line3.val("");
        $nameError.text("");
        $emailError.text("");
        $passwordError.text("");
        $confirmPasswordError.text("");
        $line1Error.text("");
        $line2Error.text("");
        $line3Error.text("");
    });

    $signUpAnchor.click(function() {
        $name.val("");
        $email.val("");
        $password.val("");
        $confirmPassword.val("");
        $line1.val("");
        $line2.val("");
        $line3.val("");
        $nameError.text("");
        $emailError.text("");
        $passwordError.text("");
        $confirmPasswordError.text("");
        $line1Error.text("");
        $line2Error.text("");
        $line3Error.text("");
    });

    $clearBtn.on("click", function () {
        $name.val("");
        $email.val("");
        $password.val("");
        $confirmPassword.val("");
        $line1.val("");
        $line2.val("");
        $line3.val("");
        $nameError.text("");
        $emailError.text("");
        $passwordError.text("");
        $confirmPasswordError.text("");
        $line1Error.text("");
        $line2Error.text("");
        $line3Error.text("");
    });

    $name.focusout(function () {
        if ($name.val() === "") {
            $nameError.text("Name required!");
        } else {
            $nameError.text("");
        }
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
        if ($password.val() === "") {
            $passwordError.text("Password required!");
        } else {
            $passwordError.text("");
        }
    });

    $confirmPassword.focusout(function () {
        if ($confirmPassword.val() !== $password.val()) {
                $confirmPasswordError.text("Passwords must match!");
        } else if ($confirmPassword.val() === "") {
            $confirmPasswordError.text("Password required!");
        } else {
            $confirmPasswordError.text("");
        }
    });

    $line1.focusout(function () {
        if ($line1.val() === "") {
            $line1Error.text("Required!");
        } else {
            $line1Error.text("");
        }
    });

    $line2.focusout(function () {
        if ($line2.val() === "") {
            $line2Error.text("Required!");
        } else {
            $line2Error.text("");
        }
    });

    $line3.focusout(function () {
        if ($line3.val() === "") {
            $line3Error.text("Required!");
        } else {
            $line3Error.text("");
        }
        return false;
    });
});
