const clock = document.querySelector("#clock");
const stop = document.querySelector("#stop");
const start = document.querySelector("#start");

let setIntervalID;

function startClock() {
    setIntervalID = setInterval(() => {
        const now = new Date();
        clock.textContent = now.toLocaleTimeString();
    }, 0);
}

start.addEventListener("click", startClock);

stop.addEventListener("click", () => {
    clearInterval(setIntervalID);
    clock.textContent = "00:00:00";
});
