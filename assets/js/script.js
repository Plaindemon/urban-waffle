//original script file
var timer = 100;
var countdown = function(){
    // console.log(timer);
    timer--;
    if(timer === 0){
        console.log("Quiz Time is up")
        clearInterval(startCountdown);
    };
};
var startCountdown = setInterval(countdown, 1000);
//timer variable that is being used by the countdown variable to create a countdown time from 100 seconds
const startTimer = document.querySelector("timer");
// startTimer.addEventListener('click', function() {
    //

    //

    //
// });

// add click event that starts the quiz and then starts the timer
var start = document.getElementById('startbtn');
console.log(start)
start.addEventListener('click', 
countdown)








//
document.querySelector('h2').innerHTML = 'CLICK START BUTTON TO BEGIN QUIZ AND START THE TIMER';







//add quiz questions





