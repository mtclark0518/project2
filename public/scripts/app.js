const ddragonChampPNG = "https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/";
const ddragonLoadSkinJPG = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
var $champ_modal;
var $modal_content;


// HTML STRING BUILDS
/////////////////////

//ADDS CHAMPION IMAGES TO CHAMPION PAGE
function $renderChampion(champion) {
    var championHTML =

        "<div class='col-xs-12 col-sm-6 col-lg-4 champion' data-champion-id='" + champion._id + "'>" +
        "<div class='container-fluid list-group-item'>" +

        "<div class='col-xs-4 col-sm-5 champion-thumb'>" +
        "<img class='champ-img-small img-responsive img-thumbnail' src= '" + ddragonChampPNG + champion.key + ".png'>" +
        "</div>" +

        "<div class='col-xs-7 col-sm-6'> " +
        "<ul class='champ-cards text-center'>  " +
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


//CREATES CHAMPION MODAL WHEN USER CLICKS ON A CHAMPION
function $renderModal(champion, creator) {
    $('.modal_content_wrapper').remove();
    var modalHTML =

        "<div class='modal-body container col-xs-10 col-xs-offset-1'>" +

        "<div class='col-xs-5 text-left'>" +
        "<div class='champ_profile_img col-xs-12'>" +

        "<div class='input-group fav-input-group text-right'>" +
        "<button id='addToFavs' type='submit' class='btn btn-default btn-sm'>" +
        "<span class='glyphicon glyphicon-heart'></span>" +
        "</button>" +
        "</div>" +

        "<img class='img img-responsive' src='https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + champion.key + "_0.jpg'>" +
        "</div> " +
        "</div>" +




        "<div class='col-xs-7'>" +
        "<div class='row'>" +
        "<h4 class='modal-title page-title'>" + champion.name + "</h4>" +
        "</div>" +
        "<div class='row'>" +
        "<h4 class='modal-body-content'>" + champion.title + "</h4>" +
        "</div>" +
        "</div>" +

        "</div>";

    $modal_content = $('<div>').addClass('modal_content_wrapper').append(modalHTML);
    $('#champion_modal').append($modal_content);
    console.log($modal_content);
}


//DOCUMENT READY STATEMENT
////////////////////////////////
$(document).ready(function() {
    console.log("hello world");

    //LAUNCH CHAMPION MODAL 
    $('#champions').on('click', '.champ-img-small', function(e) {
        var $champion = $(this).parents('.champion').data('champion-id');
        $champ_modal = $('#champModal').data('champion-id', $champion);
        var $creator = $('.current_User')[0].innerHTML;
        $.ajax({
            method: 'get',
            url: '/api/champions/' + $champion,
            failure: function(err) { return console.log("error: " + err); },
            success: function(champion) {
                console.log(champion);
                $renderModal(champion, $creator);
                $champ_modal.modal();
                //CLICK EVENT TO ADD CHAMPION TO FAVORITE LIST
                $champ_modal.on('click', '#addToFavs', function(e) {
                    $addChampToFavorites(e, champion);
                });
            }
        });
    });

    //AJAX GET CHAMPIONS AND SEND TO BE RENDERED ON THE PAGE
    var champions = $.get('/api/champions')
        .done(function(data) {
            var parsedChampion = JSON.parse(champions.responseText);
            for (var i = 0; i < parsedChampion.length; i++) {
                $renderChampion(parsedChampion[i]);
            }
        });

    //ADD CHAMPIONS TO CURRENT USER'S FAVORITE LIST
    function $addChampToFavorites(e, champion) {
        e.preventDefault();
        var $creatorId = $('.current_User')[0].innerHTML;
        var newFavorite = {
            '_creator': $creatorId,
            'champion': champion
        };
        // AJAX REQUEST TO UPDATE USER FAVORITE LIST
        $.ajax({
            method: 'PUT',
            data: newFavorite,
            url: "/api/favorites/" + $creatorId,
            failure: function(error) { console.log(error); },
            success: function(data) {
                $("#champModal").modal('hide');
                console.log("modal hidden");
                $appendChampToProfile(data);
            }
        });
    }

    //AJAX REQUEST TO COMPILE USERS FAV CHAMPS AND SEND TO THE BROWSER       
    function $appendChampToProfile(data) {
        var updatedFavoriteList = data;
        for (var i; i < updatedFavoriteList.length; i++) {
            $.ajax({
                method: 'get',
                url: '/api/champions/' + updatedFavoriteList[i],
                failure: handleError(),
                success: foundChamp(champion)
            });
        }
    }
    //BASIC ERROR HANDLER FOR USER AJAX CALLS
    function handleError(err) {
        return console.log("error: " + err);
    }
    //USED TO FIND USERS FAVORITE CHAMPS
    function foundChamp(champion) {
        console.log(champion.name);
    }

    //DELETE A FAVORITE FROM THE USERS FAVORITE LIST
    $('#favorite_list').on('click', '.remove-favorite', function(e) {
        var $user = $('.current_User')[0].innerHTML;
        var favToRemove = $(this).parents('.favorite-list-item');
        favToRemove
        console.log($user);
        console.log(favToRemove);
        $.ajax({
            method: 'delete',
            url: '/api/favorites/' + $user + '/' + favToRemove,
            failure: function(err) { return console.log("error: " + err); },
            success: function(e) {
                $removeChampFromFavorites(e);
            }
        });
    });

    function $removeChampFromFavorites(e) {
        console.log('done');
    }


}); //<--CLOSES DOCUMENT.READY

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