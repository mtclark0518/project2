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
});