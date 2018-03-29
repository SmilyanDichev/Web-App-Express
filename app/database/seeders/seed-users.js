module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            name: 'user1',
            createdAt: new Date(),
            updatedAt: new Date(),
            address: 'whatever',
            email: 'user1@foodstore.com',
            password: '123',
            isAdmin: 0,
        }, {
            name: 'user2',
            createdAt: new Date(),
            updatedAt: new Date(),
            address: 'whatever2',
            email: 'user2@foodstore.com',
            password: '123',
            isAdmin: 0,
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
