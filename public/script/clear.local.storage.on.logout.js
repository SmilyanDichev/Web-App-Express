$(function () {
    const logoutButton = $(".glyphicon-log-out").parent();
    logoutButton.click(function (e) {
        e.preventDefault();
        const clientOrders = JSON.parse(localStorage.getItem("clientOrders"));
        if (clientOrders.counter !== 0) {
            $.ajax({
                method: "POST",
                url: "user",
                data: clientOrders,
                success: function (response) {
                    localStorage.clear();
                    location.replace("/logout");
                }
            });
        } else {
            location.replace("/logout");
        }
    });
});
