var expect = require('chai').expect,
	request = require('request');

var apiKey = require('../apikey.js');
var testURL;


describe("champion", function(){
	testURL = "https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false&api_key=";
	it("should return a status of 200", function(done){
		request(testURL+apiKey, function(err,res,body){
			body = JSON.parse(body);
			console.log(body);
			expect(res.statusCode).to.equal(200);
			done();
		});
	});
});

