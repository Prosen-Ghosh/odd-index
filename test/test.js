const oddIndex = require('../odd-index');
const assert = require('chai').assert;
describe('Odd Index Array',function(){
    it('Function Shuld Return odd Index Of Array from the orginal array',function(){
        assert.deepEqual(oddIndex([1]),[]);
        assert.deepEqual(oddIndex([]),[]);
        assert.deepEqual(oddIndex([1,-2,-1]),[-2]);
        assert.deepEqual(oddIndex([1,[],-2,[]]),[[],[]]);
        assert.deepEqual(oddIndex(["tim","foo","baz","jam","bar","bob"]),["foo","jam","bob"]);
    });
});