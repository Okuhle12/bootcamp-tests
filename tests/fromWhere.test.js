describe('The fromWhere function', function(){
    it('Should take a car registration number as a parameter and returns the town the car is from,If the reg number starts with CY return Bellville', function(){
        assert.equal('Bellville', fromWhere('CY'));
    });
    it('Should take a car registration number as a parameter and returns the town the car is from,If the reg number starts with CA return Cape Town', function(){
        assert.equal('Cape Town', fromWhere('CA'));
});
it('Should take a car registration number as a parameter and returns the town the car is from,If the reg number starts with CJ return Paarl', function(){
    assert.equal('Paarl', fromWhere('CJ'));
});
});