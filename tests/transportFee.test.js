describe('The transportFee function', function(){
    it('Should returns the right price for the morning shift', function(){
        assert.equal('R20', transportFee('morning'));
    });
    it('Should returns the right price for the afternoon shift', function(){
        assert.equal('R10', transportFee('afternoon'));
});
it('Should returns the right price for the night shift', function(){
    assert.equal('free', transportFee('nightshift'));
});
});