const Data = require('./generic.data');

const {
    Product,
    Promotion,
} = require('../database/models');

class ProductsData extends Data {
    constructor() {
        super(Product, [Promotion]);
    }

    getPromoProducts() {
        return this.Model.findAll({
            include: [{
                model: Promotion,
                where: {
                    id: {
                        $eq: 1,
                    },
                },
            }],
        });
    }
}

module.exports = ProductsData;
