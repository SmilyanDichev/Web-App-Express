$(function () {
    const searchBtn = $(".glyphicon-search").parent();
    const searchBar = $("#searchBar");
    const productWrappers = $(".product-wrapper").toArray();

    searchBtn.on("click", function (e) {
        e.preventDefault();
        const searchValue = searchBar.val().toLowerCase();
        productWrappers.forEach(function (el) {
        const productName = $(el).find("h2").text().toLowerCase();
        if (productName.indexOf(searchValue) === -1) {
            $(el).hide();
        } else {
            $(el).show();
        }
        });
    });
});
