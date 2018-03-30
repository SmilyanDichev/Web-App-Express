class UserController {
    constructor(data) {
        this.data = data;
    }
    async getUserOrdersHistory(email) {
        let ordersByUser = await this.data.order.getUserOrders(email);
        // console.log('!!!!!! !!!!!! !!!!!! !!!!!! ');
        // console.log(ordersByUser);
        ordersByUser = ordersByUser.map((user) => {
            let orderTime = user.createdAt.toString();
            let updateTime = user.updatedAt.toString();
            orderTime = orderTime.split('GMT');
            updateTime = updateTime.split('GMT');
            if (user.Products.length === 0) {
                user.Products.push({
                    name: ' ',
                    price: ' ',
                    category: ' ',
                    pictureUrl: ' ',
                });
            }

            return {
                email: user.User.email,
                address: user.User.address,
                status: user.orderStatus.type,
                orderId: user.id,
                products: user.Products,
                date: orderTime[0],
                updated: updateTime[0],
            };
        });
        return {
            ordersByUser,
        };
    }
    async confirmOrder() {
        return;
    }
}

module.exports = UserController;