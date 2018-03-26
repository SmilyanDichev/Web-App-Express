class ProductsController {
    constructor(data) {
        this.data = data;
    }

    async getProductsPage(category) {
        let categoryProducts = await this.data.product.getAll();
        categoryProducts = categoryProducts
            .filter((product) => product.Category.name === category);

        return {
            products: categoryProducts,
        };
    }
}

module.exports = ProductsController;
