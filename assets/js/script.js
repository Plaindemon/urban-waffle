var counter = 10;
var countdown = function(){
    console.log(counter);
    counter--;
    if(counter === 0){
        console.log("Quiz Time is up")
        clearInterval(startCountdown);
    };
};



var startCountdown = setInterval(countdown, 10000);