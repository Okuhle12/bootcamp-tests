describe('The countAllPaarl function', function(){
    it('Should return the number of registration numbers for Paarl', function(){
        assert.equal(countAllPaarl("CJ 678 543, CJ 67890, CL 900, CJ 678 543, CA 34567"), 3);
    });
    it('Should return the number of registration numbers for Paarl', function(){
        assert.equal(countAllPaarl("CJ 345 123, CJ 123, Y 568, P 235"), 2); 
});
});