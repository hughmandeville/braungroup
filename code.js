var num_dots = 0;
var cur_dot = 0;

var timer = null;
var show_text_timeout = null;
var hide_text_timeout = null;
var slide_book_timeout = null;


$(function() {
    setup_slider_dots();
    preload_images();
    
    $("#bars").on("click", function() {
        $("#menu").slideToggle("slow");
    });    
});

function setup_slider_dots() {
    var html_str = "";
    num_dots = books.length;

    for (i = 0; i < books.length; i++) { 
        html_str += "<span class='dot' data-id='" + i + "'>&bull;</span> ";
    }
    $("#slider_dots").html(html_str);

    timer = setInterval(next_book, 9000);
    
    $(".dot").on("click", function() {
        // stop slider animation if someone clicks on a dot
        clear_timers();
        update_book($(this).data("id"), false);
    });

    update_book(0);    
    $("#book_slider").on("swipeleft", function() {
        // stop slider animation if someone swipes
        clear_timers();
        next_book();
    });
    $("#book_slider").on("swiperight", function() {
        // stop slider animation if someone swipes
        clear_timers();
        prev_book();
    });
        
}

function clear_timers() {
    if (timer != null) {
        clearInterval(timer);
        timer = null;
    }
    if (show_text_timeout != null) {
        clearTimeout(show_text_timeout);
        show_text_timeout = null;
    }
    if (hide_text_timeout != null) {
        clearTimeout(hide_text_timeout);
        hide_text_timeout = null;
    }
    if (slide_book_timeout != null) {
        clearTimeout(slide_book_timeout);
        slide_book_timeout = null;
    }
}

function next_book() {
    cur_dot++;
    if (cur_dot >= books.length) {
        cur_dot = 0;
    } else if (cur_dot < 0) {
        cur_dot = (books.length - 1);
    }
    update_book(cur_dot);
}
function prev_book() {
    cur_dot--;
    if (cur_dot >= books.length) {
        cur_dot = 0;
    } else if (cur_dot < 0) {
        cur_dot = (books.length - 1);
    }
    update_book(cur_dot);
}
function update_book(i) {
    if (i >= books.length) {
        i = 0;
    } else if (i < 0) {
        i = (books.length - 1);
    }
    cur_dot = i;

    var book = books[i];

    
    $(".dot").removeClass("selected");
    $(".dot[data-id=" + i + "]").addClass("selected");

    // only slide text in from left if browser width >= 1020px
    if ($(window).width() >= 1020) {
        $("#book_text").css("color", "transparent");
    }

    $("#book_image").removeClass("book_blur");
    $("#book_title").html(book['title']);
    $("#book_byline").html(book['byline']);
    $("#book_category").html(book['category']);
    if (book['quote'] == "") {
        $("#book_quote").html(book['text']);
    } else {
        $("#book_quote").html("<i>&ldquo;" + book['quote'] + "&rdquo;</i>");
    }

    $("#book_image").css("background-image", "url('images/" + book['image'] + "')");

    if ($(window).width() >= 1020) {
        show_text_timeout = setTimeout(show_text, 1400, i);
    } else {
        show_text(i);  // XXX: could slide left
    }
    hide_text_timeout = setTimeout(hide_text, 7500, i);
    slide_book_timeout = setTimeout(slide_in_new_book, 8000, i);
}

function show_text(i) {
    var book = books[i];

    // only blur if browser width >= 1020px
    if ($(window).width() >= 1020) {
        $("#book_image").css("background-image", "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('images/" + book['image'] + "')");
        $("#book_image").addClass("book_blur");
    }
    
    if ($(window).width() >= 1020) {
        $( "#book_text" ).animate({
            color: "#ffffff"
        }, 700, function() {
        });
    }
}
function slide_in_new_book(i) {
    var book = books[0];
    if ((i+1) < books.length) {
        book = books[i+1];
    }
    $("#book_image2").css("background-image", "url('images/" + book['image'] + "')");
    $( "#book_image2" ).animate({
        left: "0px"
    }, 1000, function() {
        if ($(window).width() >= 1020) {
            $("#book_image2").css("left", "300px");
        } else {
            $( "#book_image2" ).css("left", "218px");            
        }
    });
    
    if ($(window).width() >= 1020) {                
        $( "#book_image" ).animate({
            left: "-300px"
        }, 1000, function() {
            $( "#book_image" ).css("left", "0px");
        });
    } else {
        $( "#book_image" ).animate({
            left: "-218px"
        }, 1000, function() {
            $( "#book_image" ).css("left", "0px");
        });
    }
}


function hide_text(i) {
    var book = books[i];
    if ($(window).width() >= 1020) {
        $( "#book_text" ).animate({
            color: "transparent"
        }, 700, function() {
        });
    }
}

function preload_images() {
    var images = new Array()
    for (i = 0; i < books.length; i++) {
       var book = books[i];
	    images[i] = new Image()
	    images[i].src = "images/" + book['image'];
    }
}
