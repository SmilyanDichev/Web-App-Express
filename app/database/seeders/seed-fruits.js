module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', [{
            name: 'Apples',
            price: 1.99,
            pictureUrl: 'https://goo.gl/NfpTTs',
            CategoryId: 1,
            PromotionId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'Bananas',
            price: 2.59,
            pictureUrl: 'https://goo.gl/5hrcMi',
            CategoryId: 1,
            PromotionId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'Strawberries',
            price: 3.99,
            pictureUrl: 'https://goo.gl/bvd5et',
            CategoryId: 1,
            PromotionId: 1,
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
