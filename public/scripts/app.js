var ddragonChampPNG = "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/";
var ddragonLoadSkinJPG = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";




function $renderChampion(champion) {
    var championHTML = 

    "<div class='col-xs-12 col-sm-6 col-lg-4 champion' data-champion-id='" + champion._id + "'>" +
            "<div class='container-fluid list-group-item'>" +
                    
                       
                        "<div class='col-xs-4 col-sm-5 champion-sprite'>" +
                            "<img class='champ-img-small img-responsive img-thumbnail' src= '" + ddragonChampPNG + champion.key + ".png'>"    + 
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





function $renderModal(champion){
    var modalHTML = 

"<div class='modal-header'>" +
    "<button type='button' class='btn btn-xs close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
    "<h4 class='modal-title'>Champion Name</h4>" +
"</div>" +

"<form id='addToFavs' method='post' action='/login' class='form-horizontal'>" +
"<div class='container'>" +
"<div class='col-xs-10 col-xs-offset-1'>" +
"<div class='row'>" +
"<div class='col-xs-4 col-xs-offset-1 text-center'>" +
"<h1 class='page-name'>Champion</h1>" +
"</div>" +
"</div>" +


"<div class='row'>" +
"</div>" +
"</div>" +

"</div>" +
"</form>" +




"<!-- CHAMPION PROFILE IMAGE-->" +
"<div class='form-group col-xs-2'>" +
    "<div class='champ_profile_img col-xs-12'>" +
"<img class='img img-responsive' src='http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+ champion.key + "_0.jpg'>" +
"</div> " +
"</div>" +


<!-- CHAMPION INPUTS -->
<div class="col-xs-6">
<div class="input-group">
<input type="text" class="sr-only form-control" value="Champion">
<span class="input-group-btn">
<button id="addChamp" class="btn btn-default" type="button">
<span class="glyphicon glyphicon-plus-sign">
<!-- glyphicon-minus-sign  (remove favorite) -->
</span>
</button>
</span>
</div><!-- /input-group -->                                 
</div>




    $('#champion_modal').append(modalHTML);
}





$(document).ready(function () {
    console.log("hello world");



    //LAUNCH CHAMPION MODAL 
    $('#champions').on('click', '.champ-img-small', function(e) {
        
        var $champion = $(this).parents('.champion').data('champion-id');
        var $creator = $('#current_User')[0].innerHTML;
        // $renderModal(e, $champion);
        var $champ_modal = $('#champModal').data('champion-id', $champion);



        console.log($champion);

        $champ_modal.modal();
        $renderModal();
        //CLICK EVENT TO ADD CHAMPION TO FAVORITE LIST
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

        
    function $appendChampToProfile(data){
        var updatedFavoriteList = data;
        console.log(data);
        for(var i; i < updatedFavoriteList.length; i++){
            console.log(updatedFavoriteList[i]);
    }

    }

    //ADD CHAMPIONS TO CURRENT USER'S FAVORITE LIST
    function $addChampToFavorites(e) {
        e.preventDefault();
        var $creatorId = $('#current_User')[0].innerHTML;
        var $champ = $('#champModal').data('champion-id');
        var newFavorite = {
            '_creator' : $creatorId,
            '_champion' : $champ
        };
        console.log(newFavorite);

        // AJAX PUT REQUEST TO THE LIST
        $.ajax({
            method: 'PUT',
            url: "/api/favorites/"+$creatorId,
            data: newFavorite,
            failure: function(error) {console.log(error);},
            success: function(data){
                $("#champModal").modal('hide');
                console.log("modal hidden");
                $appendChampToProfile(data);
            }
        });
    }


});
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

    // $()
    // $.ajax({
    //     method: 'get',
    //     url: '/api/favorites/' + _id,
    //     failure: function(error){console.log("error: " + error);},
    //     done: function(data){
    //         console.log(data + "is the data from the request");
    //     }

    // });
    // favoriteList.push(champion);
    // console.log(favoriteList);
    // var $profileList = $('#favorite_list');


            // var listDiv = document.getElementById('favorite_list');

        // console.log(listDiv);

        // $('<li>').append(updatedFavoriteList[i]);

    
