$(function () {
    $("#product-img-url").on("input", function () {
        $("#preview").css("margin-top", "7em");
        $("#preview").attr("src", $(this).val());
    });
});
