$(function () {
    const localStorage = JSON.parse(localStorage.getItem("clientOrders"));
    const storage = localStorage.storage;
    const createTable = function (storage) {
        const table = $("<table/>").attr({
            "class": "table table-bordered"
        });
        const tbody = $("<table/>").attr({
            "class": "table table-bordered"
        });
        const tbodyNoClass = $("<table/>");
        const trInfo = $("<tr/>").attr({
            "class": "info"
        });
        const trActive = $("<tr/>").attr({
            "class": "active"
        });
        const td = $("<td/>");
        trInfo.append.td.text("Name: ");
        trInfo.append.td.text("Price: ");
        trInfo.append.td.text("Category: ");
        trInfo.append.td.text("Picture: ");
        tbody.append(trInfo);
        table.append(tbody);
        const container = $("#localOrder");
        container.append(table);
        if ($(container).length < 0) {
        }
        add 
        // storage.forEach((element) => {
        // });
    };
});
