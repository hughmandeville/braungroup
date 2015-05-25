// size of slide images.  they all need to be the same
var slide_image_width = 800;
// index of current image
var current_image_index = 0;
// whether to run slide show
var slide_show_on = true;
var slide_show_timer = null;
// list of slide images
var slide_images = [
{
    "src"     : "http://braungroupllc.com/new/images/books1.jpg",
    "title"   : "",
    "author"  : "",  
    "caption" : ""
},
{
    "src"     : "http://braungroupllc.com/bgroup/wp-content/uploads/2013/12/ames_01_800x280.jpg",
    "title"   : "Lucky Breaks: A Memoir",
    "author"  : "by Chuck Ames",
    "caption" : "I started and ended everything I did with a simple, common sense approach."
},
{
    "src"     : "http://braungroupllc.com/bgroup/wp-content/uploads/2013/12/matloff_01_800x280.jpg",
    "title"   : "Circles of Life",
    "author"  : "by Jack Matloff",  
    "caption" : "Loving the patient was what mattered."
},
{
    "src"     : "http://braungroupllc.com/bgroup/wp-content/uploads/2014/11/colormatrix_800x280.jpg",
    "title"   : "Living in Color",
    "author"  : "by John Haugh and Mike Shaughnessy",  
    "caption" : "We loved each other like brothers."
},
{
    "src"     : "http://braungroupllc.com/bgroup/wp-content/uploads/2013/12/gentles_01_800x280.jpg",
    "title"   : "Opportunity of a Lifetime",
    "author"  : "by Roy Gentles", 
    "caption" : "I failed often, but on occasion (and that’s all it takes), I succeeded."
}
];

$(function() {
    // set the slide div width based on number images times width of each image
    $("#slide_div").css("width", slide_images.length * slide_image_width);
    // set first title and caption
    var slide_image = slide_images[0];    
    $("#slide_title").html(slide_image['title']);
    $("#slide_author").html(slide_image['author']);
    $("#slide_caption").html(slide_image['caption']);
    // add images and dots
    var dot_selected_class = " dot_selected";
    for (var i=0;i<slide_images.length;i++) {
        slide_image = slide_images[i];					    
        $("#slide_div").append("<img class='slide_img' src='" + slide_image["src"] + "'/>");
        $("#slide_dots").append("<span class='slide_dot" + dot_selected_class + "' data-index='" + i + "'>&bull;</span> ");
        dot_selected_class = "";
    }
    // when a dot is clicked slide to correct picture and set title and caption
    $(".slide_dot").on("click", function() {
         var i = $(this).data("index");
         slide_show_on = false;
         goto_image(i);
    });
    slide_show_timer = window.setInterval(goto_next_image, 6000);
});
function goto_next_image() {
    if (slide_show_on == false) {
        if (slide_show_timer != null) {
            clearInterval(slide_show_timer);
            slide_show_timer = null;					    
        }
        return;
    }
    current_image_index++;
    if (current_image_index >= slide_images.length) {
        current_image_index = 0;
    }
    goto_image(current_image_index);
}
function goto_image(i) {
    var slide_image = slide_images[i];
    var left_margin = i * slide_image_width;
    $("#slide_title").html(slide_image['title']);
    $("#slide_author").html(slide_image['author']);
    $("#slide_caption").html(slide_image['caption']);
    $(".slide_dot").removeClass("dot_selected");
    $(".slide_dot[data-index='" + i + "']").addClass("dot_selected");
    $("#slide_div").animate({"margin-left":"-" + left_margin + "px"}, 1000);
}
