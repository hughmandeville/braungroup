var popup_state = "hidden";

$(function() {

    $("#number").click(function(){
        if (popup_state == "hidden") {
            $("#popup").show();
            popup_state = "shown";
        } else {
            $("#popup").hide();
            popup_state = "hidden";
        }
    });
    $("#popup").click(function(){
        $("#popup").hide();
        popup_state = "hidden";
    });

});
