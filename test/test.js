var assert = require('assert');
var linearTests = require('../linearPoint.js');

describe("User Tests", function() {
    
    it("2, 1, 4", function () {
        assert.equal(linearTests.linearPointFunc(2, 1, 4), 6);
    });
    
    it("2, 0, 4", function () {
        assert.equal(linearTests.linearPointFunc(2, 0, 4), 4);
    });
    
    it("2, -1, 4", function () {
        assert.equal(linearTests.linearPointFunc(2, -1, 4), 2);
    });
})