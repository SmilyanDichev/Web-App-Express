module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Promotions', [{
        type: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        type: 0.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        type: 0.5,
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
