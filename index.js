var number1Length = document.querySelectorAll(".drum").length;

for (var i=0;i<number1Length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",
function(){
    
    
    var buttonLetters = this.innerHTML;
    soundPlay(buttonLetters);
    buttonAnimation(buttonLetters);

    
});

}

document.addEventListener("keydown", function(event){
    soundPlay(event.key.toUpperCase());
    buttonAnimation(event.key.toUpperCase());
    
})


function soundPlay (key){
switch (key) {
        case "W":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "A":
            var bass = new Audio("sounds/bass.mp3");
            bass.play();
            break;
        case "S":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "D":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "J":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "K":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "L":
            var tom4 = new Audio("sounds/Melissa.mp3");
            tom4.play();
            break;

        default: console.log(buttonLetters);

        
    }





}

// Animation function //

function buttonAnimation(currentkey){

    var activeButton = document.querySelector("."+currentkey);
    

        activeButton.classList.add("pressed");

        setTimeout(function () {
            activeButton.classList.remove("pressed")
        }, 400);
 

    
    

    
}



// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
 