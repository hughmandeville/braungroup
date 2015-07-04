var position=0;

$(function() {
    
    $("#box_general_bios").on("click", function() {
        window.open("general_bios.html", "_self");
    });    
    $("#box_executive_bios").on("click", function() {
        window.open("executive_bios.html", "_self");
    });
    $("#box_visual_bios").on("click", function() {
        window.open("visual_bios.html", "_self");
    });

    $("#panel1").on("click", function() {
        $("#visual_cell").animate({
            'background-position-x': 0,
            'background-position-y': 0
        }, 1500);
    });
    $("#panel2").on("click", function() {
        $("#visual_cell").animate({
            'background-position-x': '-368px',
            'background-position-y': 0
        }, 1500);
    });
    $("#panel3").on("click", function() {
        $("#visual_cell").animate({
            'background-position-x': '-6px',
            'background-position-y': '-520px'
        }, 1500);
    });
    $("#panel4").on("click", function() {
        $("#visual_cell").animate({
            'background-position-x': '-370px',
            'background-position-y': '-520px'
        }, 1500);
    });

});


