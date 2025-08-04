let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  display.textContent = `${mins}:${secs}`;
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  updateDisplay();
});
