describe('The findItemsOver20 function', function(){
it('Should return all the products that have a quantity higher than 20.', function(){
assert.deepEqual([], findItemsOver20('>20'));
});
it('Should return all the products that have a quantity less than 20.', function(){
    assert.deepEqual([], findItemsOver20('< 20'));
});
it('Should return all the products that have a quantity equal to 20.', function(){
    assert.deepEqual([], findItemsOver20(' =20'));
});
});