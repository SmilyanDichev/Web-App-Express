const Data = require('./generic.data');

const {
    Product,
    Promotion,
    Category,
} = require('../database/models');

class ProductsData extends Data {
    constructor() {
        super(Product, [Promotion, Category]);
    }

    getPromoProducts() {
        return this.Model.findAll({
            include: [{
                model: Promotion,
                where: {
                    id: {
                        $not: 1,
                    },
                },
            }],
        });
    }

    getByCategory(category) {
        return this.Model.findAll({
            include: [{
                    model: Category,
                    where: {
                        name: category,
                    },
                },
                {
                    model: Promotion,
                },
            ],
        });
    }
}

module.exports = ProductsData;
