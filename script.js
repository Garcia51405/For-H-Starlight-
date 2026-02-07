const lines = document.querySelectorAll(".line");
const fadeout = document.getElementById("fadeout");

let delay = 0;

lines.forEach((line, index) => {
setTimeout(() => {
line.style.opacity = 1;
}, delay);
delay += 3500; // time between lines
});

// Fade entire screen to black after last line
setTimeout(() => {
fadeout.style.opacity = 1;
}, delay + 2000);