class AdminController {
    constructor(data) {
        this.data = data;
    }

    async getOrdersByStatus() {
        let allOrders = await this.data.order.getAll();
        allOrders = allOrders.map((order) => {
            return {
                email: order.User.email,
                address: order.User.address,
                status: order.orderStatus.type,
                orderId: order.id,
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

    async UpdateOrderStatus(orderId, newStatusId) {
        return await this.data.order.updateStatus(orderId, newStatusId);
    }
}

module.exports = AdminController;
