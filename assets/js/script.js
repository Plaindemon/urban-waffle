//original script file
var startTimer = document.getElementById('countdownTimer');
const box = document.getElementById("box");
box.style.display = "none";
var timer = 100;
var timeSetting;
var i = 0;
  
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
//this javascript page is being used to house the questions for the quiz
// const quizQuestions = [
//     {
//         question: "What is Ash Ketchums first pokemon?",
//         a: "pikachu",
//         b: "bulbasaur",
//         c: "charmander",
//         d: "squirtle",
//         correct: "a",
//     },
//     {
//         question: "What type of pokemon is Pikachu?",
//         a: "thunder",
//         b: "lightning",
//         c: "electric",
//         d: "none of the above",
//         correct: "c",
//     },
//     {
//         question: "Which of the following is not a pokemon?",
//         a: "squirtle",
//         b: "gengar",
//         c: "lugio",
//         d: "all of the above",
//         correct: "c",

//     },
//     {
//         question: "What is Ash Ketchums first pokemon?",
//         a: "pikachu",
//         b: "bulbasaur",
//         c: "charmander",
//         d: "squirtle",
//         correct: "a",
//     },
//     {
//         question: "What is Ash Ketchums first pokemon?",
//         a: "pikachu",
//         b: "bulbasaur",
//         c: "charmander",
//         d: "squirtle",
//         correct: "a",
//     },
//     {
//         question: "What is Ash Ketchums first pokemon?",
//         a: "pikachu",
//         b: "bulbasaur",
//         c: "charmander",
//         d: "squirtle",
//         correct: "a",
//     },
//     {
//         question: "What is Ash Ketchums first pokemon?",
//         a: "pikachu",
//         b: "bulbasaur",
//         c: "charmander",
//         d: "squirtle",
//         correct: "a",
//     },
//     {
//         question: "What is Ash Ketchums first pokemon?",
//         a: "pikachu",
//         b: "bulbasaur",
//         c: "charmander",
//         d: "squirtle",
//         correct: "a",
//     },
//     {
//         question: "What is Ash Ketchums first pokemon?",
//         a: "pikachu",
//         b: "bulbasaur",
//         c: "charmander",
//         d: "squirtle",
//         correct: "a",
//     },
// ];

// used examples from the lesson 
function countdown() {
    box.style.display = "block";
    timeSetting = setInterval(function(){
        console.log(timer)
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
    questions();
};
console.log(countdown);
// var startCountdown = setInterval(countdown, 1000);


// //timer variable that is being used by the countdown variable to create a countdown time from 100 seconds
// const startTimer = document.querySelector("timer");




// add click event that starts the quiz and then starts the timer
var start = document.getElementById('startbtn');
console.log(start)
start.addEventListener('click', 
countdown)




// var quizInstruct = document.getElementById('quizInstruct');
// // if () {
// //     quizInstruct.classList.remove('boxShow');
// //     console.log(quizInstruct)
// //     quizInstruct.classList.change('boxHide');
    
// // }
// //
// console.log(quizInstruct)
// document.querySelector('h2').innerHTML = 'CLICK START BUTTON TO BEGIN QUIZ AND START THE TIMER';



// console.log(quest)


// questions();
// console.log(questions);

//add quiz questions to div container when start button is clicked
function questions() {
    // create function to remove the instructions when the quiz start button is clicked
    // variables for creating quiz structure to the page
    // const body = document.body;
    
    // box.classList.add("boxHide");
    let ul = document.createElement("ul");
    ul.classList.add("quizAnswerStyle");
    const liA = document.createElement('li');
    const liB = document.createElement('li');
    const liC = document.createElement('li');
    const liD = document.createElement('li');
    const h2 = document.createElement('h2');

    //add the questions
    // setting the attribute for each question
    h2.innerText = quizQuestions[i].question;// "QUESTION?";
    // console.log(quizQuestions.question)
    liA.innerText = "A:"+ " " + quizQuestions[i].a;
    liA.setAttribute("id", "A");

    liB.innerText = "B:" + " " + quizQuestions[i].b;
    liB.setAttribute("id", "B");

    liC.innerText = "C:" + " " + quizQuestions[i].c;
    liC.setAttribute("id", "C");

    liD.innerText = "D:" + " " + quizQuestions[i].d;
    liD.setAttribute("id", "D");

    // implementing those var and adding to page 
    ul.style.backgroundColor = "rgba(137, 43, 226, 0.75)";
    ul.appendChild(h2);
    ul.appendChild(liA);
    ul.appendChild(liB);
    ul.appendChild(liC);
    ul.appendChild(liD);
    console.log(ul); // NodeList [<li>]
    box.appendChild(ul);


    console.log(ul.textContent)
    console.log(ul.innerText)

    // when start button is clicked timer starts and then the quiz questions are cycled through
    
    
    
        // console.log(startQuiz);

}

// document.querySelector('div #box').innerHTML = "<li>" + quizQuestions "</li>";


// document.querySelector('ul').innerHTML = ";