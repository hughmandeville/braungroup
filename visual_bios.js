$(function() {
    animate_visual();
    timer = setInterval(animate_visual, 24000);
});

function animate_visual() {
    setTimeout(function() {
        $("#visual").animate({
            "background-size": "600px",
            "background-position-x": "10px",
            "background-position-y": "0px"
        }, 1000, function() {
        });
    }, 4000);
    setTimeout(function() {
        $("#visual").animate({
            "background-size": "600px",
            "background-position-x": "-300px",
            "background-position-y": "0px"
        }, 1000, function() {
        });
    }, 8000);
    setTimeout(function() {
        $("#visual").animate({
            "background-size": "600px",
            "background-position-x": "0px",
            "background-position-y": "-394px"
        }, 1000, function() {
        });
    }, 12000);
    setTimeout(function() {
        $("#visual").animate({
            "background-size": "600px",
            "background-position-x": "-300px",
            "background-position-y": "-394px"
        }, 1000, function() {
        });
    }, 16000);
    setTimeout(function() {
        $("#visual").animate({
            "background-size": "300px",
            "background-position-x": "0px",
            "background-position-y": "0px"
        }, 1000, function() {
        });
    }, 20000);
}
