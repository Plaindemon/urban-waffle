//original script file

// changes the background color of the document
document.querySelector('body').style.backgroundColor = 'blue';
document.querySelector('table').style.backgroundColor = 'orange';

document.querySelector('quizInstruct').innerHTML = 'Quiz questions';
// grab from the document the h2 within the innerHTML
document.querySelector('h2').innerHTML = 'CLICK START BUTTON TO BEGIN QUIZ AND START THE TIMER';



//timer variable that is being used by the countdown variable to create a countdown time from 100 seconds
var timer = 100;
var countdown = function(){
    console.log(timer);
    timer--;
    if(timer === 0){
        console.log("Quiz Time is up")
        clearInterval(startCountdown);
    };
};
var startCountdown = setInterval(countdown, 1000);

//add quiz questions





