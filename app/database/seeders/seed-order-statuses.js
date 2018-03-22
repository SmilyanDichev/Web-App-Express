module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('orderstatuses', [{
            type: 'Delivered',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            type: 'In progress',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            type: 'In cart',
            createdAt: new Date(),
            updatedAt: new Date(),
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
