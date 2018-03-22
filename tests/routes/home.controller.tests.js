const {
    expect,
} = require('chai');

const sinon = require('sinon');

const Controller = require('../../app/routes/home/home.controller');

let promoProductsArray = [];
let categories = [];


const fakeData = {
    product: {
        getPromoProducts() {
            return promoProductsArray;
        },
    },

    category: {
        getAll() {
            return categories;
        },
    },
};
// NEEDS FIXING
describe('HomePageController', () => {
    describe('getHome()', () => {
        beforeEach(() => {
            promoProductsArray = [];
            categories = [];
        });
        it('when no promo products, expect empty array and not empty categories', async () => {
            sinon.stub(categories = [1, 2, 3]);
            console.log(categories);
            const controller = new Controller(fakeData);
            const result = await controller.getHome();
            console.log(result.products);
            expect(result.products).to.be.empty;
            expect(result.buttons).to.not.be.empty;
        });
    });
});
