var number = 0;
var started = false;
let count = 0;
const value = document.querySelector("#value");

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function guess(){
    var guessednumber = document.getElementById("guessnumber").value;
    if (started == true){
        console.log(number);
        if (number > guessednumber){
            alert('Try bigger value');
        }else if(number < guessednumber) {
            alert('Try smaller value');
        }else {
            alert('You found the number');
            count++;
            startGame();
        }
        if (count > 0) {
            value.style.color = "green";
        }
        value.textContent = count;
    }else{
        alert('Game not started');
    }
}
function startGame() {
    number = random(0,100);
    number = number;
    started = true;
}