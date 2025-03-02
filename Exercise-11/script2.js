let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTimerDisplay() {
    let formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    document.getElementById("timerDisplay").textContent = formattedTime;
}

function padZero(num) {
    return num < 10 ? "0" + num : num;
}

function startStopwatch() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateTimerDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimerDisplay();
}

document.getElementById("startBtn").addEventListener("click", startStopwatch);
document.getElementById("stopBtn").addEventListener("click", stopStopwatch);
document.getElementById("resetBtn").addEventListener("click", resetStopwatch);

document.getElementById("dob").addEventListener("mouseover", function() {
    let dob = new Date(document.getElementById("dob").value);
    if (dob && !isNaN(dob)) {
        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        let monthDiff = today.getMonth() - dob.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        document.getElementById("ageDisplay").textContent = "Your Age: " + age;
    } else {
        document.getElementById("ageDisplay").textContent = "Your Age: Invalid Date";
    }
});

document.getElementById("textInput").addEventListener("input", function() {
    let charCount = this.value.length;
    document.getElementById("charCount").textContent = `Characters: ${charCount}`;
});
