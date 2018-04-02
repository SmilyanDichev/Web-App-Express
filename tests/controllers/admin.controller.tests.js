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
                updateProduct: (obj) => {},
                create: (obj) => {},
            }
        };
        AdminController = new Controller(data);
    })

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

        // it('when orders exist, expect array with orders', async () => {

        // });
    });
});