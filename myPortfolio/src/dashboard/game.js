let cookie = document.querySelector('#cookie');
let scoreValue = document.querySelector('#score');
let doublePoints = document.querySelector('#double');
let score = 0;
let clicker = 1;
 
//i need to refer to the example to figure out exactly what i'm targeting with these variables since I used different classes and IDs

cookie.addEventListener("click", function (){
    score += clicker;
    scoreValue.textContent = score;
});

doublePoints.addEventListener("click", function(){
    if (score < 33 ) {
        alert('Not enough cookies');
    } else {
        clicker *= 2;
        score -=33;
    };
});