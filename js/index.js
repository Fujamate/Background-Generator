/* All the elements that are involved */

var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

/* Changing the 2 picked colors and write the values in "h3" */

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  h3.textContent = body.style.background;
}

/* adding the Eventlistener for input */

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
