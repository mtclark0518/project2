
var $login = $("#sign-in-btn");
var $register = $("#register-btn");

$(document).ready(function () {
    console.log("hello world");


    $register.click(function (event) {
        console.log("click");
        $.ajax({
            method: "get",
            url: "/signup",
            success: function(){
                console.log('success');
            }
        });
    });

    $login.click(function (event) {
        event.preventDefault();
        console.log("button clicked");
        $.ajax({
            method: "get",
            url: 'http://localhost:3000/profile',
            success: function () {
                console.log("success");
            }
        });
    });



});