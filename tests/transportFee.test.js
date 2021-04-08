describe('The transportFee function', function(){
    it('Should returns the right price for the morning shift', function(){
        assert.equal('you pay nothing R20', transportFee('R20'));
    });
    it('Should returns the right price for the night shift', function(){
        assert.equal('you pay nothing R20', transportFee('R20'));
});
it('Should returns the right price based on the shift you are working for the morning shift the transport fee cost R20,Afternoon shift is R10 and the night shift is free', function(){
    assert.equal('you pay nothing R10', transportFee('R10'));
});
});