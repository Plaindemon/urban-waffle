var timer = 10;
var countdown = function(){
    console.log(timer);
    timer--;
    if(timer === 0){
        console.log("Quiz Time is up")
        clearInterval(startCountdown);
    };
};



var startCountdown = setInterval(countdown, 1000);