let minutes=0;
let seconds=0;
let centiseconds=0;
let hours=0;
let timeout;
let hourout;
let eventListener1= document.querySelector('.button2');
eventListener1.addEventListener('click',() => {
    timeout=setInterval(() => {
        centiseconds++;
        if(centiseconds===100) {
            centiseconds=0;
            seconds++;

        }
        if(seconds===60) {
            minutes++;
            seconds=0;
            centiseconds=0;
        }
        if(minutes===60) {
            hourPlay();
        }
        function1();
    },10);
});
function hourPlay() {
    clearInterval(timeout);
    minutes=0;
    seconds=0;
    centiseconds=0;
    hourout= setInterval(() => {
        seconds++;
        if(seconds===60) {
            seconds=0;
            minutes++;
        }
        if(minutes===60) {
            seconds=0;
            minutes=0;
            hours++;
        }
        function2();
    },1000);
}
let function1=() => {
    document.querySelector('.button1').innerHTML=`${(minutes>=10)?(minutes):(`0${minutes}`)}:
    ${(seconds>=10)?(seconds):(`0${seconds}`)}:${(centiseconds>=10)?(centiseconds):(`0${centiseconds}`)}`;
}
let eventListener2= document.querySelector('.button3');
eventListener2.addEventListener('click',() => {
    clearInterval(timeout);
    clearInterval(hourout);
});
let eventListener3= document.querySelector('.reset');
eventListener3.addEventListener('click', () => {
    minutes=0;
    seconds=0;
    centiseconds=0;
    hours=0;
    function1();
    clearInterval(timeout);
    clearInterval(hourout);
});
let function2= () => {
    document.querySelector('.button1').innerHTML=`${(hours>=10)?(hours):(`0${hours}`)}:
    ${(minutes>=10)?(minutes):(`0${minutes}`)}:${(seconds>=10)?(seconds):(`0${seconds}`)}`;
}
