describe('The findItemsOver function', function(){
    it('Should return products that have quantity higher than the threshold.', function(){
    assert.deepEqual([], findItemsOver('threshold'));
    });
    it('Should return products that have quantity equal to  the threshold.', function(){
        assert.deepEqual([], findItemsOver('= threshold'));
    });
    it('Should return products that have quantity less than the threshold.', function(){
        assert.deepEqual([], findItemsOver('< threshold'));
});
});