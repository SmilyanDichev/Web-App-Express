const {
    expect,
} = require('chai');

const sinon = require('sinon');

const Controller = require('../../app/routes/home/home.controller');

describe('HomePageController', () => {
    let data = null;
    let HomePageController = null;
    beforeEach (function () {
        data = {
            product: {
                getPromoProducts: () => [],
                getByCategory: () => [],
            },
        };
        HomePageController = new Controller(data);
    });
    describe('getHome()', () => {
        it('when no promo products, expect empty array', async () => {
            const result = await HomePageController.getHome();
            expect(result).to.be.an('object')
            expect(result.products).to.have.lengthOf(0);
        });

        it('when promo products, expect array with promo products', async () => {
            let newPrice = 3;
            let expectedResult = {
                id: 2,
                name: 'Apples',
                pictureUrl: 'someurl.com',
                oldPrice: 5,
                newPrice,
                saleSign: 'SALE!'
            };

            sinon.stub(data.product, 'getPromoProducts').returns([{
                Promotion: {
                    id: 2,
                    type: 2,
                },
                id: 2,
                name: 'Apples',
                pictureUrl: 'someurl.com',
                price: 5,
                newPrice,
                saleSign: 'SALE!'
            }]);

            sinon.stub(HomePageController, '_calculateNewPrice').returns(newPrice);
            const result = await HomePageController.getHome();
            expect(result).to.be.an('object');
            expect(result.products).deep.equal([expectedResult]);
        });
    });

    describe('getProductsByCategory()', () => {
        it('when wrong category is passed, expect empty array', async () => {
            let category = 'fakeCategory';
            const result = await HomePageController.getProductsByCategory(category);
            expect(result.products).deep.equal([]);
        });

        it('when category is passed and no promo products, expect array with products', async () => {
            let category = 'fruits';
            let newPrice = 3;
            let expectedResult = {
                id: 2,
                name: 'Apples',
                pictureUrl: 'someurl.com',
                oldPrice: 5,
            };

            sinon.stub(data.product, 'getByCategory').returns([{
                Promotion: {
                    id: 1,
                    type: 2,
                },
                id: 2,
                name: 'Apples',
                pictureUrl: 'someurl.com',
                price: 5,
            }]);

            sinon.stub(HomePageController, '_calculateNewPrice').returns(newPrice);
            const result = await HomePageController.getProductsByCategory(category);
            expect(result).to.be.an('object');
            expect(result.products).deep.equal([expectedResult]);
        });

        it('when category is passed and promo products exists, expect array with promo products', async () => {
            let category = 'fruits';
            let newPrice = 3;
            let expectedResult = {
                id: 2,
                name: 'Apples',
                pictureUrl: 'someurl.com',
                oldPrice: 5,
                newPrice,
                saleSign: 'SALE!'
            };

            sinon.stub(data.product, 'getByCategory').returns([{
                Promotion: {
                    id: 2,
                    type: 2,
                },
                id: 2,
                name: 'Apples',
                pictureUrl: 'someurl.com',
                price: 5,
                newPrice,
                saleSign: 'SALE!'
            }]);

            sinon.stub(HomePageController, '_calculateNewPrice').returns(newPrice);
            const result = await HomePageController.getProductsByCategory(category);
            expect(result).to.be.an('object');
            expect(result.products).deep.equal([expectedResult]);
        });
    });

    describe('_calculateNewPrice()', () => {
        it('when valid price and discount, expect newPrice < oldPrice', async () => {
            const oldPrice = 5;
            const discount = 0.2;
            const result = await HomePageController._calculateNewPrice(oldPrice, discount);
            expect(result).to.be.lessThan(oldPrice);
            expect(result).to.equal(4);
        });
        it('when invalid price or discount, expect NaN', async () => {
            const oldPrice = 5;
            const discount = 'string';
            const result = await HomePageController._calculateNewPrice(oldPrice, discount);
            expect(result).to.be.NaN;
        });
    });
});