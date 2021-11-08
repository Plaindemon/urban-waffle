//original script file
var startTimer = document.getElementById('countdownTimer');

//this javascript page is being used to house the questions for the quiz
const quizQuestions = [
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
        question: "Which of the following is not a pokemon?",
        a: "squirtle",
        b: "gengar",
        c: "lugio",
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
quizQuestions
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
    timeSetting();
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

// var getQuestions = document.getElementById('#quizQuestion');

// var answers = document.getElementsByClassName('.questAnswer');
// var  quiz = document.getElement('ul');
// let quizQuestList = document.querySelector('li#quizQuestion');
var quest = quizQuestions.length;
console.log(quest)
function questions() {
    // when start button is clicked timer starts and then the quiz questions are cycled through
    start.addEventListener('click', countdown);
    for(let i = 0; i < quizQuestions.length; i++){
        var placeholder = document.getElementById('placeholder');
        console.log(placeholder);
    }
    
    // console.log(startQuiz);

}

// questions();
console.log(questions);

