const Data = require('./generic.data');

const {
    User,
    Order,
    orderStatus,
    Product,
} = require('../database/models');

class OrdersData extends Data {
    constructor() {
        super(Order, [User, Product, orderStatus]);
    }

    updateStatus(orderId, newStatusId) {
        return Order.update({
            orderStatusId: newStatusId,
        }, {
            where: {
                id: orderId,
            },
        });
    }
}

module.exports = OrdersData;
