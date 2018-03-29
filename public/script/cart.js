$(function () {
    const addToStorage = function (order, counter) {
        const localStorageSelector = "clientOrders";
        const lastStorage = [ order ];
        const currentStoredObject = localStorage.getItem(localStorageSelector);
        const currentStoredObjectJSON = JSON.parse(currentStoredObject);
        const currentStorage = currentStoredObjectJSON.storage;
        console.log(counter);
        currentStorage.push(lastStorage);
        clientOrders = {
            counter: counter,
            storage: currentStorage
        };
        localStorage.setItem(
            localStorageSelector, JSON.stringify(clientOrders)
        );
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
    let clientOrders = localStorage.getItem("clientOrders");
    const products = $(".product-wrapper").toArray();
    const itemsCart = $(".items-basket").toArray();
    let counter = setCounterStorage(clientOrders, "clientOrders");
    addCounter();
    products.forEach((item) => {
        const name = $(item).find("h2").first().text();
        const button = $(item).find("a:contains('Add to basket')").first();
        const number = button.siblings().first()
        const order = {
            name: name,
            number: number
        };

        $(button).click(function (e) {
            const latestNumber = $(number).val();
            console.log( latestNumber);
            counter += +latestNumber;
            addCounter();
            addToStorage(order, counter);
        });
    });
});
