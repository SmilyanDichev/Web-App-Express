const {
    orderStatus,
    Product,
    Category,
    Promotion,
} = require('../database/models');

const Data = require('./generic.data');
const UsersData = require('./users.data');
const ProductsData = require('./products.data');
const OrdersData = require('./orders.data');


module.exports = {
    user: new UsersData(),
    order: new OrdersData(),
    orderStatus: new Data(orderStatus),
    product: new ProductsData(),
    category: new Data(Category, [Product]),
    promotion: new Data(Promotion),
};
