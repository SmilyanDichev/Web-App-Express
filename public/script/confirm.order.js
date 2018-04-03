$(function () {
    const confirmButton = $("#yesButtonconfirmOrder");
    confirmButton.click(function () {
        $.ajax({
            type: "POST",
            url: "user/confirm",
            data: {
                messgae: "true"
            },
            success: function (res) {
                localStorage.clear();
                location.reload();
            }
        });
    });
});

