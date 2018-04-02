const {
    expect,
} = require('chai');

const sinon = require('sinon');

const Controller = require('../../app/routes/user/user.controller');

describe('UserController', () => {
    let data = null;
    let UserController = null;
    beforeEach(function () {
        data = {
            user: {
                getById: (id) => {},
                getOrders: () => [],
            },
            order: {
                getById: (id) => {},
                updateStatus: () => [],
                updateProductsInOrder: (order, products) => [],
                addProductsToOrder: (order, products) => [],
            },
            product: {
                getAll: () => [],
                getById: (id) => {},
            },
        };
        UserController = new Controller(data);
    });

    describe('getUserById', () => {
        it('when user exists, expect object with user', async () => {
            const expectedResult = {
                id: 1,
                name: 'Pesho',
                email: 'pesho@gosho.com'
            };
            sinon.stub(data.user, 'getById').returns({
                id: 1,
                name: 'Pesho',
                email: 'pesho@gosho.com'
            });

            const result = await UserController.getUserById(1);
            expect(result).to.be.an('object');
            expect(result).deep.equals(expectedResult);
        });
    });

    describe('updateOrCreateUserOrder', () => {
        it('when active order, expect to update order', async () => {
            const currentOrder = {
                id: 15,
            };
            const products = {
                Product: {
                    id: 15,
                    ordersProduct: {
                        quantity: 2,
                    },
                },
            };
            sinon.stub(UserController, '_getProductsAndQuantities').returns([{
                id: 1,
                qty: 2,
            }, ]);
            sinon.stub(UserController, '_activeUserOrder').returns(15);
            sinon.stub(data.order, 'getById').returns({
                id: 15,
            });
            sinon.stub(UserController, '_setQtyToProducts').returns([{
                Product: {
                    id: 15,
                    ordersProduct: {
                        quantity: 2,
                    },
                },
            }]);
            sinon.stub(data.order, 'updateProductsInOrder').returns([{
                id: 15,
                quantity: 2,
            }]);
            const result = await UserController.updateOrCreateUserOrder(currentOrder, products);
            expect(result).to.be.an('array');
            expect(result).to.have.lengthOf(1);
        });
    });

    describe('_activeUserOrder', () => {
        it('when active user order exists, expect number !== 0', async () => {
            const userOrders = [{
                id: 2,
                orderStatusId: 3,
            }];
            sinon.stub(data.user, 'getById').returns({
                id: 1,
                name: 'Pesho',
                getOrders: () => { return userOrders },
            });
            const result = await UserController._activeUserOrder(1);
            expect(result).to.be.a('number');
            expect(result).to.be.not.equal(0);
        });
    });
});