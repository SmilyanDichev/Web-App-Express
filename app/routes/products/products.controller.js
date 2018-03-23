class ProductsController {
    constructor(data) {
        this.data = data;
    }

    async getProductsPage(category) {
        let navButtons = await this.data.category.getAll();
        const productsRoute = 'products?category=';

        navButtons = navButtons.map((cat) => {
            return {
                href: productsRoute + cat.name,
                text: cat.name,
            };
        });

        let categoryProducts = await this.data.product.getAll();
        categoryProducts = categoryProducts
            .filter((product) => product.Category.name === category);

        return {
            products: categoryProducts,
            buttons: navButtons,
        };
    }
}

module.exports = ProductsController;