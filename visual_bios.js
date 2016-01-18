$(function() {
    animate_visual();
    timer = setInterval(animate_visual, 24000);
});

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
