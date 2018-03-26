class HomePageController {
    constructor(data) {
        this.data = data;
    }

    async getHome() {
        const allPromoProducts = await this.data.product.getPromoProducts();
        return {
            products: allPromoProducts,
        };
    }
}

module.exports = HomePageController;
