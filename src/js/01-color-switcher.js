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
};

const onStop = () => { 
    clearInterval(intervalID);
    startBtn.disabled = "";
};

startBtn.onclick = onStart;
stopBtn.onclick = onStop;
