describe('The countRegNumber function', function(){
    it('Should returns the number of registration numbers for Stellenbosch in the string', function(){
        assert.equal(countRegNumber("CL 124,CY 567,CL 345, CJ 456,CL 341", "CL"), 5);
    });

    it('Should return the number of registration numbers for Bellville in the string', function(){
        assert.equal(countRegNumber("CL 124, CY 567,CL 345, CJ 456, CL 341", "CY"), 5);
    });
    it('Should return the number of registration numbers for  in the string', function(){
        assert.equal(countRegNumber("CL 124, CY 567,CL 345, CJ 456, CL 341, CY 478"), 6);
});
});
