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

    _isObjectValid(obj) {
        return !!obj;
    }
}

module.exports = UsersData;
