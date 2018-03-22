class ProductsController {
    constructor(data) {
        this.data = data;
    }

    async getAll() {
        const allProducts = this.data.product.getAll();
        return allProducts;
    }
}

module.exports = ProductsController;
