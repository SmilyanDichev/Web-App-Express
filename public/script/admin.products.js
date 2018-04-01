$(function () {
    $("#addProduct").on("click", function () {
        $("#createProductModal").modal("show");
    });

    $("#product-img-url").on("input", function () {
        $("#preview").css("margin-top", "7em");
        $("#preview").attr("src", $("#product-img-url").val());
    });

    // NEEDS FIX - WORKS ONLY WITH FIRST IMAGE - DUPLICATING IDs
    $("#editPictureUrl").on("input", function () {
        $("#miniPicture").attr("src", $("#editPictureUrl").val());
    });

    $("#close-create-product").on("click", function () {
        $("#createProductModal").modal("hide");
        $(".modal-backdrop").modal("hide");
        $("#createProductModal").find("input").val("");
        $("#createProductModal").find("select").val("");
        $("#preview").attr("src", "");
    });
});
