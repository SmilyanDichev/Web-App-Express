class HomePageController {
    constructor(data) {
        this.data = data;
    }

    async getHome() {
        const allPromoProducts = await this.data.product.getPromoProducts();
        let allCategories = await this.data.category.getAll();
        const productsRoute = 'products?category=';

        allCategories = allCategories.map((cat) => {
            return {
                href: productsRoute + cat.name,
                text: cat.name,
            };
        });

        return {
            products: allPromoProducts,
            buttons: allCategories,
        };
    }
}

module.exports = HomePageController;
