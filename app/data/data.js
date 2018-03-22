const {
    Order,
    orderStatus,
    Product,
    Category,
    Promotion,
} = require('../database/models');

const Data = require('./generic.data');
const UsersData = require('./users.data');


module.exports = {
    user: new UsersData(),
    order: new Data(Order, orderStatus),
    orderStatus: new Data(orderStatus),
    product: new Data(Product),
    category: new Data(Category),
    promotion: new Data(Promotion),
};
