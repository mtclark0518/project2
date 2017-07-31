
var $login = $("#sign-in-btn");
var $register = $("#sign-up-btn");

$(document).ready(function () {
    console.log("hello world");




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

    // $register.click(function (event) {
    //     event.preventDefault();
    //     $.ajax({
    //         method: "post",
    //         url: www.google.com,
    //         data: userString
    //     });
    // });



});