describe('The findItemsOver function', function(){
    it('Should return products that have quantity higher than 27 threshold', function(){
        assert.deepEqual([{"name":"pears","qty":37}], 
        findItemsOver([{"name":"pears","qty":37},
        {"name":"bananas","qty":27}], 27))
        
    });

    it('Should return products that have quantity higher than 37 threshold', function(){
        assert.deepEqual([{"name":"apples","qty":40}], 
          findItemsOver([{"name":"apples","qty":40},
          {"name":"bananas","qty":23},
          {"name":"apples","qty":37}], 37));
    });    
});