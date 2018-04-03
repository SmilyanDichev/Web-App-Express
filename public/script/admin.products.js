$(function () {
    $("#addProduct").on("click", function () {
        $("#createProductModal").modal("show");
    });

    $("#product-img-url").on("input", function () {
        $("#preview").css("margin-top", "7em");
        $("#preview").attr("src", $("#product-img-url").val());
    });

    // NEEDS FIX - WORKS ONLY WITH FIRST IMAGE - DUPLICATING IDs
    // const $allMiniImgs = $(".editImgData");
    // $allMiniImgs.on("input", ".editPictureUrl", function () {
    //     const $url = $(this).val();
    //     const $urlId = $(this).attr("data-id");
    //     const $miniPic = $(".miniPicture").toArray().find(function (el) {
    //         console.log(el);
    //         if (el.id == $urlId) {
    //             return el;
    //         }
    //     });
    //     // $miniPic.attr("src", $url);
    //     console.log($miniPic);

    // });

    $("#close-create-product").on("click", function () {
        $("#createProductModal").modal("hide");
        $(".modal-backdrop").modal("hide");
        $("#createProductModal").find("input").val("");
        $("#createProductModal").find("select").val("");
        $("#preview").attr("src", "");
    });
});
