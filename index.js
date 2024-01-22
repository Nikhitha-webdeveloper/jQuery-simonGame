//first design enter the game or game over pages
//adding event listeners of gameover

var currLevel;
var ansSequence;
var colourList = ["green","red","yellow","blue"];
var userSequence;
var started = false;


$(document).on("keydown",enterGame);

$(".btn").click(function(){
    var colourClicked = $(this).attr("id");
    animatePress(colourClicked);
    makeSound(colourClicked);
    if(colourClicked!==ansSequence[userSequence.length])
    {
        gameOver();
        return;
    }
    if(userSequence.length==currLevel-1) setTimeout(nextSequence(),400);
    else userSequence.push(colourClicked);
});

function animatePress(colour)
{
    // alert(colour);
    $("#"+colour).addClass("pressed");
    setTimeout(function(){
        $("#"+colour).removeClass("pressed")
    },100);
    // setTimeout(,100);
}
//entering the game

function enterGame()
{   
    if(started) return;
    //initialisations
    started = true;
    currLevel = 0;
    ansSequence = [];
    nextSequence();    
}

function nextSequence()
{
    userSequence = [];
    currLevel+=1;
    $("h1").text("Level "+currLevel); 
    var randNumber = Math.floor(Math.random()*4);    
    var randColour = colourList[randNumber];    
    presstheButton(randColour);
    ansSequence.push(randColour);
}


function presstheButton(colour)
{    
    $("#"+colour).fadeOut(100).fadeIn(100);
    makeSound(colour);
}

function makeSound(colour)
{
    var audio = new Audio('./sounds/'+colour+'.mp3');
    audio.play();
}



function gameOver()
{
    started = false;    
    $("h1").text("Game Over, Press Any Key to Restart");
    var col = $("body").css("background-color");
    $("body").css("background-color","red");
    setTimeout(function() {$("body").css("background-color",col);}, 500);        
}








