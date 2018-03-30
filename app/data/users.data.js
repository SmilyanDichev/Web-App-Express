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

    // TO DO: REMOVE CREATE - USE THE ONE FROM GENERIC DATA
    create(formInfo) {
        const address = `${formInfo.city} ${formInfo.street} ${formInfo.apartment}`;
        const newUser = {
            name: formInfo.name,
            email: formInfo.email,
            address,
            isAdmin: 0,
            password: formInfo.password,
        };
        super.create(newUser);
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