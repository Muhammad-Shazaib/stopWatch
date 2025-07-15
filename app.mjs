let min = 0;
let sec = 0;
let msec = 0;
let interval;

const htmlmin = document.getElementById("min");
const htmlsec = document.getElementById("sec");
const htmlmsec = document.getElementById("msec");

function updateDisplay() {
  htmlmin.textContent = min.toString().padStart(2, '0');
  htmlsec.textContent = sec.toString().padStart(2, '0');
  htmlmsec.textContent = msec.toString().padStart(2, '0');
}

function start() {
  interval = setInterval(() => {
    msec++;
    if (msec >= 100) {
      sec++;
      msec = 0;
    }
    if (sec >= 60) {
      min++;
      sec = 0;
    }
    updateDisplay();
  }, 10);
  document.getElementById("st").disabled = true;
}

function stop() {
  clearInterval(interval);
  document.getElementById("st").disabled = false;
}

function reset() {
  clearInterval(interval);
  min = 0;
  sec = 0;
  msec = 0;
  updateDisplay();
  document.getElementById("st").disabled = false;
}
