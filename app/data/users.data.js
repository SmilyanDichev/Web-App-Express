const Data = require('./generic.data');

const {
    User,
    Order,
    orderStatus,
} = require('../database/models');

class UsersData extends Data {
    constructor() {
        super(User, [Order]);
    }

    findByEmail(email) {
        return this.Model.findOne({
            where: {
                email,
            },
            include: [{
                model: Order,
                include: [orderStatus],
            }],
        });
    }
}

module.exports = UsersData;
