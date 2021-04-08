describe('The isWeekday function', function(){
    it('Should return true if the day fall under weekdays using startsWith method', function(){
        assert.equal(true, isWeekday('M'));
    });
    it('Should return false if the day doesnt fall under days of the week using startsWith', function(){
        assert.equal(false, isWeekday('S'));

});
});