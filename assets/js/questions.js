const body = document.body;
const box = document.getElementById("#box");
let ul = document.createElement("ul");
// let li = document.createElement("li");
ul.innerHTML = "<h2>QUESTION?</h2>" + "<br>" + "<li>ANSWERS</li>" + "<br>" + "<li>ANSWERS</li>" + "<br>" + "<li>ANSWERS</li>" + "<br>" + "<li>ANSWERS</li>";

// document.querySelector('ul').innerHTML = "<li>" + quizQuestions "</li>";
// ul.innerText = "hello world";
// ul.textContent = "hello world 2";

body.append(ul);
console.log(ul); // NodeList [<li>]
// var quizQuestions = document.getElementById('quizQuestion').innerHTML = 'Quiz questions';

// var quizAnswers1 = document.getElementById('quizQChoice1').innerHTML = 'Quiz answer choice 1';
// var quizAnswers2 = document.getElementById('quizQChoice2').innerHTML = 'Quiz answer choice 2';
// var quizAnswers3 = document.getElementById('quizQChoice3').innerHTML = 'Quiz answer choice 3';
// var quizAnswers4 = document.getElementById('quizQChoice4').innerHTML = 'Quiz answer choice 4';

// quizQuestions.addEventListener('')

// const ul = document.querySelector("ul");

console.log(ul.textContent)
console.log(ul.innerText)
