module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Orders', [{
                createdAt: new Date(),
                updatedAt: new Date(),
                UserId: 1,
                orderStatusId: 1,
            }, {
                createdAt: new Date(),
                updatedAt: new Date(),
                UserId: 1,
                orderStatusId: 2,
            },
            {
                createdAt: new Date(),
                updatedAt: new Date(),
                UserId: 1,
                orderStatusId: 3,
            },
        ], {});
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
