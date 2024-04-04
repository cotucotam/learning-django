const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');



const newYears = "1 Jan 2023";

function countdown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate -currentDate)/1000;
  const days = Math.floor(totalSeconds/3600/24);
  const hours = Math.floor(totalSeconds/3600)%24;
  const minutes = Math.floor(totalSeconds/60)%60;
  const seconds = Math.floor(totalSeconds)%60;
  console.log(days,hours,minutes,seconds);

  daysE1.innerHTML = days;
  hoursE1.innerHTML = hours;
  minsE1.innerHTML = minutes;
  secondsE1.innerHTML = seconds;
}

// initial call
countdown()

setInterval(countdown,1000);
