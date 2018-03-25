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
            };
        });
        // console.log('============');
        // allOrders.forEach((order) => console.log(order));
        // console.log('============');
        return allOrders;
    }
}

module.exports = AdminController;
