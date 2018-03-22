// THIS IS TEMPORARY TEST - JUST PRACTICING

const {
    expect,
} = require('chai');

const Data = require('../../app/data/generic.data');

let usersArr = [];
const fakeData = {
    findAll: () => [],
};

describe('getAll', () => {
    describe('With Valid Data', () => {
        it('when no data exists, expect empty array', async () => {
            usersArr = [];
            const data = new Data(fakeData);
            const result = await data.getAll();
            expect(result).to.deep.equal(usersArr);
        });
    });
});
