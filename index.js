//update test

function stopWatch() {
  sec += 1;

  //Logic to determine when to increment next value
  if (sec / 60 === 1) {
    sec = 0;
    min++;

    if (min / 60 === 1) {
      min = 0;
      hr++;
    }
  }

  //adjust display
  if (sec < 10) {
    displaySeconds = "0" + sec.toString();
  } else {
    displaySeconds = sec;
  }

  if (min < 10) {
    displayMinutes = "0" + min.toString();
  } else {
    displayMinutes = min;
  }

  if (hr < 10) {
    displayHours = "0" + hr.toString();
  } else {
    displayHours = hr;
  }

  //Display updated time values to user
  document.getElementById("display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
  if (watchStatus === "stopped") {
    //Start the stopwatch (by calling the setInterval() function)
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    watchStatus = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    watchStatus = "stopped";
  }
}

//reset stopwatch
function reset() {
  window.clearInterval(interval);
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
}

let sec = 0;
let min = 0;
let hr = 0;

//for displaying
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//control auto runtime
let interval = null;

//stopwatch status
let watchStatus = "stopped";
