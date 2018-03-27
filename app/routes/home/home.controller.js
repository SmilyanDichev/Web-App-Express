class HomePageController {
    constructor(data) {
        this.data = data;
    }

    async getHome() {
        let allPromoProducts = await this.data.product.getPromoProducts();
        allPromoProducts = allPromoProducts.map((product) => {
            const newPrice = this._calculateNewPrice(product.price,
                product.Promotion.type);
            return {
                name: product.name,
                pictureUrl: product.pictureUrl,
                oldPrice: product.price,
                newPrice: newPrice,
                saleSign: 'SALE!',
            };
        });
        allPromoProducts.forEach((product) => console.log(product));

        return {
            products: allPromoProducts,
        };
    }

    async getProductsByCategory(category) {
        let categoryProducts = await this.data.product.getByCategory(category);
        categoryProducts = categoryProducts.map((product) => {
            if (product.Promotion.id !== 1) {
                const newPrice = this._calculateNewPrice(product.price,
                    product.Promotion.type);
                return {
                    name: product.name,
                    pictureUrl: product.pictureUrl,
                    oldPrice: product.price,
                    newPrice,
                    saleSign: 'SALE!',
                };
            }
            return {
                name: product.name,
                pictureUrl: product.pictureUrl,
                oldPrice: product.price,
            };
        });
        console.log(categoryProducts);
        return {
            products: categoryProducts,
        };
    }

    _calculateNewPrice(currentPrice, discount) {
        const newPrice = currentPrice - (currentPrice * discount);
        return +newPrice.toFixed(2);
    }
}

module.exports = HomePageController;
