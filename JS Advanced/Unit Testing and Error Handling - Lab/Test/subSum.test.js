const {assert} = require('chai');
const { sum } = require("../01. Sub Sum");

describe('sum', () => {
    it ('return nan', ()=> {
        assert.isNaN(sum('string'), true);
    })
})