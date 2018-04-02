$(function () {
    const logoutButton = $(".glyphicon-log-out").parent();
    logoutButton.click(function (e) {
        const clientOrders = JSON.parse(localStorage.getItem("clientOrders"));
        if (clientOrders.counter !== 0) {
                    $.ajax({
                        method: "POST",
                        url: "user",
                        data: clientOrders,
                        success: function (response) {
                            $.get("/logout");
                        }
                    });
                   localStorage.clear();
                }
            });
});
