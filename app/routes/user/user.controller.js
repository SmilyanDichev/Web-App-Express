class UserController {
    constructor(data) {
        this.data = data;
    }
    async getUserOrdersHistory(email) {
        let ordersByUser = await this.data.order.getUserOrders(email);
        console.log("000000000000000000000000000");
        console.log(typeof ordersByUser);
        ordersByUser = ordersByUser.map((user) => {
            let orderTime = user.createdAt.toString();
            let updateTime = user.updatedAt.toString();
            orderTime = orderTime.split('GMT');
            updateTime = updateTime.split('GMT');

            return {
                email: user.User.email,
                address: user.User.address,
                status: user.orderStatus.type,
                orderId: user.id,
                date: orderTime[0],
                updated: updateTime[0],
            };
        });
        // const userOrderHistory =[{
        //     order: 1,
        // }, {
        //     order: 2,
        // },
        // {
        //     order: 3,
        // },
        // {
        //     order: 4,
        // }];
        return {
            ordersByUser,
        };
    }
    async confirmOrder() {
        return;
    }
}

module.exports = UserController;