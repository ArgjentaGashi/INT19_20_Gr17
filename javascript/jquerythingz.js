
$(document).ready(function () {
    $(".fadeBody").fadeIn(1000);

    $("input").focus(function () {
        $(this).css("background-color", "#752424");
    });
    $("input").blur(function () {
        $(this).css("background-color", "#ADADAD");
    });
    $("textarea").focus(function () {
        $(this).css("background-color", "#752424");
    });
    $("textarea").blur(function () {
        $(this).css("background-color", "#ADADAD");
    });
    $("select").focus(function () {
        $(this).css("background-color", "#752424");
    });
    $("select").blur(function () {
        $(this).css("background-color", "#ADADAD");
    });
    $("button").focus(function () {
        $(this).css("background-color", "#752424");
    });
    $("button").blur(function () {
        $(this).css("background-color", "#ADADAD");
    });
});


$(document).ready(function () {
    $("#btn1").click(function () {
        $("ol").append("<li><a href=\"interieri/dhoma_punes_produktet/dhp_produkti1.html\">Araceli</a></li>",
            "<li><a href=\"interieri/dhoma_dites_produktet/dhd_produkti2.html\">Valebeck</a></li");
    });

    $("#btn2").click(function () {
        $("ol").prepend("<li><a href=\"interieri/dhoma_gjumit_produktet/dhgj_produkti2.html\">Mattress</a></li>",
            "<li><a href=\"interieri/kuzhina_produktet/produkti1.html\">Kitchen Reno</a></li");
    });
});




$(document).ready(function(){
  
    $("#zvogelo").click(function(){
      var div=$(".zoomin");
      div.animate({height:'300px',opacity:'0.4'},"slow");
      div.animate({width:'300px',opacity:'0.8'},"slow");
      div.animate({height:'100px',opacity:'0.4'},"slow");
      div.animate({width:'100px',opacity:'0.8'},"slow");
    });
  });