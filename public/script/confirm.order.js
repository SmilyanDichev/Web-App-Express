$(function () {
    const confirmButton = $("#yesButtonconfirmOrder");
    confirmButton.click(function () {
        console.log("click");

        $.ajax({
            type: "POST",
            url: "user/confirm",
            data: {
                messgae: "true"
            },
            success: function (res) {
                console.log("success " + res);
                localStorage.clear();
                location.reload();
            }
        });
    });
});

