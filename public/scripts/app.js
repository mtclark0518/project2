var ddragonChampPNG = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/";
var ddragonLoadSkinJPG = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
var favoriteList = [];


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


function $renderChampion(champion) {
    var championHTML = 

    "<div class='col-xs-12 col-sm-6 col-lg-4 champion' data-champion-id='" + champion._id + "'>" +
            "<div class='container-fluid list-group-item'>" +
                    
                       
                        "<div class='col-xs-4 col-sm-5 champion-sprite'>" +
                            "<img class='champ-img-small img-responsive img-thumbnail' src= '" + ddragonChampPNG + champion.key + ".png'>"    + 
                        "</div>" +
                        "<div class='col-xs-7 col-sm-6'> " +
                            "<ul>  " +
                                "<li class='list-item'>" +
                                    "<span class='champion-name'><b>" + champion.key + "</b></span>  " +
                                "</li>" +
                                "<li class='list-item'>  " +
                                    "<span class='champion-title'>" + champion.title + "</span> " +
                                "</li>" +
                            "</ul>" +
                        "</div>" +
            "</div> " +
    "</div>";   

    $('#champions').append(championHTML);
}

function $appendChampToProfile(champion){

    console.log(champion);
    // favoriteList.push(champion);
    // console.log(favoriteList);
    // var $profileList = $('#favorite_list');
    
}

function $addChampToFavorites(e) {
    e.preventDefault();
    // $.get('.//')
    var $creator = $('#current_User')[0].innerHTML;
    var $champ = $('#champModal').data('champion-id');
    var newFavorite = {
        '_creator' : $creator,
        '_champion' : $champ
    };

    console.log(newFavorite);

    // AJAX PUT REQUEST TO THE LIST
    $.ajax({
        method: 'PUT',
        url: "/api/favorites/"+$creator,
        data: newFavorite,
        failure: function(error) {console.log(error);},
        success: function($champ){
            $("#champModal").modal('hide');
            console.log("modal hidden");
            $appendChampToProfile($champ);
        }
    });
}



$(document).ready(function () {
    console.log("hello world");



    //ACTIVATE CHAMPION MODAL
    $('#champions').on('click', '.champ-img-small', function(e) {
        var $champion = $(this).parents('.champion').data('champion-id');
        console.log($champion);
        var $creator = $('#current_User')[0].innerHTML;
        // console.log($user);

        var $champ_modal = $('#champModal').data('champion-id', $champion);
        $champ_modal.modal();
        $champ_modal.on('click', '#addChamp', function(e) {
            $addChampToFavorites(e);
        });
    });

    //AJAX GET CHAMPIONS
    var champions = $.get('/api/champions')
        .done(function (data) {
            var parsedChampion = JSON.parse(champions.responseText);
            for (var i = 0; i < parsedChampion.length; i++) {
                $renderChampion(parsedChampion[i]);
            }
        });

        




});


