$(function () {
            const clientOrders = JSON.parse(localStorage.getItem("clientOrders"));
            console.log(clientOrders.storage);
            // const get = $.ajax({
            //     method: "GET",
            //     url: "user/anon",
            //     data: clientOrders,
            //     success: function (response) {
            //         console.log(response);
            //     }
                $.ajax({
                    method: "GET",
                    url: "user/anon",
                    data: clientOrders,
                    success: function (response) {
                        // console.log(response);
                    }
                });
            });

