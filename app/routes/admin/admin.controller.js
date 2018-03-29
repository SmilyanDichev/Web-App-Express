class AdminController {
    constructor(data) {
        this.data = data;
    }

    async getOrdersByStatus() {
        let allOrders = await this.data.order.getAll();

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
        return this.data.product.getAll();
    }
}

module.exports = AdminController;
