// Day 14 Logic Practice
console.log("Lab Session 14 Started");

// VARIABLES
const selectedDay = 14;

// DOM ELEMENTS
const display = document.getElementById("display");
const dayText = document.getElementById("day");

// INITIAL SETUP
dayText.innerText = selectedDay;
display.innerText = "Logic Engine Online";

// OPTIONAL: LIVE TIME UPDATE
setInterval(() => {
    const time = new Date().toLocaleTimeString();
    display.innerText = `Logic Engine Online | ${time}`;
}, 1000);
