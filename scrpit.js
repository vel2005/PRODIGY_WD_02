let timerInterval;
let elapsedTime = 0;
let isRunning = false;
let lapCount = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps');

// Start the stopwatch
startButton.addEventListener('click', () => {
  if (!isRunning) {
    timerInterval = setInterval(updateTime, 1000);
    isRunning = true;
  }
});

// Pause the stopwatch
pauseButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
});

// Reset the stopwatch
resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  isRunning = false;
  elapsedTime = 0;
  lapCount = 0;
  display.textContent = '00:00:00';
  lapsList.innerHTML = '';
});

// Record a lap
lapButton.addEventListener('click', () => {
  if (isRunning) {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${++lapCount}: ${lapTime}`;
    lapsList.appendChild(lapItem);
  }
});

// Update the timer display
function updateTime() {
  elapsedTime++;
  display.textContent = formatTime(elapsedTime);
}

// Format time from seconds to HH:MM:SS
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

// Add leading zero if needed
function pad(number) {
  return number < 10 ? '0' + number : number;
}
