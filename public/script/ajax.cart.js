// $(function () {
//     const cartAnchorTags = $(".glyphicon-shopping-cart").parents().toArray();
//     cartAnchorTags.forEach((el) => {
//         $(el).click(function (e) {
//             e.preventDefault();
//             const clientOrdersLocalStorageJSON = JSON.parse(localStorage.getItem("clientOrders"));
//             const XHR = new XMLHttpRequest();
//             const virtualForm = new FormData();
//             // XHR.onload = function(res) {
//             //     location.assign(res);
//             // };
//             virtualForm.append("localStorage", clientOrdersLocalStorageJSON);
//             XHR.open("GET", "/redirect", true);
//             XHR.send(virtualForm);
//         });
//     });
// });


$(function () {
    const cartAnchorTags = $(".glyphicon-shopping-cart").parent().toArray();
    cartAnchorTags.forEach((el) => {
    
        $(el).click(function (e) {
            document.location.replace("user");
            
            // const clientOrdersLocalStorageJSON = JSON.parse(localStorage.getItem("clientOrders"));
            e.preventDefault();
        });
    });
});


