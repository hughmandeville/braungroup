var visual_timer = null;
var poster_timer = null;
var poster_left  = "0px";

$(function() {

    //animate_posters();
    poster_timer = setInterval(animate_posters, 5000);
});

function animate_posters() {
    if (poster_left == "0px") {
        poster_left = "-300px";
    } else if (poster_left == "-300px") {
        poster_left = "-600px";
    } else {
        $(".posters").css("left", 0);
        poster_left = "-300px";
    }
    $(".posters").animate({
        left: poster_left
    }, 1000);
}
