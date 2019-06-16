//I need to make variables for 1)clicking the cookie image 2)a score that adds upon itself 3)a variable that gives the user double the clicks 4)score variable that increases with each click 5)the value added to score of each click
let cookie = document.querySelector('#cookie');
let scoreValue = document.querySelector('#score');
let doublePoints = document.querySelector('#double');
let score = 0;
let clicker = 1;

//I want to increase the score each time the user clicks the cookie image. I've used an event listener to keep track of the number of clicks.

cookie.addEventListener("click", function (){
    //Each click adds 1 "clicker" value to the value of "score"
    score += clicker;
    //post the new value to the DOM
    scoreValue.textContent = score;
});

//I am adding a button for the user to upgrade the value of each click

doublePoints.addEventListener("click", function(){
    //the user must have at least 33 clicks before they can get the upgrade
    if (score < 33 ) {
        //if they don't, an alert will tell them they don't have enough cookies
        alert('Not enough cookies');
    } else {
        //if the user can spend 33 cookies, they will double the value for their clicks
        clicker *= 2;
        //still costs 33 cookies each time they double
        score -=33;
    };
});