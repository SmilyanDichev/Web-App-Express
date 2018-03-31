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

            return {
                email: user.User.email,
                address: user.User.address,
                status: user.orderStatus.type,
                orderId: user.id,
                date: orderTime[0],
                updated: updateTime[0],
            };
        });
        return {
            ordersByUser,
        };
    }
    // TO DO: FINISH confirmOrder
    async confirmOrder() {
        return;
    }

    async updateOrCreateUserOrder(order, userId) {
        const productIdQty = this._getProductsAndQuantities(order.storage);
        const activeOrder = await this._activeUserOrder(userId);

        if (activeOrder) {
            const currentOrder = await this.data.order.getById(activeOrder);
            const productsInOrder = await this._setQtyToProducts(productIdQty);
            await this.data.order
                    .updateProductsInOrder(currentOrder, productsInOrder);
        } else {
            const orderObj = {
                UserId: userId,
                orderStatusId: 3,
            };
            const currentOrder = await this.data.order.create(orderObj);
            await Promise.all(productIdQty.map(async (product) => {
                return this.data.order
                        .addProductsToOrder(currentOrder, product);
            }));
        }
    }

    async _activeUserOrder(userId) {
        const user = await this.data.user.getById(userId);
        const userOrders = await user.getOrders();
        let activeOrder = 0;
        userOrders.forEach((order) => {
            if (order.orderStatusId === 3) {
                activeOrder = order.id;
            }
        });
        return activeOrder;
    }

    async _setQtyToProducts(productQty) {
        const productsInOrder = await Promise.all(productQty
            .map(async (prod) => this.data.product.getById(+prod.id)));
        productsInOrder.forEach((prod) => {
            productQty.forEach((prodWithQty) => {
                if (prodWithQty.id === prod.id) {
                    prod.ordersProduct = {
                        quantity: prodWithQty.qty,
                    };
                }
            });
        });
        return productsInOrder;
    }

    _getProductsAndQuantities(arr) {
        const productIds = arr.map((product) => {
            return {
                id: +product.id,
                qty: +product.quantity,
            };
        });
        return productIds;
    }
}

module.exports = UserController;
