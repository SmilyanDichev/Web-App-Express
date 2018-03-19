module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categories', [{
            name: 'Fruits',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'Vegetables',
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'Meat',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Diary',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Drinks',
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
