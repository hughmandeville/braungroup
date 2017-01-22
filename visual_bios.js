var visual_timer = null;
var poster_timer = null;
var poster_left  = "0px";

$(function() {

    animate_visual();
    visual_timer = setInterval(animate_visual, 24000);

    //animate_posters();
    poster_timer = setInterval(animate_posters, 5000);
});

function animate_posters() {
    if (poster_left == "0px") {
        poster_left = "-300px";
    } else {
        poster_left = "0px";
    }
    $(".posters").animate({
        left: poster_left
    }, 1000);
}

function animate_visual() {
    setTimeout(function() {
        var bg_size = "600px";
        var bg_x = "5px";
        var bg_y = "0px";
        if ($("#visual").width() == "218") {
            bg_size = "436px";
            bg_x = "2px";
            bg_y = "0px";            
        }        
        $("#visual").animate({
            "background-size": bg_size,
            "background-position-x": bg_x,
            "background-position-y": bg_y
        }, 1000, function() {
        });
    }, 4000);
    setTimeout(function() {
        var bg_size = "600px";
        var bg_x = "-300px";
        var bg_y = "0px";
        if ($("#visual").width() == "218") {
            bg_size = "436px";
            bg_x = "-218px";
            bg_y = "0px";            
        }        
        $("#visual").animate({
            "background-size": bg_size,
            "background-position-x": bg_x,
            "background-position-y": bg_y
        }, 1000, function() {
        });
    }, 8000);
    setTimeout(function() {
        var bg_size = "600px";
        var bg_x = "5px";
        var bg_y = "-394px";
        if ($("#visual").width() == "218") {
            bg_size = "436px";
            bg_x = "2px";
            bg_y = "-286px";            
        }        
        $("#visual").animate({
            "background-size": bg_size,
            "background-position-x": bg_x,
            "background-position-y": bg_y
        }, 1000, function() {
        });
    }, 12000);
    setTimeout(function() {
        var bg_size = "600px";
        var bg_x = "-300px";
        var bg_y = "-394px";
        if ($("#visual").width() == "218") {
            bg_size = "436px";
            bg_x = "-218px";
            bg_y = "-286px";            
        }        
        $("#visual").animate({
            "background-size": bg_size,
            "background-position-x": bg_x,
            "background-position-y": bg_y
        }, 1000, function() {
        });
    }, 16000);
    setTimeout(function() {
        var bg_size = "300px";
        var bg_x = "0px";
        var bg_y = "0px";
        if ($("#visual").width() == "218") {
            bg_size = "218px";
            bg_x = "0px";
            bg_y = "0px";            
        }        
        $("#visual").animate({
            "background-size": bg_size,
            "background-position-x": bg_x,
            "background-position-y": bg_y
        }, 1000, function() {
        });
    }, 20000);
}
