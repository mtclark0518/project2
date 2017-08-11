var expect = require('chai').expect,
    Champion = require('../models/champion')


describe("Champion", function() {
    var testChamp;
    before(function() {
        testChamp = new Champion({
            name: 'testChamp',
            key: 'testChamp'
        });
    });

    describe('new', function() {
        it('creates a new champion instance', function() {
            expect(typeof(testChamp)).to.equal('object');
        });
    });

    describe('name', function() {
        it('should allow reading and writing of name property', function() {
            expect(typeof(testChamp.name)).to.equal('string');
        });
    });

    describe('key', function() {
        it('should equal the same thing as the name', function() {
            expect(testChamp.key).to.equal(testChamp.name);
        })
    });
});