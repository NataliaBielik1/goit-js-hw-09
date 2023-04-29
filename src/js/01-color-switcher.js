function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const startBtn = document.querySelector('[data-start]');

const stopBtn = document.querySelector('[data-stop]');

const setBodyBgToRandom = () => document.body.style.backgroundColor = getRandomHexColor();

let intervalID = 0;
const onStart = () => { 
    if (intervalID > 0) {
        return;
    }
    setBodyBgToRandom();
    intervalID = setInterval(() => setBodyBgToRandom(), 1000);
    startBtn.disabled = "disabled";
    stopBtn.disabled = "";
};

const onStop = () => { 
    clearInterval(intervalID);
    intervalID = 0;
    startBtn.disabled = "";
    stopBtn.disabled = "disabled";
};

stopBtn.disabled = "disabled";

startBtn.onclick = onStart;
stopBtn.onclick = onStop;
