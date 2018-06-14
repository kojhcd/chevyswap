/*
document.getElementById(".test").addEventListener("click", function(){
    document.getElementById(".testout").innerHTML = "Hello World";
});
*/ 

function prompter() {
    var reply = prompt("So your driving down the road and you start to hear a nasty knock. You check your trusty 305 SBC is oil starved. All indications is a bad bearing and rod knock. Swap time,  What would you chose?")
    alert ( "click on an image below to see how that'd go you " + reply + " swapper" )
    }; 
    
    function LM7(){
        var EngineLM7 = prompt("The 5.3 is a good choice, but you'd need to find an entire donor vehicle to get the engine management system out of. Craigslist has them around $1,500-2k, do you really want to spend that just to be able to move a couch on the weekend? Nah");
        alert (userAdjective);
    }; 
    
    function LS1(){
        var EngineLS1 = prompt("While this engine will give you the most horsepower 300+, your looking at $3-5K for the swap. You could start a gofundme or you could choose again");
        alert (userAdjective);
      
    }; 
    
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    
    /*function LS1(){
        var EngineLS1 = prompt("While this engine will give you the most horsepower 300+, your looking at $3-5K for the swap. Do you still want to do it? Yes or No?");
        if(yes) { document.getElementById("output").innerHTML = 'Well if your made out money, how about tossing some my way! huh buddy!';
    }; 
    */ 