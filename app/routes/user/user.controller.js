const lodash = require('lodash');

class UserController {
    constructor(data) {
        this.data = data;
    }
    async getUserById(id) {
        return this.data.user.getById(id);
    }
    async getUserOrdersHistory(email) {
        let ordersByUser = await this.data.order.getUserOrders(email);
        ordersByUser = ordersByUser.map((user) => {
            let orderTime = user.createdAt.toString();
            let updateTime = user.updatedAt.toString();
            orderTime = orderTime.split('GMT');
            updateTime = updateTime.split('GMT');
            // DELET THIS
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

    async updateOrCreateUserOrder(order, userId) {
        // NEEDS MORE WORK
        const productIds = this._getProductIds(order.storage);
        const activeOrder = await this._activeUserOrder(userId);
        console.log(productIds);
        console.log(activeOrder);
        if (activeOrder) {
            console.log('ORDER WILL BE UPDATED');
        } else {
            console.log('ORDER WILL BE CREATED');
            const orderObj = {
                UserId: userId,
                orderStatusId: 3,
            };
            console.log(orderObj);
            const currentOrder = await this.data.order.create(orderObj);
            await currentOrder.setProducts(productIds);
            // await currentOrder.setProducts(productIds);
        }
    }

    async _activeUserOrder(userId) {
        const user = await this.data.user.getById(userId);
        const userOrders = await user.getOrders();
        let activeOrder = false;
        userOrders.forEach((order) => {
            if (order.orderStatusId === 3) {
                activeOrder = true;
            }
        });
        return activeOrder;
    }

    _getProductIds(arr) {
        const productIds = arr.map((product) => {
            let quantityArr = Array.from({
                length: +product.quantity,
            });
            quantityArr = quantityArr.map((id) => {
                return +product.id;
            });
            return quantityArr;
        });
        return lodash.flatten(productIds);
    }
}

module.exports = UserController;
