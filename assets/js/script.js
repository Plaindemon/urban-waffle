//original script file
var startTimer = document.getElementById('countdownTimer');

// used examples from the lesson 
function countdown() {
    var timer = 100;
    var timeSetting = setInterval(function(){
    // console.log(timer);
    // timer--;
    if(timer > 1){
        //
        startTimer.textContent = timer + ' seconds remain.';
        timer--;
    }
    else if(timer === 0){
        console.log("Quiz Time is up");
        clearInterval(startCountdown);
    }
    }, 1000);
}

console.log(countdown);
// var startCountdown = setInterval(countdown, 1000);
// //timer variable that is being used by the countdown variable to create a countdown time from 100 seconds
// // const startTimer = document.querySelector("timer");
// startTimer.addEventListener('click', function() {
    

    

    
// });

// add click event that starts the quiz and then starts the timer
var start = document.getElementById('startbtn');
console.log(start)
start.addEventListener('click', 
countdown)








//
document.querySelector('h2').innerHTML = 'CLICK START BUTTON TO BEGIN QUIZ AND START THE TIMER';







//add quiz questions





