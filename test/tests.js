/**
 * Please use the file "js/functions.js" for your functions.
 *
 */


describe('Test Suite - Guess Game Funnctions', () => {

    it('The generateANumber function should generate numbers randomly.', function(){
        let result1 = generateANumber();
        let result2 = generateANumber();
        result1.should.not.be.equal(result2);
    });
    
    
    it('All parameters should be reset.', function(){
        resetGame();
        currentStep.should.be.equal(1);
        currentStep.should.not.be.equal(5);
    });
      
});