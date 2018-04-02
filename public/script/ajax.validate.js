const addCurentToStorage = (productsDB) => {
    const ifFoundIncreaseQuantityOrAdd = function (currentStorage, productToAdd) {
        let isInCart = false;
        currentStorage.forEach((product) => {
            if (product.id === productToAdd.id) {
                product.quantity += productToAdd.ordersProduct.quantity;
                isInCart = true;
            }
        });
        if (!isInCart) {
            const productFormated = {
                id: productToAdd.id,
                product: productToAdd.name,
                quantity: productToAdd.ordersProduct.quantity,
                price: productToAdd.price
            };
            currentStorage.push(productFormated);
        }
    };
    const addCounter = function () {
        itemsCart.forEach((item) => {
            $(item).text(counter);
        });
    };
    const setCounterStorage = function (currentStoredObject, localStorageSelector) {
        if (currentStoredObject === null) {
            const clientOrders = {
                counter: 0,
                storage: []
            };
            localStorage.setItem(
                localStorageSelector, JSON.stringify(clientOrders)
            );
            return 0;
        }
        const currentStoredObjectJSON = JSON.parse(currentStoredObject);
        return currentStoredObjectJSON.counter;
    };

    const localStorageSelector = "clientOrders";
    const currentStoredObject = localStorage.getItem(localStorageSelector);
    const currentStoredObjectJSON = JSON.parse(currentStoredObject);
    console.log("current ");
    console.log(currentStoredObjectJSON);
    const currentStorage = currentStoredObjectJSON.storage;
    const itemsCart = $(".items-basket").toArray();
    let counter = setCounterStorage(currentStoredObject, localStorageSelector);
    productsDB.forEach(function (productToAdd) {
        counter += productToAdd.ordersProduct.quantity;
        ifFoundIncreaseQuantityOrAdd(currentStorage, productToAdd);
    });
    addCounter();
    const clientOrders = {
        counter: counter,
        storage: currentStorage
    };
    localStorage.setItem(
        localStorageSelector, JSON.stringify(clientOrders)
    );
};

$(function () {
    const $loginFormSubmit = $("#loginFormSubmit");
    const $loginForm = $("#loginForm");

    $loginForm.on("submit", function (e) {
        e.preventDefault();
    });

    $loginFormSubmit.on("click", function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "login",
            dataType: "json",
            async: true,
            data: {
                email: $("#loginEmail").val(),
                password: $("#loginPassword").val()
            },
            success: function () {
                console.log("2nd ajax");
                $.ajax({
                    type: "GET",
                    url: "user/cart",
                    dataType: "json",
                    success: function (responce) {;
                        addCurentToStorage(responce);
                        location.reload();
                    }
                });
                $("#loginModal").modal("hide");
            },
            error: function (er) {
                $("#loginFormUserValidationError").text("Incorect!");
                $("#loginFormUserValidationError").val("Incorect!");
                $("#loginFormUserValidationError").css("color", "red");
            }
        });
    });
});
