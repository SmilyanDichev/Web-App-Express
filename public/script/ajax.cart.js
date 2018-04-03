$(function () {
    const cartAnchorTags = $(".glyphicon-shopping-cart").parent().toArray();
    cartAnchorTags.forEach((el) => {
        $(el).click(function (e) {
            document.location.replace("user");
            const clientOrders = JSON.parse(localStorage.getItem("clientOrders"));
            e.preventDefault();
            $.ajax({
                method: "POST",
                url: "user",
                data: clientOrders
            });
        });
    });
});


