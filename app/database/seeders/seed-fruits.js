module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', [{
            name: 'Pepsi 2L',
            price: 2.19,
            pictureUrl: 'https://goo.gl/NFg7EJ',
            CategoryId: 5,
            PromotionId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'Cola 2L',
            price: 2.49,
            pictureUrl: 'https://goo.gl/BpbpXG',
            CategoryId: 5,
            PromotionId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'Carlsberg 6',
            price: 6.99,
            pictureUrl: 'https://goo.gl/epMjoh',
            CategoryId: 5,
            PromotionId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Cheese',
            price: 3.19,
            pictureUrl: 'https://goo.gl/yKHBEW',
            CategoryId: 4,
            PromotionId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Milk 2L',
            price: 2.19,
            pictureUrl: 'https://goo.gl/ZyW5Z9',
            CategoryId: 4,
            PromotionId: 2,
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
