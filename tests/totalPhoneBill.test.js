describe('The totalPhoneBill function', function(){
    it('Should Calculate the total bill per sms,  each sms cost R0,65.', function(){
        assert.equal('R0.65', totalPhoneBill('sms'));
    });
    it('Should Calculate the total bill per call,  each call cost R2.75.', function(){
        assert.equal('R2.75', totalPhoneBill('call'));
});
it('Should Calculate the total bill for 2 sms,  each sms cost R0,65.', function(){
    assert.equal('R1.30', totalPhoneBill('sms, sms'));  
});
it('Should Calculate the total bill for 3 sms, and 2 calls  each sms cost R0,65 and each call cost R2.75', function(){
    assert.equal('R7.45', totalPhoneBill('sms, sms, sms, call, call'));
});
});