
var $login = $("#sign-in-btn");
var $register = $("#register-btn");
// var db = require('../models');


function renderUser(user) {
    var userHtml = "";
}

// var currentUser = db.User.find({}, function(err, user) {
//     return user.summoner_name;
// });
// var $userData = $.ajax({
//         method: "GET",
//         url: "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/"+ currentUser,
//         headers: {
//             "Origin": "https://developer.riotgames.com",
//             "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
//             "X-Riot-Token": "RGAPI-260b64e5-95d3-4545-a18d-3f4ada31dc8e",
//             "Accept-Language": "en-US,en;q=0.8",
//             "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36"
//         },
//         failure: function(err) {
//             return console.log("error: "+ err);
//         },
//         success: function(data){
//             res.send(json);
//             console.log(json);
//         }


function renderChampion(champion) {
    var championHTML = 

    "<div class='col-xs-6 col-md-4'>"    + 
        "<div class='row'>"    + 
            "<div class='col-xs-12 col-md-6 thumbnail champion-sprite'>"    + 
                "<img src='" +  "http://placehold.it/400x400"  + "'>"    + 
            "</div>"    + 
            "<div class='col-xs-12 col-md-6'>"    + 
               " <ul class='list-group'>"    + 
                    "<li class='list-group-item'>"    + 
                        "<h5 class='inline-header'>Name:</h5>"    + 
                        "<span class='champion-name'>" + champion.name + "</span>"    + 
                    "</li>"    + 
                    "<li class='list-group-item'>"    + 
                        "<span class='champion-title'>" + champion.title + "</span>"    + 
                    "</li>"    + 
                "</ul>"    + 
            "</div>"    + 
        "</div>"    + 
    "</div>";    

    $('#champions').append(championHTML);
}



$(document).ready(function () {
    console.log("hello world");




//AJAX
    var champions = $.get('/api/champions')
        .done(function (data) {
            var parsedChampion = JSON.parse(champions.responseText);
            for (var i = 0; i < parsedChampion.length; i++) {
                renderChampion(parsedChampion[i]);
            }
        });

        

});













// $register.click(function (event) {
    //     console.log("click");
    //     $.ajax({
    //         method: "get",
    //         url: "/signup",
    //         success: function(){
    //             console.log('success');
    //         }
    //     });
    // });
