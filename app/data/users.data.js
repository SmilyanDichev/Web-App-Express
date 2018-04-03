const Data = require('./generic.data');

const {
    User,
    Order,
    orderStatus,
    Product,
} = require('../database/models');

class UsersData extends Data {
    constructor() {
        super(User, [Order]);
    }

    getByEmail(email) {
        return this.Model.findOne({
            where: {
                email,
            },
            include: [{
                model: Order,
                include: [Product, orderStatus],
            }],
        });
    }

    getOrderInCartByUser(userId) {
        return this.Model.findOne({
            where: {
                id: userId,
            },
            incude: [{
                model: Order,
                where: {
                    orderStatusId: 3,
                },
                include: [Product, orderStatus],
            }],
        });
    }

    _isObjectValid(obj) {
        return !!obj;
    }
}

module.exports = UsersData;
