//original script file
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







document.querySelector('body').style.backgroundColor = 'rgb(166, 165, 167);';



// const myNodelist = document.querySelectorAll("p");
// for (let i = 0; i < myNodelist.length; i++) {
//   myNodelist[i].style.color = "red";
// }


// let element = document.querySelector("button");

// function turnButtonRed (){
//     element.style.backgroundColor = "#945758";
//     element.style.color = "white";
//     element.innerHTML = "Submit"; 
// }

// element.onclick = turnButtonRed;
