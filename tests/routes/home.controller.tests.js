const {
    expect,
} = require('chai');

const sinon = require('sinon');

const Controller = require('../../app/routes/home/home.controller');

let promoProductsArray = [];
let categories = [];


const fakeData = {
    product: {
        getPromoProducts: () => {},
    },

    category: {
        getAll: () => {},
    },
};
describe('HomePageController', () => {
    describe('getHome()', () => {
        it('when no promo products, expect empty array and not empty categories', async () => {
            sinon.stub(fakeData.category, 'getAll').returns([{name: 'testCategory'}]);
            sinon.stub(fakeData.product, 'getPromoProducts').returns([]);
            const controller = new Controller(fakeData);
            const result = await controller.getHome();
            expect(result.products).to.have.lengthOf(0);
            expect(result.buttons).to.not.be.empty;
        });

        // NEEDS FIXING
        // it('when promo products, expect array with products and not empty categories', async () => {
        //     sinon.stub(fakeData.category, 'getAll').returns([{name: 'testCategory'}]);
        //     sinon.stub(fakeData.product, 'getPromoProducts').returns([1, 2]);
        //     const controller = new Controller(fakeData);
        //     const result = await controller.getHome();
        //     expect(result.products).to.not.be.empty;
        //     expect(result.buttons).to.not.be.empty;
        // });
    });
});
