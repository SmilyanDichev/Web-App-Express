$(function () {
    const removeFromLocalStorage = function (name) {
        const checkCounter = function (order) {
            if (order.product === name) {
                currentCounter -= order.quantity;
            } else {
                return order;
            }
        };
        const localStorageSelector = "clientOrders";
        const currentStoredObject = localStorage.getItem(localStorageSelector);
        const currentStoredObjectJSON = JSON.parse(currentStoredObject);

        let currentStorage = currentStoredObjectJSON.storage;
        let currentCounter = currentStoredObjectJSON.counter;
        const newStorage = currentStorage.filter(checkCounter);
        const clientOrders = {
            counter: currentCounter,
            storage: newStorage
        };
        const itemsCart = $(".items-basket").toArray();
        itemsCart.forEach((item) => {
            $(item).text(currentCounter);
        });
        localStorage.setItem(
            localStorageSelector, JSON.stringify(clientOrders)
        );
    };
    const append = function (t1, t2, t3, t4, t5, tBody) {
        const tr = $("<tr>");
        const td1 = $("<td>").append(t1).addClass("col-xs-4 text-center");
        const td2 = $("<td>").append(t2).addClass("col-xs-2 text-center");
        const td3 = $("<td>").append(t3).addClass("col-xs-2 text-center");
        const td4 = $("<td>").append(t4).addClass("col-xs-3 text-center");
        const td5 = $("<td>").append(t5).addClass("col-xs-1 text-center");
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tBody.append(tr);
    };
    const addLocalData = function () {
        storage.map((el) => {
            const td1 = el.product;
            const td2 = el.quantity;
            const td3 = el.price;
            const td4 = (+el.quantity * +el.price);
            const td5 = $("<button>").addClass("deleteBtn btn btn-danger").text("X");
            append(td1, td2, td3, td4, td5, tBody);
        });
    };

    const tableWrapper = $("#tableWrapper");
    const clientOrders = JSON.parse(localStorage.getItem("clientOrders"));
    const storage = clientOrders.storage;

    const table = $("<table>");
    table.addClass(" table table-bordered table-striped");
    const tBody = $("<tbody>");

    append("Product", "Quantity", "Price", "Total Price", "Delete", tBody);
    addLocalData();

    table.append(tBody);
    tableWrapper.append(table);


    const deleteButtons = $(".deleteBtn").toArray();
    deleteButtons.map((button) => {
        $(button).click(function () {
            const tableRow = $(button).parent().closest("tr");
            const name = tableRow.children(":first").text();
            tableRow.remove();
            removeFromLocalStorage(name);
        });
    });
});