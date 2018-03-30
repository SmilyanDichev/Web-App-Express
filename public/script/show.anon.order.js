$(function () {
    const orderWrapper = $("#orderWrapper");
    const clientOrders = JSON.parse(localStorage.getItem("clientOrders"));
    const storage = clientOrders.storage;

    const addTable = function (res) {
        const html = $(res);
        const formatedHTML = $.parseHTML(res);
        const tableWrapper = $("#tableWrapper");
        tableWrapper.append(html[ 0 ]);
        storage.map((el)=>{
            tableWrapper.apend(el[0]);
        });
        
        
        
        // foreach((el)=>{
        //     console.log(el[ 0 ]);
        // });
    };

    if (orderWrapper) {
        $.ajax({
            method: "GET",
            url: "../user/table",
            success: function (res) {
                addTable(res);
            }
        });
    }
});


// $(function () {
//     orderWrapper.append('1 2 3 4 5 6 7 8 9 10');
//     console.log(orderWrapper);
// });
// $(document).append('1 2 3 4 5 6 7 8 9 10');
// console.log($(document));

// orderWrapper.append(res);
// console.log(orderWrapper);
// const tHead = $("#template-head");
// const tBody = $("#template-body");

// orderWrapper.append(res);
// orderWrapper.append(tHead);
// orderWrapper.append(tBody);
