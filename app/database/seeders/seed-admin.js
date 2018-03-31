module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'admin1',
            createdAt: new Date(),
            updatedAt: new Date(),
            address: 'whatever',
            email: 'admin1@foodstore.com',
            password: '123',
            isAdmin: 1,
        }, {
            name: 'admin2',
            createdAt: new Date(),
            updatedAt: new Date(),
            address: 'whatever2',
            email: 'admin2@foodstore.com',
            password: '123',
            isAdmin: 1,
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
