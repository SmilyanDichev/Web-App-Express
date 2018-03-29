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

    updateProduct(productObj) {
        return this.Model.update({
            name: productObj.name,
            price: productObj.price,
            pictureUrl: productObj.pictureUrl,
            CategoryId: productObj.CategoryId,
            PromotionId: productObj.PromotionId,
        }, {
            where: {
                id: productObj.id,
            },
        }, );
    }
}

module.exports = ProductsData;
