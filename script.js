// Analog Clock
let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");

let anaClock = function () {
  let timeNow = new Date();
  let secToDeg = timeNow.getSeconds() * 6;
  let minToDeg = timeNow.getMinutes() * 6;
  let hourToDeg = timeNow.getHours() * 30 + timeNow.getMinutes() / 2;

  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hourToDeg}deg)`;
};
anaClock();
setInterval(anaClock, 1000);

// Digital Clock

let hourBox = document.querySelector(".hours");
let mintBox = document.querySelector(".minutes");
let secBox = document.querySelector(".seconds");
let ampmBox = document.querySelector(".AMPM");

let digiClock = function () {
  let hourNow = new Date().getHours();
  let mintNow = String(new Date().getMinutes()).padStart(2, "0");
  let secNow = String(new Date().getSeconds()).padStart(2, "0");
  mintBox.innerText = String(mintNow);
  secBox.innerText = String(secNow);

  if (hourNow > 12) {
    hourBox.innerText = String(hourNow - 12).padStart(2, "0");
    ampmBox.innerText = "PM";
  } else if (hourNow === 0) {
    hourBox.innerText = String(hourNow + 12).padStart(2, "0");
    ampmBox.innerText = "AM";
  } else if (hourNow === 12) {
    hourBox.innerText = String(hourNow).padStart(2, "0");
    ampmBox.innerText = "PM";
  } else if (hourNow < 12) {
    hourBox.innerText = String(hourNow).padStart(2, "0");
    ampmBox.innerText = "AM";
  }
};
digiClock();
setInterval(digiClock, 1000);

// Clock Switch
let clockSwitch = document.querySelector(".clockSwitch");
let analogClock = document.querySelector(".anaClock");
let DigitalClock = document.querySelector(".digiClock");
let DigitalClockBody = document.querySelector(".clockBody");
let buttonBody = document.querySelector(".button");
clockSwitch.addEventListener("click", () => {
  if (clockSwitch.innerText.match("Digital")) {
    DigitalClock.style.display = "block";
    analogClock.style.display = "none";
    clockSwitch.innerText = "Switch to Analog";
  } else if (clockSwitch.innerText.match("Analog")) {
    DigitalClock.style.display = "none";
    analogClock.style.display = "flex";
    clockSwitch.innerText = "Switch to Digital";
  }
});

// Theme Switch
let themekSwitch = document.querySelector(".themeSwitch");
themekSwitch.addEventListener("click", () => {
  analogClock.classList.toggle("darkMode");
  DigitalClockBody.classList.toggle("darkMode");
  buttonBody.classList.toggle("darkMode");

  if (themekSwitch.innerText.match("Dark")) {
    themekSwitch.innerText = "Switch to Light";
  } else if (themekSwitch.innerText.match("Light")) {
    themekSwitch.innerText = "Switch to Dark";
  }
});
