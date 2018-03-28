$(function () {
    $("#addProduct").on("click", function () {
        $.ajax({
            method: "GET",
            url: "products/create",
            success: function (response) {
                $(response).appendTo(".dialog");
                $("#createProductModal").modal("show");

                $("#product-img-url").on("input", function () {
                    $("#preview").css("margin-top", "7em");
                    $("#preview").attr("src", $("#product-img-url").val());
                });

                $("#close-create-product").on("click", function () {
                    $("#createProductModal").remove();
                    $(".modal-backdrop").remove();
                });
            }
        });
    });
});
