const {
    User,
    Order,
    orderStatus,
    Product,
    Category,
    Promotion,
} = require('./models');

const categories = {
    getAll() {
        return Category.findAll();
    },
    getById(id) {
        return Category.findById(id);
    },
    create(category) {
        return Category.create(category);
    },
};

module.exports = {
    categories,
};
