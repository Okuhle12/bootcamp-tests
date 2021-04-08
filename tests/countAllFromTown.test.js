describe('The countAllFromTown function', function(){
    it('Should returns the number of registration numbers in the Stellenbosch', function(){
        assert.equal(countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CL"), 3);
    });
    it('Should return the number of registration numbers for Paarl', function(){
        assert.equal(countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CJ"), 1); 
});
});