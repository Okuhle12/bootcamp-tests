describe('The regCheck function', function(){
    it('Should Check registration numbers if are they for the given location using endsWith method.', function(){
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });
    it('Should return false if the registration numbers are not for the given location using endsWith method.', function(){
        assert.equal(false, regCheck('DV 23 LP GP', 'MP'));
    });
    it('Should return false if the registration numbers are not for the given location using endsWith method.', function(){
            assert.equal(false, regCheck('CY 189-012', 'CY'));
    });
    it('Should Check registration numbers if are they for the given location using endsWith method.', function(){
        assert.equal(false, regCheck('CY 189-012', 'ND'));
    });
})