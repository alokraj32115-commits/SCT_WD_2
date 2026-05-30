let startTime;
let elapsedTime = 0;
let interval;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateTime(){

    elapsedTime = Date.now() - startTime;

    let hours =
    Math.floor(elapsedTime / 3600000);

    let minutes =
    Math.floor((elapsedTime % 3600000)/60000);

    let seconds =
    Math.floor((elapsedTime % 60000)/1000);

    let milliseconds =
    elapsedTime % 1000;

    display.textContent =
    `${String(hours).padStart(2,'0')}:`+
    `${String(minutes).padStart(2,'0')}:`+
    `${String(seconds).padStart(2,'0')}.`+
    `${String(milliseconds).padStart(3,'0')}`;
}

document.getElementById("start")
.addEventListener("click",()=>{

    if(!running){

        startTime =
        Date.now() - elapsedTime;

        interval =
        setInterval(updateTime,10);

        running=true;
    }
});

document.getElementById("pause")
.addEventListener("click",()=>{

    clearInterval(interval);

    running=false;
});

document.getElementById("reset")
.addEventListener("click",()=>{

    clearInterval(interval);

    running=false;

    elapsedTime=0;

    display.textContent=
    "00:00:00.000";

    laps.innerHTML="";
});

document.getElementById("lap")
.addEventListener("click",()=>{

    if(elapsedTime===0) return;

    const li =
    document.createElement("li");

    li.textContent =
    display.textContent;

    laps.prepend(li);
});