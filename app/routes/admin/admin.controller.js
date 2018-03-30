class AdminController {
    constructor(data) {
        this.data = data;
    }

    async getOrdersByStatus() {
        let allOrders = await this.data.order.getAll();
        allOrders = allOrders.map((order) => {
            let orderTime = order.createdAt.toString();
            let updateTime = order.updatedAt.toString();
            orderTime = orderTime.split('GMT');
            updateTime = updateTime.split('GMT');

            return {
                email: order.User.email,
                address: order.User.address,
                status: order.orderStatus.type,
                orderId: order.id,
                date: orderTime[0],
                updated: updateTime[0],
            };
        });
        allOrders.sort((a, b) => a.status < b.status);

        let orderStats = await this.data.orderStatus.getAll();
        orderStats = orderStats.map((status) => {
            return {
                id: status.id,
                name: status.type,
            };
        });

        return {
            allOrders,
            orderStats,
        };
    }

    async updateOrderStatus(orderId, newStatusId) {
        return await this.data.order.updateStatus(orderId, newStatusId);
    }

    async getAllProducts() {
        const allProducts = await this.data.product.getAll();
        const allCategories = await this.data.category.getAll();
        const allPromotions = await this.data.promotion.getAll();
        return {
            allProducts,
            allCategories,
            allPromotions,
        };
    }

    async createProduct(productObj) {
        return this.data.product.create(productObj);
    }

    async updateProduct(productObj) {
        return this.data.product.updateProduct(productObj);
    }
}

module.exports = AdminController;
