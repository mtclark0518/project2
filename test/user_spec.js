var expect = require('chai').expect,
    request = require('request');

var appURL;


describe("User", function() {
    describe("Constructor", function() {
        var testUser = new User();
    })
    testURL = "https://mighty-woodland-27297.herokuapp.com/;
    it("should return a status of 200", function(done) {
        request(testURL + apiKey, function(err, res, body) {
            body = JSON.parse(body);
            console.log(body);
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
});