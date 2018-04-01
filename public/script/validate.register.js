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

    let isName = false;
    let isEmail = false;
    let isPass = false;
    let doPassMatch = false;
    let isLine1 = false;
    let isLine2 = false;
    let isLine3 = false;

    $name.focusout(function () {
        if ($name.val() === "") {
            $nameError.text("Name required!");
            isName = false;
        } else {
            $nameError.text("");
            isName = true;
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
        if ($password.val() === "") {
            $passwordError.text("Password required!");
            isPass = false;
        } else {
            $passwordError.text("");
            isPass = true;
        }
    });

    $confirmPassword.focusout(function () {
        if ($confirmPassword.val() !== $password.val()) {
                $confirmPasswordError.text("Passwords must match!");
                doPassMatch = true;
        } else if ($confirmPassword.val() === "") {
            $confirmPasswordError.text("Password required!");
            doPassMatch = false;
        } else {
            $confirmPasswordError.text("");
            doPassMatch = true;
        }
    });

    $line1.focusout(function () {
        if ($line1.val() === "") {
            $line1Error.text("Required!");
            isLine1 = false;
        } else {
            $line1Error.text("");
            isLine1 = true;
        }
    });

    $line2.focusout(function () {
        if ($line2.val() === "") {
            $line2Error.text("Required!");
            isLine2 = false;
        } else {
            $line2Error.text("");
            isLine2 = true;
        }
    });

    $line3.focusout(function () {
        if ($line3.val() === "") {
            $line3Error.text("Required!");
            isLine3 = false;
        } else {
            $line3Error.text("");
            isLine3 = true;
        }
    });

    const isValidSignUp = function () {
        if (isName && isEmail && isPass &&
            doPassMatch && isLine1 && isLine2 && isLine3) {
            return true;
        }
        return false;
    };

    module.exports = {
        isValidSignUp
    };
});
