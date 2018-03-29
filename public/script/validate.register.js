/* globals $ */
$(function() {
    const $name = $('#regFormName');
    const $email = $('#regFormEmail');
    const $password = $('#regFormPassword');
    const $confirmPassword = $('#regFormPasswordConfirm');
    const $line1 = $('#regFormLine1');
    const $line2 = $('#regFormLine2');
    const $line3 = $('#regFormLine3');
    const $submitBtn = $('#regFormSubmit');
    const $clearBtn = $('#regFormClose');

    const $nameError = $('#regFormNameError');
    const $emailError = $('#regFormEmailError');
    // const invalidEmailError = $('#regFormInvalidEmailError');
    const $passwordError = $('#regFormPasswordError');
    const $confirmPasswordError = $('#regFormPasswordConfirmError');
    const $line1Error = $('#regFormLine1Error');
    const $line2Error = $('#regFormLine2Error');
    const $line3Error = $('#regFormLine3Error');

    $clearBtn.on('click', function() {
        $name.val('');
        $email.val('');
        $password.val('');
        $confirmPassword.val('');
        $line1.val('');
        $line2.val('');
        $line3.val('');
        $nameError.hide();
        $emailError.hide();
        $passwordError.hide();
        $confirmPasswordError.hide();
        $line1Error.hide();
        $line2Error.hide();
        $line3Error.hide();
    });
    $submitBtn.on('click', function() {
        let isName = false;
        let isEmail = false;
        let isPass = false;
        let doPassMatch = false;
        let isLine1 = false;
        let isLine2 = false;
        let isLine3 = false;
        if ($name.val() === '') {
            $nameError.show();
        } else {
            $nameError.hide();
            isName = true;
        }

        if ($email.val() === '') {
            $emailError.show();
        } else {
            $emailError.hide();
            isEmail = true;
        }

        if ($password.val() === '') {
            $passwordError.show();
        } else {
            $passwordError.hide();
            isPass = true;
        }

        if ($password.val() !== $confirmPassword.val()) {
            $confirmPasswordError.show();
        } else {
            $confirmPasswordError.hide();
            doPassMatch = true;
        }

        if ($line1.val() === '') {
            $line1Error.show();
        } else {
            $line1Error.hide();
            isLine1 = true;
        }

        if ($line2.val() === '') {
            $line2Error.show();
        } else {
            $line2Error.hide();
            isLine2 = true;
        }

        if ($line3.val() === '') {
            $line3Error.show();
        } else {
            $line3Error.hide();
            isLine3 = true;
        }

        if (isName && isEmail && isPass &&
            doPassMatch && isLine1 &&
            isLine2 && isLine3) {
            // send to server
            console.log({
                name: $name.val(),
                email: $email.val(),
                password: $password.val(),
                address: `${$line3.val()} ${$line1.val()} ${$line2.val()}`,
            });
            $name.val('');
            $email.val('');
            $password.val('');
            $confirmPassword.val('');
            $line1.val('');
            $line2.val('');
            $line3.val('');
        }
    });
});
