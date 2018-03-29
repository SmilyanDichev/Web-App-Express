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
        return this.Model.update({
            orderStatusId: newStatusId,
        }, {
            where: {
                id: orderId,
            },
        });
    }

    getUserOrders(email) {
        return this.Model.findAll({
            include: [{
                    model: User,
                    where: {
                        email,
                    },
                },
                {
                    model: Product,
                },
                {
                    model: orderStatus,
                },
            ],
        });
    }
}

module.exports = OrdersData;
