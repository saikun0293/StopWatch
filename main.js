let hours=document.getElementById("hours")
    minutes=document.getElementById("minutes")
    seconds=document.getElementById("seconds")
    milliseconds=document.getElementById("milliseconds");


document.getElementById("start").addEventListener("click",start);
document.getElementById("stop").addEventListener("click",stop);
document.getElementById("reset").addEventListener("click",reset);

let [h,m,s,ms]=[0,0,0,0];

let timerRunning=false;
let timer;


function start(){
    if(!timerRunning){
        timer=setInterval(run,10);
        timerRunning=true;
    }
}

function run(){
    displayTime();
    ms++;
    if(ms===100){
        s++;
        ms=0;
    }
    if(s===60){
        m++;
        s=0;
    }
    if(m===60){
        h++;
        m=0;
    }
}

function displayTime(){
    hours.innerHTML=(h<10?'0'+h:h);
    minutes.innerHTML=(m<10?'0'+m:m);
    seconds.innerHTML=(s<10?'0'+s:s);
    milliseconds.innerHTML=(ms<10?'0'+ms:ms);
}

function reset(){
    h=0;m=0;s=0;ms=0;
    displayTime();
}

function stop(){
    clearInterval(timer);
    timerRunning=false;
}