// variables for creating quiz structure to the page
const body = document.body;
const box = document.getElementById("#box");
let ul = document.createElement("ul");
ul.setAttribute("class", ".quizAnswerStyle");
const liA = document.createElement('li');
const liB = document.createElement('li');
const liC = document.createElement('li');
const liD = document.createElement('li');
const h2 = document.createElement('h2');

// setting the attribute for each question
h2.innerText = "QUESTION?";

liA.innerText = "Answer A" + "Selection";
liA.setAttribute("id", "A");

liB.innerText = "Answer B" + "Selection";
liB.setAttribute("id", "B");

liC.innerText = "Answer C" + "Selection";
liC.setAttribute("id", "C");

liD.innerText = "Answer D" + "Selection";
liD.setAttribute("id", "D");

// implementing those var and adding to page 
ul.style.backgroundColor = "rgba(137, 43, 226, 0.75)";
ul.append(h2);
ul.appendChild(liA);
ul.appendChild(liB);
ul.appendChild(liC);
ul.appendChild(liD);
body.append(ul);
console.log(ul); // NodeList [<li>]


console.log(ul.textContent)
console.log(ul.innerText)

// li.innerText = "Answer B"
// li.innerText = "Answer C"
// li.innerText = "Answer D"
// let li = document.createElement("li");
// ul.innerHTML = "<h2>QUESTION?</h2>" + "<br>" + "<li>ANSWERS</li>" + "<br>" + "<li>ANSWERS</li>" + "<br>" + "<li>ANSWERS</li>" + "<br>" + "<li>ANSWERS</li>";

// document.querySelector('ul').innerHTML = "<li>" + quizQuestions "</li>";
// ul.innerText = "hello world";
// ul.textContent = "hello world 2";

// var quizQuestions = document.getElementById('quizQuestion').innerHTML = 'Quiz questions';

// var quizAnswers1 = document.getElementById('quizQChoice1').innerHTML = 'Quiz answer choice 1';
// var quizAnswers2 = document.getElementById('quizQChoice2').innerHTML = 'Quiz answer choice 2';
// var quizAnswers3 = document.getElementById('quizQChoice3').innerHTML = 'Quiz answer choice 3';
// var quizAnswers4 = document.getElementById('quizQChoice4').innerHTML = 'Quiz answer choice 4';

// quizQuestions.addEventListener('')

// const ul = document.querySelector("ul");