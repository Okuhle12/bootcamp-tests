describe('The regCheck function', function(){
    it('Should Check registration numbers if are they for the given location using endsWith method.', function(){
        assert.equal(false, regCheck('DC 55 YU GP'));
    });
    it('Should return false if the registration numbers are not for the given location using endsWith method.', function(){
        assert.equal(false, regCheck('5566 K'));

});
});