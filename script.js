const messages = [
"Hope Heidi’s reading this, she who goes by Heidi Araid Rodriguez Ramirez :)",
"",
"No matter the good or the bad, know I’m a fan of you.",
"Into you, with quite the crush on you, maybe even one that’s a little too much at times.",
"You’ve been more than understanding each step of the way, and I know I haven’t always matched that.",
"",
"Truly, Heidi, thank you for every day we’ve shared together, the good, the bad, and the messy.",
"Thank you for giving me the time and chance to get to know you, and to keep getting to know you.",
"",
"You, believe it or not, shine like a star.",
"Sometimes brighter, sometimes softer, but always there in a way that’s delightful to the people around you.",
"No matter the distance or the trouble, I’m fortunate for you, and for the patience you’ve had with me.",
"",
"Sincerely, from a fan."
];

let lineIndex = 0;
let charIndex = 0;
const speed = 40;

function typeLine() {
if (lineIndex >= messages.length) return;

const line = messages[lineIndex];
const typewriter = document.getElementById("typewriter");

if (charIndex < line.length) {
typewriter.innerHTML += line.charAt(charIndex);
charIndex++;
setTimeout(typeLine, speed);
} else {
typewriter.innerHTML += "<br>";
charIndex = 0;
lineIndex++;
setTimeout(typeLine, 600);
}
}

window.onload = typeLine;