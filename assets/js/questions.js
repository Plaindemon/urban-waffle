


document.querySelector('h2').innerHTML = 'QUIZ INTRO GOES HERE';

document.querySelector('body').style.backgroundColor = 'grey';


let element = document.querySelector("button");

function turnButtonRed (){
    element.style.backgroundColor = "#945758";
    element.style.color = "white";
    element.innerHTML = "Submit"; 
}

element.onclick = turnButtonRed;

// let element = document.querySelector("button");

// function turnButtonRed (){
//     element.style.backgroundColor = "#945758";
//     element.style.color = "white";
//     element.innerHTML = "Submit"; 
// }

// element.onclick = turnButtonRed;
