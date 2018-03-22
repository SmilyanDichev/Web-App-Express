module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('products_orders', [{
            createdAt: new Date(),
            updatedAt: new Date(),
            ProductId: 1,
            OrderId: 1,
        }, {
            createdAt: new Date(),
            updatedAt: new Date(),
            ProductId: 2,
            OrderId: 1,
        },
        {
            createdAt: new Date(),
            updatedAt: new Date(),
            ProductId: 2,
            OrderId: 2,
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.
          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
    },
};
