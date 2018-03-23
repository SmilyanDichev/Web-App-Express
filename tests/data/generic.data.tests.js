const {
    expect,
} = require('chai');

const sinon = require('sinon');

const GenericData = require('../../app/data/generic.data');

describe('Generic Data', () => {
    let data = null;
    let Model = null;
    beforeEach(() => {
        Model = {
            findAll: () => {},
            findById: (id) => {},
            create: (object) => {},
        };
        data = new GenericData(Model);
    });
    describe('When valid', () => {
        describe('getAll', () => {

            it('With empty model, expect to return empty array', async () => {
                sinon.stub(Model, 'findAll').returns([]);
                const objects = await data.getAll();
                expect(objects).to.have.lengthOf(0);
            });

            it('With objects in model, expect to return all objects', async () => {
                const objects = [1, 2, 3];
                sinon.stub(Model, 'findAll').returns(objects);
                const resultObjects = await data.getAll();
                expect(resultObjects).deep.equal(objects);
            });
        });

        describe('getById', () => {
            it('existing id, expect to return the object', async () => {
                const id = 1;
                const object = {
                    id,
                };

                sinon.stub(Model, 'findById').returns(object);

                const resultObject = await data.getById(id);

                expect(resultObject).to.exist;
                expect(resultObject.id).to.eq(id);
            });
        });
    });
    describe('When invalid', () => {
        describe('getAll', async () => {
            it('non-existing Model, expect undefined', async () => {
                sinon.stub(Model = null);
                const result = await data.getAll();
                expect(result).to.be.undefined;
            })
        });
        describe('getById', async () => {
            it('non-existing id, expect undefined', async () => {
                sinon.stub(Model, 'findById').returns(undefined);
                const result = await data.getById(1);
                expect(result).to.be.undefined;
            })
        });
    });
});