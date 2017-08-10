var expect = require('chai').expect,
    Champion = require('../models/champion')


describe("Champion", function() {
    var testChamp;
    before(function() {
        testChamp = new Champion();
    });
    describe('new', function() {
        it('creates a new champion instance', function() {
            expect(typeof(testChamp)).to.equal('object');
            done();
        });
    });

    describe('key', function() {
        it('should allow reading and writing of key property', function() {
            expect(typeof(testChamp.key)).to.equal(string);
            done();
        });
    });
});