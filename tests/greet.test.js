describe('The greet function', function(){
    it('Should greet Janine properly' , function(){
        assert.equal('Hello, Janine', greet('Janine'));
    });



    it('Should greet Jade in a correct way' , function(){
        assert.equal('Hello, Jade', greet('Jade'));
    });


    it('Should greet Okuhle in a proper manner' , function(){
        assert.equal('Hello, OKuhle', greet('OKuhle'));
    });
});


