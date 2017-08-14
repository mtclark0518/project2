var ddragonChampPNG = "https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/";
var ddragonLoadSkinJPG = "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
var $champ_modal;
var $modal_content;

////////////////////
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


//Favorite HTML for favorite list item
function $renderFavorite(champion) {
    // $('.favoite_content').remove();
    var favoriteHTML =
        "<li class='favoite-list-item champion' data-favorite-id='" + champion._id + "'>" +
        "<div class='favorite-body container col-xs-12'>" +

        "<div class='col-xs-1 text-left'>" +
        "<div class='input-group del-fav-input-group text-right'>" +
        "<button id='removeFav' type='submit' class='remove-favorite btn btn-default btn-sm'>" +
        "<span class='glyphicon glyphicon-trash'></span>" +
        "</button>" +
        "</div>" +
        "</div>" +

        "<div class='col-xs-4 text-left'>" +
        "<div class='col-xs-12'>" +
        "<img class='img img-thumb img-responsive' src='" + ddragonChampPNG + champion.key + ".png'>" +
        "</div> " +
        "</div>" +

        "<div class='col-xs-7'>" +

        "<div class='col-xs-3'>" +
        "<h4 class='favorite-name'>" + champion.name + "</h4>" +
        "</div>" +

        "<div class='col-xs-3'>" +
        "<h4 class='favoite-title'>" + champion.title + "</h4>" +
        "</div>" +
        "<div class='col-xs-3'>" +
        "<h4 class='user-rating'> user.rating </h4>" +
        "</div>" +

        "<div class='col-xs-3'>" +
        "<h4 class= ></h4>" +
        "</div>" +


        "</div>" +

        "</div>" +
        "</li>";
    $('#favorite_list').append(favoriteHTML);
}




//CREATES CHAMPION MODAL WHEN USER CLICKS ON A CHAMPION
function $renderModal(champion) {
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

//BASIC ERROR HANDLER FOR USER AJAX CALLS
function handleError(err) {
    return console.log("error: " + err);
}
//USED TO FIND USERS FAVORITE CHAMPS
function foundChamp(champion) {
    console.log(champion.name);
}


//////////////////////////////////
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
                $renderModal(champion);
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
    // function $appendChampToProfile() {
    var $user = $('#current_User')[0].innerHTML;
    var favs = $.get('/api/favorites/' + $user)
        .done(function(data) {
            var champ = data.champion;
            champ.forEach(function(champ) {
                if (champ !== null) {
                    console.log(champ);
                    $renderFavorite(champ);

                }
            });
        });


    //Add a champ to the database
    function $addChampToFavorites(e, champion) {
        e.preventDefault();
        var $creatorId = $('.current_User')[0].innerHTML;
        newFavorite = {
            '_creator': $creatorId,
            'champion': champion
        };
        // AJAX REQUEST TO UPDATE USER FAVORITE LIST IN DATABASE
        $.ajax({
            method: 'PUT',
            data: newFavorite,
            url: "/api/favorites/" + $creatorId,
            failure: function(error) { console.log(error); },
            success: function(data) {
                console.log(data);
                $("#champModal").modal('hide');
                console.log("modal hidden");
                $('.modal_content_wrapper').remove();
            }
        });
    }

    //DELETE A FAVORITE FROM THE USERS FAVORITE LIST
    $('#favorite_list').on('click', '.remove-favorite', function(e) {
        e.preventDefault();
        var $creatorId = $('#current_User')[0].innerHTML;
        var $favToRemove = $(this).parents('.champion')[0].dataset.favoriteId;
        console.log($favToRemove);
        $removeChampFromFavorites($creatorId, $favToRemove);
        var liToRemove = $(this).parents('.champion');
        $(liToRemove).remove();
    });

    //REMOVES CHAMP FROM FAVORITE LIST IN DATABASE
    function $removeChampFromFavorites(user, favorite) {
        console.log(user);
        console.log(favorite);
        $.ajax({
            method: 'delete',
            url: '/api/favorites/' + user + '/' + favorite,
            failure: function(err) { return console.log(err); },
            success: function(data) {
                var champ = data.champion;
                champ.forEach(function(champ) {
                    if (champ !== null) {
                        console.log(champ);
                        // $renderFavorite(champ);
                    }
                });
            }

        });
    }

    // var userDataReqURL = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/';
    // var user_sum_name = $('#sum_name')[0].innerHTML;
    // console.log(user_sum_name);
    // var $userData = $.ajax({
    //     method: 'get',
    //     url: userDataReqURL + user_sum_name,
    //     headers: {
    //         "Access-Control-Allow-Origin": "https://localhost:3000",
    //         "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    //         "X-Riot-Token": "RGAPI-e695f795-8cd6-47c5-ae4b-b63060e1ab6d",
    //         "Accept-Language": "en-US,en;q=0.8",
    //         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36"
    //     },
    //     failure: function(err) { if (err) return console.log(err); },
    //     success: function(data) {
    //         console.log(data);
    //         res.send('sucess');
    //     }
    // });


}); //<--CLOSES DOCUMENT.READY