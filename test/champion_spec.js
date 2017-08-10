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
        });
    });
    // it("should return an object function(done) {
    //     request(testURL + apiKey, function(err, res, body) {
    //         body = JSON.parse(body);
    //         console.log(body);
    //         expect(res.statusCode).to.equal(200);
    //         done();
    //     
});