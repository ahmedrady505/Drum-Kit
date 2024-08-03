var b =  document.querySelectorAll("button");
for(var i=0 ; i < b.length ; i++){
    b[i].addEventListener("click" , click_handel);
}
function click_handel(){
    var letter = this.innerHTML;
    makeSound(letter);
    btnAnimation(letter);
}
function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            console.log(letter);
            break;
    }
}
document.addEventListener("keydown", keyboardPlay);
function keyboardPlay(e){
    makeSound(e.key);
    btnAnimation(e.key);
}
var c = 1;
function btnAnimation(active_key){
    var current = document.querySelector("." + active_key);
    current.classList.add("pressed");

    setTimeout(function(){
        current.classList.remove("pressed");
    },150)
}