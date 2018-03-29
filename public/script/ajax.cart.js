$(function () {
    const cartAnchorTags = $(".glyphicon-shopping-cart").parent().toArray();
    cartAnchorTags.forEach((el) => {
        $(el).click(function (e) {
            document.location.replace("user");
            e.preventDefault();
        });
    });
});


