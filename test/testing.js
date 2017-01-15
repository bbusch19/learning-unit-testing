var assert = chai.assert;

describe('myVar', function() {

    it('Should exist', function() {
        assert.notEqual(myVar, undefined, 'myVar should exist');
    })

    it ('Should be a string', function() {
        assert.equal(typeof myVar, 'string', 'myVar should be a string')
    })

    it('Should have the correct value', function() {
        assert.equal(myVar, 'JavaScript is cool!', 'myVar should equal "JavaScript is cool!"')
    })

})

describe('copyCat', function() {

    it('Should exist', function() {
        assert.notEqual(copyCat, undefined, 'myVar should exist');
    })

    it ('Should be a string', function() {
        assert.equal(typeof copyCat, 'string', 'myVar should be a string')
    })

    it('Should have the correct value', function() {
        assert.equal(copyCat, myVar, 'copyCat should equal myVar')
    })

})

describe('myArray', function() {

    it('Should exist', function() {
        assert.notEqual(myArray, undefined, 'myArray should exist');
    })

    it('Should be an array', function() {
        assert.isOk(Array.isArray(myArray), 'myArray should be an array');
    })

     it('Should be empty', function() {
         assert.equal(myArray.length, 0, 'myArray should have a length of 0');
     })

});

describe('car', function() {

    it('Should exist', function() {
        assert.notEqual(car, undefined, 'car should exist');
    })

    it('Should be an object', function() {
        assert.equal(typeof car, 'object', 'car should be an object');
    })

     it('Should have a make property of Honda', function() {
         assert.equal(car.make, 'Honda', 'car should have a make property === Honda');
     })

     it('Should have a model property of Accord', function() {
         assert.equal(car.model, 'Accord', 'car should have a model property === Accort')
     })

});

describe('first', function() {

    it('Should exist', function() {
        assert.notEqual(first, undefined, 'first should exist');
    })

    it('Should be a function', function() {
        assert.equal(typeof first, 'function', 'first should be a function');
    })

     it('Should return the first element of an array', function() {
         var testArray = [1, 2, 3];
         var testReturn = first(testArray);
         assert.equal(testReturn, 1, 'Should return the first element')
     })

});
