$(document).ready(function(){
$(".fadeBody").fadeIn(1000);
});


$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#752424");
    });
    $("input").blur(function(){
        $(this).css("background-color","#ADADAD");
    });
    $("textarea").focus(function(){
        $(this).css("background-color", "#752424");
    });
    $("textarea").blur(function(){
        $(this).css("background-color","#ADADAD");
    });
    $("select").focus(function(){
        $(this).css("background-color", "#752424");
    });
    $("select").blur(function(){
        $(this).css("background-color", "#ADADAD");
    });
    $("button").focus(function () {
        $(this).css("background-color", "#752424");
    });
    $("button").blur(function () {
        $(this).css("background-color", "#ADADAD");
    });
});


