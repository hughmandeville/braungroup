var books = [
{"title": "Little Did We Know", 
 "byline": "by John R. Miller",
 "image": "book_cover_little_did_we_know.jpg",
 "category": "Executive Memoir",
 "quote": "This is a great story about American enterprise at the cutting edge. Too often we do not get such a clear and personal view of the challenges associated with major innovations. Mr. Miller was fortunate to be in an industry at a dynamic period of opportunity, and we are fortunate that he has shared his story with us.",
 "quote2": "This is a very readable look into the workings of corporate finance. The author managed to explain technical subject matter with a simple, clear style and a touch of humor. I read the book with a bit of nostalgia for an America that was not afraid to do great things in the face of seemingly insurmountable odds.",
 "text": "The remarkable story about building and financing the Trans Alaska Pipeline as told by John Miller, the finance professional who raises more than $6 billion to pay for the Standard Oil Company of Ohio’s portion of the Alaskan venture."
},

{"title": "Gumption and Gusto", 
 "byline": "by Neil Ruddock",
 "image": "book_cover_gumption_and_gusto.jpg",
 "category": "General Biography",
 "quote": "Betty’s amazing life and Neil’s warm and loving personality shine through. I hope my children learn from Betty.",
 "text": "When Betty Kidder Ruddock was three, her mother died of diphtheria. Then her father lost his job, succumbed to alcoholism, and was unable to support his family. By age eight, Betty was living with strangers in a boarding house near Akron, Ohio, begging for food and making money by picking strawberries. Betty’s husband tells her story of human resilience, forgiveness, and joy."
},

{"title": "Five Generations", 
 "byline": "by Bob Gries",
 "image": "book_cover_five_generations.jpg",
 "category": "General Biography",
 "quote": "Completely ignoring journalistic objectivity here, this could be the most interesting free book you ever read.",
 "text": "Philanthropist and investor Bob Gries tells the remarkable stories of five generations of his family, from Simson Thorman, who arrived in Cleveland, Ohio, in the 1830s and became the city’s first Jewish settler, to the founders of May Company and the Cleveland Browns football team. Love of Cleveland is a life theme for Gries and his ancestors."
},

{"title": "Life With Ham", 
 "byline": "by Terry Biggar",
 "image": "book_cover_life_with_ham.jpg",
 "category": "General Memoir",
 "quote": "Ham’s book is magical. I brought it up to bed last night to read for a minute or two. Nearly two hours later, I could barely put it down.",
 "text": "Friends and family pay tribute to Ham Biggar by recalling his many adventures playing squash, hunting, and building restaurants and night clubs in and around Cleveland. Each vignette beats with love for the man and his passion for life."
},

{"title": "Three Families", 
 "byline": "by Allen Ford",
 "image": "book_cover_three_families.jpg",
 "category": "",
 "quote": "",
 "text": "This book traces the history and lives of three of the author’s ancestral families, showing us how men and women migrated to the Connecticut Western Reserve in Ohio in the early 19th century and brought with them their values of independence, freedom, and commitment to education."
},

{"title": "Living in Color", 
 "byline": "by John Haugh and Mike Shaughnessy",
 "image": "book_cover_living_in_color.jpg",
 "category": "",
 "quote": "",
 "text": "John Haugh and Mike Shaughnessy pioneered the liquid colorants industry in Cleveland, Ohio, at ColorMatrix, a company that thrived in spite of labor challenges, urban politics, failed business relationships, and a raid by federal authorities. For a summary of Living in Color, click here."
},

{"title": "Lucky Breaks", 
 "byline": "by Chuck Ames",
 "image": "book_cover_lucky_breaks.jpg",
 "category": "",
 "quote": "",
 "text": "The former chairman of Clayton, Dubilier & Rice recalls growing up in the Great Plains during the Depression and how his father’s mind for marketing dairy products shaped his own career and strong views on industrial marketing."
},

{"title": "Circles of Life: Family Friends and Healthcare", 
 "byline": "by Jack Matloff",
 "image": "book_cover_circles_of_life.jpg",
 "category": "",
 "quote": "",
 "text": "Dr. Jack Matloff takes us from his beginnings as the son of a Jewish immigrant milkman to becoming the first chairman of cardiothoracic surgery at the newly formed Cedars-Sinai Medical Center in Los Angeles. Matloff loves his patients—commoners and Hollywood hoi polloi alike—with all his heart."
},

{"title": "Recollections", 
 "byline": "by Alton Whitehouse",
 "image": "book_cover_recollections.jpg",
 "category": "",
 "quote": "",
 "text": "Al Whitehouse takes us on a journey from his Depression-era childhood characterized by illness through his early career as a lawyer to his decision to join The Standard Oil Company of Ohio. Whitehouse also discusses his rich family life as both a Northerner and Southerner and as someone who falls in love with the American West."
},

{"title": "Opportunity of a Lifetime", 
 "byline": "by Roy Gentles",
 "image": "book_cover_opportunity_of_a_lifetime.jpg",
 "category": "",
 "quote": "",
 "text": "The former CEO of Alcan takes us “into his living room” to tell us about growing up in Depression-era Canada, serving on a convoy escort ship in World War II, attending Harvard Business School as part of its famous class of 1949, and running a multi-national, multi-billion dollar company during the rise of American industrial capitalism."
}
];

var num_dots = 0;
var cur_dot = 0;
var timer = null;

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
    $(".dot").on("click", function() {
        // stop slider animation if someone clicks on a dot
        clearInterval(timer);
        timer = null;
        update_book($(this).data("id"));
    });

    update_book(0);

    timer = setInterval(next_book, 9000);    
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

function update_book(i) {    
    if (i >= books.length) {
        i = 0;
        cur_dot = 0;
    } else if (i < 0) {
        i = (books.length - 1);
        cur_dot = i;
    }
    var book = books[i];

    $(".dot").removeClass("selected");
    $(".dot[data-id=" + i + "]").addClass("selected");

    // only slide text in from left if browser width >= 1020px
    if ($(window).width() >= 1020) {
        //$("#book_text").css("left", "300px");
        if ($(window).width() >= 1020) {
            $("#book_text").css("color", "transparent");
        }
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

    $("#book_image").css("background-image", "url('../images/" + book['image'] + "')");

    if ($(window).width() >= 1020) {        
        setTimeout(show_text, 1400, i);
    } else {
        // TODO: could make slide left
        show_text(i);
    }
    setTimeout(hide_text, 7500, i);
    setTimeout(slide_in_new_book, 8000, i);
}

function show_text(i) {
    var book = books[i];

    // only blur if browser width >= 1020px
    if ($(window).width() >= 1020) {
        $("#book_image").css("background-image", "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../images/" + book['image'] + "')");
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
    $("#book_image2").css("background-image", "url('../images/" + book['image'] + "')");
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
	    images[i].src = "../images/" + book['image'];
    }
}
