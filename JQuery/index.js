$("h1").text("Hover Me");
$("button").html("<em>Vanish?</em>").click(function(){
        $("h1").fadeOut();
        $("button").text("Slowly.. Wanna have?").click(function(){
            $("h1").fadeIn();
            $("button").text("Fast this time?").click(function(){
                $("h1").fadeToggle();
            });
        });
});
$("a").attr("href", "https://www.yahoo.com");
$("h1").click(function(){
    $("h1").css("color","purple");
});
$("h2").click(function(){
    $("h2").css("color","blue");
    $("h2").text("is it required?").click(function(){
        $("h2").slideUp().slideDown().animate({opacity: 0.5});
        $("h2").text("it's too crazy!");
    });
    
});
$("h4").click(function(){
    $("h4").text("tada! are you missing it?").click(function(){
        $("h1").show();
    });
    $("h1").hide();
});


// for(var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color="purple";
//     });
// }

$("button").click(function(){
    $("h2").css("color","green");
});

$("h1").on("mouseover", function(){
    $("h1").css("color","pink");
    $("h1").text("I don't tell you to change colour");
});

$("h3").css("text-align","right");
$("h3").click(function(){
    $("button").remove();
});

$("h3").on("mouseover", function(){
    $("h3").css("color","orange");
    $("h1").slideToggle();
    $("h3").text("Are you chasing me?");
});