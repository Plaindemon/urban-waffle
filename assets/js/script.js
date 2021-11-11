//original script file
var startTimer = document.getElementById('countdownTimer');
const box = document.getElementById("box");
box.style.display = "none";
var timer = 100;
var timeSetting;
var i = 0;
var score = 0;
const quizQuestions = [
    {
        question: "What is Ash Ketchums first pokemon?",
        a: "pikachu",
        b: "bulbasaur",
        c: "charmander",
        d: "squirtle",
        correct: "A",
    },
    {
        question: "What type of pokemon is Pikachu?",
        a: "thunder",
        b: "lightning",
        c: "electric",
        d: "none of the above",
        correct: "C",
    },
    {
        question: "Which of the following is not a pokemon?",
        a: "squirtle",
        b: "gengar",
        c: "lugio",
        d: "all of the above",
        correct: "C",

    },
    {
        question: "What is the evolved form of pikachu?",
        a: "pikachu 2.0",
        b: "Jolteon",
        c: "squirtle",
        d: "Raichu",
        correct: "D",
    },
    {
        question: "Which of the following is the best PokeBall?",
        a: "dive ball",
        b: "Master Ball",
        c: "Ultra Ball",
        d: "Great Ball",
        correct: "B",
    },
    {
        question: "Where do you take pokemon for healing?",
        a: "Pokemon Center",
        b: "Pokemart",
        c: "Healing Springs",
        d: "Pokemon Gym",
        correct: "A",
    },
    {
        question: "What is Ash Ketchums first pokemon?",
        a: "pikachu",
        b: "bulbasaur",
        c: "charmander",
        d: "squirtle",
        correct: "A",
    },
    {
        question: "What pokemon type is immune to electric attacks",
        a: "rock",
        b: "ground",
        c: "water",
        d: "fairy",
        correct: "B",
    },
    {
        question: "Who is Ash Ketchums rival?",
        a: "James",
        b: "Jessie",
        c: "Professor Oak",
        d: "Gary",
        correct: "D",
    },
];

// add click event that starts the quiz and then starts the timer
var start = document.getElementById('startbtn');
// console.log(start)
start.addEventListener('click', 
countdown)

// used examples from the lesson 
function countdown() {
    box.style.display = "block";
    start.style.display = "none";
    timeSetting = setInterval(function(){
        // console.log(timer)
        if(timer > 1){
        //
        startTimer.textContent = timer + ' seconds remain.';
        timer--;
        }
        else{
        console.log("Quiz Time is up");
        clearInterval(timeSetting);
        displayScore();
        }
        }, 1000);
    questions();
};
// console.log(countdown);
// var startCountdown = setInterval(countdown, 1000);

// console.log(quest)


// questions();
// console.log(questions);

//add quiz questions to div container when start button is clicked
function questions() {
    // create function to remove the instructions when the quiz start button is clicked
    // variables for creating quiz structure to the page
    // const body = document.body;
    box.innerHTML ="";
    // box.classList.add("boxHide");
    let ul = document.createElement("ul");
    ul.classList.add("quizAnswerStyle");
    const liA1 = document.createElement('li');
    const liB1 = document.createElement('li');
    const liC1 = document.createElement('li');
    const liD1 = document.createElement('li');
    const liA = document.createElement('button');
    const liB = document.createElement('button');
    const liC = document.createElement('button');
    const liD = document.createElement('button');
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
    liA1.appendChild(liA);
    liB1.appendChild(liB);
    liC1.appendChild(liC);
    liD1.appendChild(liD);
    ul.appendChild(liA1);
    ul.appendChild(liB1);
    ul.appendChild(liC1);
    ul.appendChild(liD1);
    // console.log(ul); // NodeList [<li>]
    box.appendChild(ul);
    

    document.getElementById("A").addEventListener("click", checkAnswer)
    document.getElementById("B").addEventListener("click", checkAnswer)
    document.getElementById("C").addEventListener("click", checkAnswer)
    document.getElementById("D").addEventListener("click", checkAnswer)
    // console.log(ul.textContent)
    // console.log(ul.innerText)

    // when start button is clicked timer starts and then the quiz questions are cycled through
    
    
    
        // console.log(startQuiz);

}

function checkAnswer() {
    var userAnswer = this.getAttribute("id");
    // console.log(userAnswer);
    if(userAnswer === quizQuestions[i].correct){
        score += 5;
        timer += 5;
    }
    else{
        timer -= 5;
        score -= 5;
    }
    if(i < quizQuestions.length - 1) {
        i++;
        questions();
    }else{
        clearInterval(timeSetting);
        displayScore();
    }

}

const userInitials = document.createElement('input');

function displayScore() {
    box.innerHTML = "";
    const h3 = document.createElement('h3');
    const initialsSubmit = document.createElement('button');
    initialsSubmit.setAttribute("id", "submitButton");
    initialsSubmit.setAttribute("placeholder", "submitScore");
    userInitials.setAttribute("id", "initials");
    userInitials.setAttribute("type", "text");
    userInitials.setAttribute("placeholder", "Enter user initials");
    const saveUser = document.createElement('button');
    saveUser.setAttribute("id", "scoreSave");
    userInitials.textContent = "saveUser";
    

    h3.innerText = "Score: " + (score)
    box.appendChild(h3)
    box.appendChild(userInitials)
    box.appendChild(initialsSubmit)
    document.getElementById('submitButton').
    addEventListener('click', submitScore)
    initialsSubmit.textContent = "Submit Initials";
    

}
displayScore();
// add event handler for the submit button, inside the submit is where you get the local storage -- see comments below
var highScores = [];
// create function to get the submission from local storage
function submitScore(){
    // get the local storage
    var getLocal = JSON.parse(localStorage.getItem("highScores"));
    // gets the value of the initials from the input field - initials
    var initials = document.getElementById("initials").value;
    // puts current user initials into highscore array 
    var current = {"initials": initials, "score": score};
    // pushes highscores
    highScores.push(getLocal);
    console.log(highScores)
    //pushed back up to local storage
    highScores.push(current)
    localStorage.setItem('highScores', JSON.stringify(highScores));
}
// highScores[0].initials

// local storage set // high scores and then the information // set as var then get the high scores -- add new information and new initials to page then set it and push it back up to the setter
// display highscores in HTML after the new score is submitted
function highScoresDisplay() {
    for (let i = 0; i < highScores.length; i++) {
    h3.innerText = "High Scores List" + highScores[i];
    }
 
}
highScoresDisplay();