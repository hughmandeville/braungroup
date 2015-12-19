$(function() {
    $("area").click(function(e){
        $("#module_endnote_text").html($(this).data("endnote"));        
        $("#module_endnote").css("top", e.pageY - 40);
        $("#module_endnote").css("left", e.pageX + 40);        
        $("#module_endnote").show();
    });
    
    $("#module_endnote").click(function(){
        $("#module_endnote").hide();
    });
});
