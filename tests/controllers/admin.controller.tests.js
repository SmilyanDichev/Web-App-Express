const {
    expect,
} = require('chai');

const sinon = require('sinon');

const Controller = require('../../app/routes/admin/admin.controller');

describe('AdminController', () => {
    let data = null;
    let AdminController = null;
    beforeEach(function () {
        data = {
            order: {
                getAll: () => [],
                updateStatus: (id, newStatusId) => [],
            },
            orderStatus: {
                getAll: () => [{
                    id: 1,
                    type: 'Delivered',
                }],
            },
            category: {
                getAll: () => [],
            },
            product: {
                getAll: () => [],
                updateProduct: (obj) => [],
                create: (obj) => {},
            },
            promotion: {
                getAll: () => [],
            },
        };
        AdminController = new Controller(data);
    });

    describe('getOrdersByStatus', () => {
        it('when no orders exist, expect empty array', async () => {
            const orderstatuses = [{
                id: 1,
                name: 'Delivered',
            }];
            const result = await AdminController.getOrdersByStatus();
            expect(result).to.be.an('object');
            expect(result.allOrders).deep.equal([]);
            expect(result.orderStats).to.be.an('array');
            expect(result.orderStats).deep.equal(orderstatuses);
        });

        it('when orders exist, expect array with orders', async () => {
            const orderstatuses = [{
                id: 1,
                name: 'Delivered',
            }];

            sinon.stub(data.order, 'getAll').returns([{
                User: {
                    email: 'useremail',
                    address: 'useraddress',
                },
                orderStatus: {
                    type: 'Delivered',
                },
                id: 10,
                createdAt: 'date',
                updatedAt: 'date updated',
            }]);

            const expectedResult = {
                email: 'useremail',
                address: 'useraddress',
                status: 'Delivered',
                orderId: 10,
                date: 'date',
                updated: 'date updated',
            }
            const result = await AdminController.getOrdersByStatus();
            expect(result).to.be.an('object');
            expect(result.allOrders).deep.equal([expectedResult]);
            expect(result.orderStats).to.be.an('array');
            expect(result.orderStats).deep.equal(orderstatuses);
        });
    });

    describe('updateOrderStatus', () => {
        it('when updating order, expect not empty array', async () => {
            sinon.stub(data.order, 'updateStatus').returns([{
                found: true,
            }, {
                obj: 'someObject',
            }]);
            const result = await AdminController.updateOrderStatus(1, 2);
            expect(result).to.be.an('array');
            expect(result).to.have.lengthOf(2);
        });
    });

    describe('getAllProducts', () => {
        it('when no products, expect empty array', async () => {
            const result = await AdminController.getAllProducts();
            expect(result).to.be.an('object');
            expect(result.allProducts).to.be.an('array');
            expect(result.allProducts).to.have.lengthOf(0);
        });

        it('when products exist, expect array with products', async () => {
            const expectedResult = {
                id: 1,
                name: 'Apples',
                price: 2,
            }
            sinon.stub(data.product, 'getAll').returns([{
                id: 1,
                name: 'Apples',
                price: 2,
            }, ]);
            const result = await AdminController.getAllProducts();
            expect(result).to.be.an('object');
            expect(result.allProducts).to.be.an('array');
            expect(result.allProducts).deep.equal([expectedResult]);
        });

        
        // it('when getting products, expect promotions to be array', async () => {
        //     const result = await AdminController.getAllProducts();
        //     expect(result.allPromotions).to.be.an('array');
        // });
    });

    describe('createProduct', () => {
        it('when creating product, expect object', async () => {
            const prodObj = {
                name: 'New name',
            };

            sinon.stub(data.product, 'create').returns({
                id: 5,
                name: 'New name'
            });
            const result = await AdminController.createProduct(prodObj);
            expect(result).to.be.an('object');
        });
    });

    describe('updateProduct', () => {
        it('when updating product, expect not empty array', async () => {
            const prodObj = {
                id: 1,
            };
            sinon.stub(data.product, 'updateProduct').returns([{
                found: true,
            }, {
                obj: 'productObject',
            }]);
            const result = await AdminController.updateProduct(prodObj);
            expect(result).to.be.an('array');
            expect(result).to.have.lengthOf(2);
        });
    });
});