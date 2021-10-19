//this javascript page is being used to house the questions for the quiz

// this is also an object that each of these can be called later 
const quizQuestion = [
    {
        question: "What is Ash Ketchums first pokemon?",
        a: "pikachu",
        b: "bulbasaur",
        c: "charmander",
        d: "squirtle",
        correct: "a",
    },
    {
        question: "What type of pokemon is Pikachu?",
        a: "thunder",
        b: "lightning",
        c: "electric",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Which of the following is a bug type?",
        a: "squirtle",
        b: "gengar",
        c: "beedrill",
        d: "all of the above",
        correct: "c",

    },
    {
        question: "What is Ash Ketchums first pokemon?",
        a: "pikachu",
        b: "bulbasaur",
        c: "charmander",
        d: "squirtle",
        correct: "a",
    },
    {
        question: "What is Ash Ketchums first pokemon?",
        a: "pikachu",
        b: "bulbasaur",
        c: "charmander",
        d: "squirtle",
        correct: "a",
    },
    {
        question: "What is Ash Ketchums first pokemon?",
        a: "pikachu",
        b: "bulbasaur",
        c: "charmander",
        d: "squirtle",
        correct: "a",
    },
    {
        question: "What is Ash Ketchums first pokemon?",
        a: "pikachu",
        b: "bulbasaur",
        c: "charmander",
        d: "squirtle",
        correct: "a",
    },
    {
        question: "What is Ash Ketchums first pokemon?",
        a: "pikachu",
        b: "bulbasaur",
        c: "charmander",
        d: "squirtle",
        correct: "a",
    },
    {
        question: "What is Ash Ketchums first pokemon?",
        a: "pikachu",
        b: "bulbasaur",
        c: "charmander",
        d: "squirtle",
        correct: "a",
    },
];




// var quizQuestions = document.getElementById('quizQuestion').innerHTML = 'Quiz questions';

// var quizAnswers1 = document.getElementById('quizQChoice1').innerHTML = 'Quiz answer choice 1';
// var quizAnswers2 = document.getElementById('quizQChoice2').innerHTML = 'Quiz answer choice 2';
// var quizAnswers3 = document.getElementById('quizQChoice3').innerHTML = 'Quiz answer choice 3';
// var quizAnswers4 = document.getElementById('quizQChoice4').innerHTML = 'Quiz answer choice 4';

// quizQuestions.addEventListener('')



// used examples from the lesson 
function countdown() {
    var startTimer = document.getElementById('countdownTimer');
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
//original script file


// add click event that starts the quiz and then starts the timer
var start = document.getElementById('startbtn');
console.log(start)
start.addEventListener('click', 
countdown)


// console.log(countdown);
// var startCountdown = setInterval(countdown, 1000);
// //timer variable that is being used by the countdown variable to create a countdown time from 100 seconds
// // const startTimer = document.querySelector("timer");
// startTimer.addEventListener('click', function() {
// });




//
document.querySelector('h2').innerHTML = 'CLICK START BUTTON TO BEGIN QUIZ AND START THE TIMER';


//add quiz questions and connect quiz questions to pop up when the quiz is started
var questList  = document.getElementById('quizQuestion');
function ()


