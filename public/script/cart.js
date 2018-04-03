$(function () {
    const addToStorage = function (productToAdd, totalProducts) {
        const localStorageSelector = "clientOrders";
        const currentStoredObject = localStorage.getItem(localStorageSelector);
        const currentStoredObjectJSON = JSON.parse(currentStoredObject);
        const currentStorage = currentStoredObjectJSON.storage;
        ifFoundIncreaseQuantityOrAdd(currentStorage, productToAdd);
        const clientOrders = {
            counter: totalProducts,
            storage: currentStorage
        };
        localStorage.setItem(
            localStorageSelector, JSON.stringify(clientOrders)
        );
    };

    const ifFoundIncreaseQuantityOrAdd = function (currentStorage, productToAdd) {
        let isInCart = false;
        currentStorage.forEach((product) => {
            if (product.id === productToAdd.id) {
                product.quantity += productToAdd.quantity;
                isInCart = true;
            }
        });
        if (!isInCart) {
            currentStorage.push(productToAdd);
        }
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

    const addCounter = function () {
        itemsCart.forEach((item) => {
            $(item).text(counter);
        });
    };
    const clientOrders = localStorage.getItem("clientOrders");
    const products = $(".product-wrapper").toArray();
    const itemsCart = $(".items-basket").toArray();
    let counter = setCounterStorage(clientOrders, "clientOrders");
    addCounter();
    products.forEach((item) => {
        const name = $(item).find("h2").first().text();
        const button = $(item).find("a:contains('Add to basket')").first();
        const productId = button.attr("data-id");
        const number = button.siblings().first();
        const price = $(item).find(".product-price").text();

        $(button).click(function (e) {
            const latestNumber = $(number).val();
            counter += +latestNumber;
            const order = {
                id: +productId,
                product: name,
                quantity: +latestNumber,
                price: +price
            };
            addCounter();
            addToStorage(order, counter);
        });
    });
});
