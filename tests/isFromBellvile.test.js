describe('The isFromBellvile function', function(){
    it('Should return true if the vehicle registration number startsWith CY', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });
    it('Should return false if the vehicle registration number dont startsWith CY', function(){
        assert.equal(false, isFromBellville('CA 123'));
    });
});